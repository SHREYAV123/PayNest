import Head from 'next/head';

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Dashboard | PayNest</title>
      </Head>

      <main className="w-full min-h-screen px-6 py-10 text-gray-800 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Welcome Header */}
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-purple-700">
              Welcome to PayNest 👋
            </h1>
            <p className="text-base text-gray-600">
              Your smart digital wallet — manage, track and transfer with ease.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
            <div className="p-6 bg-white border shadow rounded-xl">
              <h2 className="text-2xl font-bold text-purple-600">₹12,500</h2>
              <p className="mt-1 text-sm text-gray-500">Wallet Balance</p>
            </div>
            <div className="p-6 bg-white border shadow rounded-xl">
              <h2 className="text-2xl font-bold text-green-500">+₹1,500</h2>
              <p className="mt-1 text-sm text-gray-500">This Month Received</p>
            </div>
            <div className="p-6 bg-white border shadow rounded-xl">
              <h2 className="text-2xl font-bold text-red-500">-₹750</h2>
              <p className="mt-1 text-sm text-gray-500">This Month Spent</p>
            </div>
          </div>

          {/* Shortcuts or Actions */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="p-6 transition bg-white border shadow rounded-xl hover:shadow-md">
              <h3 className="mb-1 text-lg font-semibold text-gray-800">💸 Transfer Money</h3>
              <p className="text-sm text-gray-600">Send money to your friends instantly.</p>
            </div>
            <div className="p-6 transition bg-white border shadow rounded-xl hover:shadow-md">
              <h3 className="mb-1 text-lg font-semibold text-gray-800">📄 Transaction History</h3>
              <p className="text-sm text-gray-600">View your recent transactions and top-ups.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
