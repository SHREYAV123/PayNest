import { NextResponse } from "next/server";
import prisma from "@repo/db/client";

export const GET = async () => {
    try {
        // Check if a merchant with this email already exists
        const existingMerchant = await prisma.merchant.findUnique({
            where: { email: "asd" },
        });

        if (existingMerchant) {
            return NextResponse.json({ message: "Merchant already exists" }, { status: 400 });
        }

        
        await prisma.merchant.create({
            data: {
                email: "asd",
                name: "adsads",
                auth_type: "Google",
            },
        });

        return NextResponse.json({ message: "Merchant created successfully" });
    } catch (error) {
        console.error("Error creating merchant:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};
