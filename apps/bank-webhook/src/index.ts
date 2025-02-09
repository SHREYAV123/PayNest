import express from "express";
import db from "@repo/db/client";
import { z } from "zod";
const app = express();

app.use(express.json())

const webhookSchema = z.object({
    token: z.string(),
    user_identifier: z.string(),
    amount: z.string().refine(val => !isNaN(Number(val)), "Amount must be a valid number"),
});

app.post("/hdfcWebhook", async (req, res) => {
    const validation = webhookSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({ message: "Invalid request" });
    }

    const { token, user_identifier, amount } = validation.data;
    const userId =  Number(user_identifier);
    const numericAmount = Number(amount);

    try { 
        const onramp = await db.onRampTransaction.findUnique({ where: { token } });

        if (!onramp) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        if (onramp.status !== "Processing") {
            return res.status(400).json({ message: "Transaction is not in a processable state" });
        }

        await db.$transaction([
            db.balance.update({
                where: { userId },
                data: { amount: { increment: numericAmount } }
            }),
            db.onRampTransaction.update({
                where: { token },
                data: { status: "Success" }
            })
        ]);
        

        res.json({ message: "Captured" });
    } catch (e) {
        console.error(e);
        res.status(411).json({ message: "Error while processing webhook" });
    }
});
app.listen(3003); 
