import { Card } from "@repo/ui/card"
import { Center } from "@repo/ui/center"

export const P2PRecipent = ({
transactions,
userId
}: {
transactions: {
timestamp: Date,
amount: number,
fromUserId: number,
toUserId: number,


}[],userId:number
}) => {
if (!transactions.length) {
return <Card title="Recent Transactions">
<div className="pt-8 pb-8 text-center">
No Recent transactions
</div>
</Card>
}
return <div>
     <Center>
<Card title="Recent Transactions">
<div className="pt-2 min-w-72">
{transactions.map(t => <div className="flex justify-between " key={t.timestamp.toString()} >
<div>
<div className="text-sm">
{t.fromUserId === userId ? "Sent INR" : "Received INR"}
</div>
<div className="text-xs text-slate-600">
{new Date(t.timestamp).toDateString()}
</div>
</div>
<div className="flex flex-col justify-center">
{t.fromUserId === userId ? (
<>- Rs {t.amount / 100}</> // Show negative amount for sent
) : (
<>+ Rs {t.amount / 100}</> // Show positive amount for received
)}
</div>

</div>)}
</div>
</Card>
</Center>
</div>
}