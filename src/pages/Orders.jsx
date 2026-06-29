import { useState } from 'react'

const fnoStocks = [
  { name: 'ABB', exchange: 'NSE', price: '7,015.00', change: '22.00 (0.31%)', up: true },
  { name: 'Adani Energy Solutions', exchange: 'NSE', price: '1,477.90', change: '-29.90 (-1.98%)', up: false },
  { name: 'Adani Enterprises', exchange: 'NSE', price: '2,976.00', change: '-62.00 (-2.04%)', up: false },
  { name: 'Adani Green Energy', exchange: 'NSE', price: '1,492.00', change: '-34.10 (-2.23%)', up: false },
  { name: 'Adani Ports & SEZ', exchange: 'NSE', price: '1,783.10', change: '-12.90 (-0.72%)', up: false },
  { name: 'Adani Power', exchange: 'NSE', price: '225.87', change: '-3.40 (-1.48%)', up: false },
]

const tabs = ['Today', 'Super', 'Flash', 'Baskets', 'Forever', 'SIPs', 'Webhooks']

function EmptyState({ label }) {
  return (
    <div className="flex items-center gap-4 py-5 text-gray-400">
      <div className="w-10 h-10 border-2 border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <p className="text-sm text-gray-500">Orders when placed appear here. None at this moment...</p>
    </div>
  )
}

export default function Orders() {
  const [activeTab, setActiveTab] = useState('Today')
  const [search, setSearch] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col lg:flex-row gap-4">

        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-72 flex-shrink-0 bg-white rounded-lg border border-gray-200 h-fit">
          <div className="p-3 border-b border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" /></svg>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search for companies to invest or trade"
                className="bg-transparent text-xs w-full outline-none text-gray-600 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-orange-500">🔖</span>
              <span className="text-sm font-semibold text-gray-800">FnO Stocks</span>
            </div>
            <span className="text-orange-400">▼</span>
          </div>

          <div className="flex gap-2 px-4 py-2 border-b border-gray-100">
            <button className="border border-gray-300 rounded px-2 py-1 text-xs text-gray-600 hover:border-green-500">f</button>
            <button className="border border-gray-300 rounded px-2 py-1 text-xs text-gray-600 hover:border-green-500">δ</button>
          </div>

          <div className="divide-y divide-gray-50">
            {fnoStocks.filter(s => s.name.toLowerCase().includes(search.toLowerCase())).map(stock => (
              <div key={stock.name} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="text-sm font-medium text-gray-800">{stock.name}</p>
                  <p className="text-xs text-gray-400">{stock.exchange}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${stock.up ? 'text-green-600' : 'text-red-500'}`}>{stock.price}</p>
                  <p className={`text-xs ${stock.up ? 'text-green-600' : 'text-red-500'}`}>{stock.change}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 text-xs text-gray-400">
            <span>Name</span><span>LTP</span><span>LTP %</span><span>Color</span>
            <span className="flex gap-2">
              <button>🔗</button><button>↗</button><button>⋮</button>
            </span>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1">
          <div className="bg-white rounded-lg border border-gray-200 p-5">

            {/* Tab bar + P&L */}
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-1 flex-wrap">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 text-sm transition-colors ${activeTab === tab ? 'text-green-600 font-semibold border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 whitespace-nowrap">
                <span>P&L:</span>
                <span className="font-semibold text-gray-800">₹ 0.00</span>
                <span className="text-gray-400">on 0 positions</span>
                <button className="text-gray-400 hover:text-gray-600">›</button>
              </div>
            </div>

            {/* Pending Orders */}
            <p className="text-sm font-semibold text-gray-800 mb-2">Pending Orders</p>
            <EmptyState />

            {/* Executed */}
            <p className="text-sm font-semibold text-gray-800 mt-5 mb-2">Executed</p>
            <EmptyState />

          </div>
        </main>

      </div>
    </div>
  )
}
