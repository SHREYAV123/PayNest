import Head from 'next/head';

export default function TransactionsPage() {
  return (
    <>
      <Head>
        <title>Transactions | PayNest</title>
      </Head>

      <main className="bg-[#f9fafb] px-4 sm:px-6 py-10 text-gray-800 mt-5 mb-36 rounded-lg">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-purple-700">🧾 Transactions</h1>
            <p className="mt-1 text-sm text-gray-500">
              All your recent activity, neatly listed.
            </p>
          </div>

          {/* Transaction List */}
          <div className="space-y-4 ">
            {/* Transaction Item */}
            <div className="flex items-center justify-between p-4 transition bg-white border rounded-lg shadow hover:shadow-md">
              <div className="flex items-start gap-2">
                <span className="text-lg">📤</span>
                <div>
                  <p className="text-sm font-medium text-gray-800">Sent to Bob</p>
                  <p className="text-xs text-gray-500">Apr 3, 2025 • 10:30 AM</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-red-500">- ₹500</p>
            </div>

            <div className="flex items-center justify-between p-4 transition bg-white border rounded-lg shadow hover:shadow-md">
              <div className="flex items-start gap-2">
                <span className="text-lg">📥</span>
                <div>
                  <p className="text-sm font-medium text-gray-800">Received from Alice</p>
                  <p className="text-xs text-gray-500">Apr 2, 2025 • 4:45 PM</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-green-600">+ ₹1,000</p>
            </div>

            <div className="flex items-center justify-between p-4 transition bg-white border rounded-lg shadow hover:shadow-md">
              <div className="flex items-start gap-2">
                <span className="text-lg">💰</span>
                <div>
                  <p className="text-sm font-medium text-gray-800">Wallet Top-up</p>
                  <p className="text-xs text-gray-500">Apr 1, 2025 • 9:15 AM</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-green-600">+ ₹5,000</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
