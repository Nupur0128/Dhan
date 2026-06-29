import { useState } from 'react'

const fnoStocks = [
  { name: 'ABB', exchange: 'NSE', price: '7,020.00', change: '27.00 (0.39%)', up: true },
  { name: 'Adani Energy Solutions', exchange: 'NSE', price: '1,479.30', change: '-28.50 (-1.89%)', up: false },
  { name: 'Adani Enterprises', exchange: 'NSE', price: '2,972.00', change: '-66.00 (-2.17%)', up: false },
  { name: 'Adani Green Energy', exchange: 'NSE', price: '1,492.30', change: '-33.80 (-2.21%)', up: false },
  { name: 'Adani Ports & SEZ', exchange: 'NSE', price: '1,782.60', change: '-13.40 (-0.75%)', up: false },
  { name: 'Adani Power', exchange: 'NSE', price: '225.52', change: '-3.75 (-1.64%)', up: false },
]

export default function Positions() {
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

            {/* Header row */}
            <div className="flex items-center gap-6 mb-6">
              <h2 className="text-base font-semibold text-gray-800">Today's Positions</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>P&L:</span>
                <span className="font-semibold text-gray-800">₹ 0.00</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Open:</span>
                <span className="font-semibold text-gray-800">0</span>
              </div>
              <button className="ml-auto text-blue-400 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </button>
            </div>

            {/* Open section */}
            <p className="text-sm font-semibold text-gray-700 mb-4">Open</p>

            {/* Empty state */}
            <div className="flex items-center gap-4 py-6 text-gray-400">
              <div className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <p className="text-sm text-gray-500">
                When you place orders on exchange, corresponding positions appear here. None at this moment...
              </p>
            </div>

          </div>
        </main>

      </div>
    </div>
  )
}
