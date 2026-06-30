import { useState } from 'react'

const fnoStocks = [
  { name: 'ABB', exchange: 'NSE', price: '7,015.00', change: '22.00 (0.31%)', up: true },
  { name: 'Adani Energy Solutions', exchange: 'NSE', price: '1,479.80', change: '-28.00 (-1.86%)', up: false },
  { name: 'Adani Enterprises', exchange: 'NSE', price: '2,972.60', change: '-65.40 (-2.15%)', up: false },
  { name: 'Adani Green Energy', exchange: 'NSE', price: '1,492.00', change: '-34.10 (-2.23%)', up: false },
  { name: 'Adani Ports & SEZ', exchange: 'NSE', price: '1,782.60', change: '-13.40 (-0.75%)', up: false },
  { name: 'Adani Power', exchange: 'NSE', price: '225.70', change: '-3.57 (-1.56%)', up: false },
]

const top25Companies = [
  { sno: 1,  name: 'Reliance Industries', amount: '₹2,45,000' },
  { sno: 2,  name: 'HDFC Bank',           amount: '₹1,98,500' },
  { sno: 3,  name: 'Bharti Airtel',       amount: '₹1,75,300' },
  { sno: 4,  name: 'ICICI Bank',          amount: '₹1,62,800' },
  { sno: 5,  name: 'SBI',                 amount: '₹1,45,600' },
  { sno: 6,  name: 'TCS',                 amount: '₹1,38,900' },
  { sno: 7,  name: 'Bajaj Finance',       amount: '₹1,22,400' },
  { sno: 8,  name: 'Larsen & Toubro',     amount: '₹1,15,700' },
  { sno: 9,  name: 'Life Insurance',      amount: '₹1,08,200' },
  { sno: 10, name: 'Hind. Unilever',      amount: '₹98,500'  },
  { sno: 11, name: 'Sun Pharma.Inds.',    amount: '₹92,300'  },
  { sno: 12, name: 'Maruti Suzuki',       amount: '₹88,700'  },
  { sno: 13, name: 'Adani Power',         amount: '₹82,400'  },
  { sno: 14, name: 'Axis Bank',           amount: '₹78,900'  },
  { sno: 15, name: 'Adani Ports',         amount: '₹74,600'  },
  { sno: 16, name: 'Infosys',             amount: '₹71,200'  },
  { sno: 17, name: 'Kotak Mah. Bank',     amount: '₹68,500'  },
  { sno: 18, name: 'Adani Enterp.',       amount: '₹65,300'  },
  { sno: 19, name: 'Titan Company',       amount: '₹62,100'  },
  { sno: 20, name: 'M & M',               amount: '₹58,900'  },
  { sno: 21, name: 'ITC',                 amount: '₹55,700'  },
  { sno: 22, name: 'NTPC',                amount: '₹52,400'  },
  { sno: 23, name: 'UltraTech Cem.',      amount: '₹49,200'  },
  { sno: 24, name: 'Bharat Electron',     amount: '₹46,800'  },
  { sno: 25, name: 'JSW Steel',           amount: '₹43,500'  },
]

const portfolioTabs = ['Stocks', 'Mutual Fund', 'ETFs']
const filterTabs = ['Overall', 'Multi-Baggers', 'Special', 'Pay Later', 'Insights', 'XIRR', 'CA', 'Unlisted', 'SIPs']

const explorCards = [
  { icon: '📊', title: 'Market Movers', desc: 'Explore top market movers today!' },
  { icon: '🌊', title: 'ETFs', desc: 'Invest in Exchange Traded Funds.' },
  { icon: '📦', title: 'smallcases', desc: 'Explore curated stock baskets' },
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Stocks')
  const [activeFilter, setActiveFilter] = useState('Overall')
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
        <main className="flex-1 flex flex-col gap-4">

          {/* Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {portfolioTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${activeTab === tab ? 'border-green-600 text-green-600 font-medium' : 'border-gray-300 text-gray-600 hover:border-green-500'}`}
              >
                {tab}
              </button>
            ))}
            <button className="border border-gray-300 rounded-full px-2 py-1 text-sm">📦</button>
            <button className="border border-gray-300 rounded-full px-2 py-1 text-sm">✅</button>
          </div>

          {/* Portfolio Value */}
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h2 className="text-base font-semibold text-gray-800 mb-4">Portfolio Value</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-1">
              {[
                { label: 'Investment', value: '₹ 62,53,560.00', green: false },
                { label: 'Current Value', value: '₹ 6,03,77,855.00', green: false },
                { label: 'Overall Profits', value: '₹ 5,41,24,295.00', green: false },
                { label: "Today's Profit", value: '₹ 33,278.00', green: true },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                  <p className={`text-xl font-semibold ${item.green ? 'text-green-600' : 'text-gray-800'}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filter tabs */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-2 flex-wrap mb-5">
              {filterTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${activeFilter === tab ? 'border-green-600 text-green-700 bg-green-50 font-medium' : 'border-gray-300 text-gray-600 hover:border-green-500'}`}
                >
                  {tab} {tab === 'Overall' && <span className="ml-1 bg-green-600 text-white text-[10px] rounded-full px-1.5">0</span>}
                </button>
              ))}
              <button className="text-gray-400 hover:text-gray-600 text-sm">‹</button>
              <button className="text-gray-400 hover:text-gray-600 text-sm">›</button>
            </div>

            {/* Company List */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="text-left px-4 py-2 text-indigo-500 font-semibold text-xs w-16">S.No.</th>
                    <th className="text-left px-4 py-2 text-indigo-500 font-semibold text-xs">Name</th>
                    <th className="text-right px-4 py-2 text-indigo-500 font-semibold text-xs">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {top25Companies.map((company, idx) => (
                    <tr
                      key={company.sno}
                      className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-indigo-50/30'
                      }`}
                    >
                      <td className="px-4 py-2.5 text-gray-500 text-xs">{company.sno}.</td>
                      <td className="px-4 py-2.5">
                        <p className="text-black font-medium">{company.name}</p>
                        <p className="text-[10px] text-gray-400">NSE</p>
                      </td>
                      <td className="px-4 py-2.5 text-right text-green-600 font-semibold">{company.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Explore Investing */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Explore Investing on Dhan</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {explorCards.map(card => (
                <div key={card.title} className="bg-white border border-gray-200 rounded-lg px-4 py-4 flex items-center justify-between hover:border-green-400 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{card.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{card.title}</p>
                      <p className="text-xs text-gray-500">{card.desc}</p>
                    </div>
                  </div>
                  <button className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center text-white text-xs flex-shrink-0">▶</button>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}
