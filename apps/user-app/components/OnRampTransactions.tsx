import { Card } from "@repo/ui/card";

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    status: string; // You can change to "success" | "pending" later
    provider: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="pt-8 pb-8 text-center">No Recent transactions</div>
      </Card>
    );
  }

  return (
    <Card title="Recent Transactions">
      <div className="pt-2 space-y-4">
        {transactions.map((t: any, idx: number) => (
          <div key={idx} className="flex justify-between">
            <div>
              <div className="text-sm font-medium text-gray-700">
                Received INR
              </div>
              <div className="text-xs text-slate-600">
                {t.time.toDateString()}
              </div>
              <div className="text-xs italic text-slate-500">
                Provider: {t.provider}
              </div>
            </div>
            <div className="flex flex-col justify-center font-semibold text-green-600">
              + ₹{t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
