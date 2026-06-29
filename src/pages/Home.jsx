import { useState } from 'react'

const fnoStocks = [
  { name: 'ABB', exchange: 'NSE', price: '7,003.00', change: '10.00 (0.14%)', up: true },
  { name: 'Adani Energy Solutions', exchange: 'NSE', price: '1,482.80', change: '-25.00 (-1.66%)', up: false },
  { name: 'Adani Enterprises', exchange: 'NSE', price: '2,976.50', change: '-61.50 (-2.02%)', up: false },
  { name: 'Adani Green Energy', exchange: 'NSE', price: '1,498.00', change: '-28.10 (-1.84%)', up: false },
  { name: 'Adani Ports & SEZ', exchange: 'NSE', price: '1,785.50', change: '-10.50 (-0.58%)', up: false },
  { name: 'Adani Power', exchange: 'NSE', price: '226.69', change: '-2.58 (-1.13%)', up: false },
]

const gainers = [
  { name: 'Omaxe', price: '91.02', change: '+13.54 (17.48%)', color: 'bg-green-600' },
  { name: 'Tirupati Forge', price: '58.03', change: '+9.67 (20.00%)', color: 'bg-purple-600' },
  { name: 'Macpower CNC Mac...', price: '1,319.80', change: '+165.50 (14.34%)', color: 'bg-red-500' },
  { name: 'Bajaj HealthCare', price: '348.05', change: '+44.00 (14.47%)', color: 'bg-blue-600' },
  { name: 'Gujarat Natural Resou...', price: '116.69', change: '+14.84 (14.57%)', color: 'bg-orange-500' },
]

const portfolioTabs = ['All', 'Stocks', 'Mutual Fund', 'ETFs']
const trendingTabs = ['Stocks in News', 'Most Traded', 'Most Bought MTF', 'Most Delivered in Portfolio']

const trendingStocks = [
  { name: 'Titagarh Rail Systems', price: '878.35', change: '-10.10 (-1.14%)', up: false, color: 'bg-blue-700' },
  { name: 'Alkem Laboratories', price: '5,418.00', change: '-7.00 (-0.13%)', up: false, color: 'bg-blue-500' },
  { name: 'Vijaya Diagnostic Centre', price: '1,309.00', change: '-58.80 (-4.30%)', up: false, color: 'bg-pink-400' },
  { name: 'ICICI Lombard General Insurance', price: '1,769.40', change: '-44.20 (-2.44%)', up: false, color: 'bg-orange-600' },
  { name: 'Supreme Industries', price: '3,215.90', change: '-206.00 (-6.02%)', up: false, color: 'bg-red-500' },
  { name: 'Vedanta', price: '275.95', change: '+2.50 (0.91%)', up: true, color: 'bg-red-600' },
  { name: 'Himadri Speciality Chemical', price: '677.30', change: '-0.80 (-0.12%)', up: false, color: 'bg-yellow-500' },
  { name: 'Radico Khaitan', price: '3,812.00', change: '-17.80 (-0.46%)', up: false, color: 'bg-yellow-700' },
  { name: 'Axis Bank', price: '1,376.80', change: '-0.40 (-0.03%)', up: false, color: 'bg-purple-700' },
  { name: 'HDFC Bank', price: '796.60', change: '+0.30 (0.04%)', up: true, color: 'bg-blue-800' },
]

const indices = [
  { name: 'Nifty Midcap Select', value: '14,307.10', change: '-127.45 (-0.88%)', expiry: true },
  { name: 'Nifty Bank', value: '57,667.85', change: '-509.20 (-0.88%)', expiry: true },
  { name: 'Finnifty', value: '26,589.30', change: '-181.25 (-0.68%)', expiry: true },
  { name: 'Nifty 50', value: '23,937.30', change: '-118.70 (-0.49%)', expiry: true },
  { name: 'Sensex', value: '76,662.75', change: '-437.72 (-0.57%)', expiry: false },
  { name: 'BSE BANKEX', value: '65,077.96', change: '-521.66 (-0.80%)', expiry: false },
  { name: 'SILVERM JUN FUT', value: '2,21,200.00', change: '-252.00 (-0.11%)', expiry: true },
  { name: 'SILVER JUL FUT', value: '2,19,102.00', change: '-2,302.00 (-1.04%)', expiry: false },
  { name: 'GOLDM JUL FUT', value: '1,41,320.00', change: '-692.00 (-0.49%)', expiry: false },
  { name: 'CRUDEOIL JUL FUT', value: '6,628.00', change: '+51.00 (0.78%)', expiry: false },
  { name: 'CRUDEOILM JUL FUT', value: '6,628.00', change: '+51.00 (0.78%)', expiry: false },
  { name: 'NATURALGAS JUL FUT', value: '310.70', change: '-2.20 (-0.70%)', expiry: false },
]

const ipos = [
  { name: 'Sri Priyanka Geo Com...', size: '₹ 94.51 Cr' },
  { name: 'CSM Technologies', size: '₹ 145.78 Cr' },
  { name: 'Crazy Snacks', size: '₹ 31.47 Cr' },
]

const corporateActions = [
  { date: '30 Jun', name: 'Dalmia Bharat', action: 'AGM' },
  { date: '30 Jun', name: 'CMR Green Technologies', action: 'Quarterly Results' },
  { date: '30 Jun', name: 'Inspirisys Solutions', action: 'AGM' },
  { date: '30 Jun', name: 'Hindustan Unilever', action: 'AGM' },
  { date: '30 Jun', name: 'Cinevista', action: 'AGM' },
]

const tradingTools = [
  { icon: '⚡', label: 'Power Scalper' },
  { icon: '📋', label: 'Advanced Option Chain' },
  { icon: '🔔', label: 'Price Alerts' },
  { icon: '📺', label: 'TradingView Webhook' },
  { icon: '🎛️', label: "Trader's Controls" },
  { icon: '📓', label: "Trader's Diary" },
]

const powerTools = [
  { name: 'DEXT T3', tag: 'NEW', desc: 'A Trading Terminal for the Future!', icon: '🖥️' },
  { name: 'ScanX', tag: null, desc: 'Filter, spot, and trade opportunities from one platform!', icon: '🔍' },
  { name: 'Options Trader', tag: null, desc: "Designed specifically for India's F&O traders", icon: '📊' },
]
const marketMoverTabs = ['Gainers', 'Losers', 'Top Volume']

const featuredAlgos = [
  { name: 'Damper Credit Spread', from: '₹ 100000', color: 'bg-gray-400' },
  { name: 'Convex Credit Spread Overnight', from: '₹ 100000', color: 'bg-gray-800' },
  { name: 'Ratio-Fluxer Credit Spread Expiry', from: '₹ 120000', color: 'bg-gray-600' },
]

const latestNews = [
  { title: 'Aplagon appoints Carl Lindgren as Board Chair to guide APAC development', time: 'just now', img: '🟧' },
  { title: 'IQM named Major Player in IDC quantum computing assessment', time: 'just now', img: '🟨' },
  { title: 'Zambon and Amneal secure positive CHMP opinion for Parkinson\'s therapy Hopledo', time: 'just now', img: '🟫' },
]

const tradeItems = [
  { icon: '🌐', label: 'Equities' },
  { icon: '🌱', label: 'Mutual Funds' },
  { icon: '📊', label: 'ETFs' },
  { icon: '📋', label: 'Options' },
  { icon: '💹', label: 'Futures' },
  { icon: '🏔️', label: 'Commodities' },
]

export default function Home() {
  const [portfolioTab, setPortfolioTab] = useState('All')
  const [moverTab, setMoverTab] = useState('Gainers')
  const [trendingTab, setTrendingTab] = useState('Stocks in News')
  const [search, setSearch] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col lg:flex-row gap-4">

        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-72 flex-shrink-0 bg-white rounded-lg border border-gray-200 h-fit">
          {/* Search */}
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

          {/* FnO Stocks header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-orange-500">🔖</span>
              <span className="text-sm font-semibold text-gray-800">FnO Stocks</span>
            </div>
            <span className="text-orange-400">▼</span>
          </div>

          {/* Filter icons */}
          <div className="flex gap-2 px-4 py-2 border-b border-gray-100">
            <button className="border border-gray-300 rounded px-2 py-1 text-xs text-gray-600 hover:border-green-500">f</button>
            <button className="border border-gray-300 rounded px-2 py-1 text-xs text-gray-600 hover:border-green-500">δ</button>
          </div>

          {/* Stock list */}
          <div className="divide-y divide-gray-50">
            {fnoStocks
              .filter(s => s.name.toLowerCase().includes(search.toLowerCase()))
              .map(stock => (
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

          {/* Footer labels */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 text-xs text-gray-400">
            <span>Name</span><span>LTP</span><span>LTP %</span><span>Color</span>
            <span className="flex gap-2">
              <button>🔗</button><button>↗</button><button>⋮</button>
            </span>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 flex flex-col gap-4">

          {/* My Portfolio */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <h2 className="text-base font-semibold text-gray-800">My Portfolio</h2>
              {portfolioTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setPortfolioTab(tab)}
                  className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                    portfolioTab === tab
                      ? 'bg-green-600 text-white border-green-600'
                      : 'border-gray-300 text-gray-600 hover:border-green-500'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button className="border border-gray-300 rounded-full px-2 py-1 text-xs">📦</button>
              <button className="border border-gray-300 rounded-full px-2 py-1 text-xs">✅</button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[
                { label: 'Investment', value: '₹ 0.00' },
                { label: 'Current Value', value: '₹ 0.00' },
                { label: 'Overall Profits', value: '₹ 0.00 (0.00%)' },
                { label: "Today's Profit", value: '₹ 0.00 (0.00%)' },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-lg font-semibold text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>

            {/* P&L bar */}
            <div className="flex flex-wrap items-center gap-4 bg-gray-50 rounded-md px-4 py-3 text-sm">
              <span className="text-gray-600">Today's P&L: <strong>₹ 0.00</strong></span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Open Positions: <strong>0</strong> <span className="text-gray-400 ml-1">›</span></span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Margin Available: <span className="text-red-500">-₹ 944.00</span></span>
              <div className="ml-auto flex items-center gap-2">
                <input className="border border-gray-300 rounded px-3 py-1.5 text-sm w-32 outline-none focus:border-green-500" defaultValue="₹ 50,000.00" />
                <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-1.5 rounded transition-colors">+ Top Up</button>
              </div>
            </div>
          </div>

          {/* Invest / Trade on Stock Exchanges + Market Movers */}
          <div className="flex flex-col xl:flex-row gap-4">

            {/* Invest/Trade section */}
            <div className="flex-1 bg-white rounded-lg border border-gray-200 p-4">
              <h2 className="text-base font-semibold text-gray-800 mb-4">Invest / Trade on Stock Exchanges</h2>
              <div className="grid grid-cols-3 gap-4 mb-5">
                {tradeItems.map(item => (
                  <button key={item.label} className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 transition-colors">
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Rent Stocks banner */}
              <div className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 mb-3 hover:border-green-400 cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📦</span>
                  <div>
                    <span className="text-sm font-medium text-gray-800">Rent Stocks</span>
                    <span className="text-xs text-gray-500 ml-2">Earn upto 18% pa with SLBM</span>
                  </div>
                  <span className="bg-orange-400 text-white text-xs px-2 py-0.5 rounded-full font-medium">★ New</span>
                </div>
                <span className="text-gray-400">›</span>
              </div>

              {/* Gold Vault banner */}
              <div className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 hover:border-green-400 cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🪙</span>
                  <div>
                    <span className="text-sm font-medium text-gray-800">Gold Vault</span>
                    <span className="text-xs text-gray-500 ml-2">Buy 99.9% pure Gold and Silver</span>
                  </div>
                  <span className="bg-orange-400 text-white text-xs px-2 py-0.5 rounded-full font-medium">★ New</span>
                </div>
                <span className="text-gray-400">›</span>
              </div>
            </div>

            {/* Market Movers */}
            <div className="w-full xl:w-80 bg-white rounded-lg border border-gray-200 p-4">
              <h2 className="text-base font-semibold text-gray-800 mb-3">Market Movers</h2>
              <div className="flex gap-2 mb-4">
                {marketMoverTabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setMoverTab(tab)}
                    className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                      moverTab === tab
                        ? 'bg-green-50 text-green-700 border-green-400'
                        : 'border-gray-300 text-gray-600 hover:border-green-400'
                    }`}
                  >
                    {tab === 'Gainers' ? '↗ ' : tab === 'Losers' ? '↘ ' : '▌ '}{tab}
                  </button>
                ))}
              </div>
              <div className="divide-y divide-gray-50">
                {gainers.map(stock => (
                  <div key={stock.name} className="flex items-center justify-between py-2.5 hover:bg-gray-50 cursor-pointer rounded">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full ${stock.color} flex items-center justify-center text-white text-xs font-bold`}>
                        {stock.name[0]}
                      </div>
                      <span className="text-sm text-gray-800">{stock.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-800 mr-2">{stock.price}</span>
                      <span className="text-xs text-green-600">{stock.change} ↗</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="text-xs text-green-600 hover:underline mt-3 float-right">view all ›</button>
            </div>
          </div>

          {/* Trending Stocks + Right Panel */}
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="flex-1 bg-white rounded-lg border border-gray-200 p-4">
              <h2 className="text-base font-semibold text-gray-800 mb-3">Trending Stocks</h2>
              <div className="flex gap-2 flex-wrap mb-4">
                {trendingTabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setTrendingTab(tab)}
                    className={`px-4 py-1.5 rounded-full text-xs border transition-colors ${
                      trendingTab === tab
                        ? 'border-green-600 text-green-600 bg-white'
                        : 'border-gray-300 text-gray-600 hover:border-green-500'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="divide-y divide-gray-100">
                {trendingStocks.map(stock => (
                  <div key={stock.name} className="flex items-center justify-between py-3 hover:bg-gray-50 cursor-pointer px-1">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${stock.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {stock.name[0]}
                      </div>
                      <span className="text-sm text-gray-800">{stock.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-800">{stock.price}</span>
                      <span className={`text-xs ${stock.up ? 'text-green-600' : 'text-red-500'}`}>
                        {stock.change} {stock.up ? '↗' : '↘'}
                      </span>
                      <button className="text-gray-400 hover:text-green-600 text-lg leading-none">+</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-right mt-3">
                <button className="text-xs text-green-600 hover:underline">view all stocks ›</button>
              </div>
            </div>

            {/* Featured Algos + Latest News */}
            <div className="w-full xl:w-80 flex flex-col gap-4">
              {/* Featured Algos */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h2 className="text-base font-semibold text-gray-800 mb-3">Featured Algos For Trading</h2>
                <div className="divide-y divide-gray-100">
                  {featuredAlgos.map(algo => (
                    <div key={algo.name} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full ${algo.color} flex-shrink-0`}></div>
                        <span className="text-sm text-gray-800">{algo.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-2">from {algo.from}</span>
                    </div>
                  ))}
                </div>
                <div className="text-right mt-2">
                  <button className="text-xs text-green-600 hover:underline">view all algos ›</button>
                </div>
              </div>

              {/* Latest News */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-base font-semibold text-gray-800">Latest News</h2>
                  <select className="text-xs border border-gray-200 rounded px-2 py-1 text-gray-600 outline-none">
                    <option>All Markets</option>
                  </select>
                </div>
                <div className="divide-y divide-gray-100">
                  {latestNews.map((news, i) => (
                    <div key={i} className="py-3 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-start gap-3">
                        <p className="text-xs text-gray-800 flex-1 leading-relaxed">{news.title}</p>
                        <div className="flex-shrink-0 w-12 h-10 bg-orange-100 rounded flex items-center justify-center text-xl">{news.img}</div>
                      </div>
                      <p className="text-[10px] text-gray-400 text-right mt-1">{news.time}</p>
                    </div>
                  ))}
                </div>
                <div className="text-right mt-2">
                  <button className="text-xs text-green-600 hover:underline">view all news ›</button>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 1: Key Indices & Commodities + IPOs (main) | Corporate Actions (right) */}
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-4">

              {/* Key Indices & Commodities */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h2 className="text-base font-semibold text-gray-800 mb-4">Key Indices &amp; Commodities</h2>
                <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                  {indices.map(idx => (
                    <div key={idx.name}>
                      <div className="flex items-center gap-1 mb-0.5">
                        <span className="text-xs font-medium text-gray-800">{idx.name}</span>
                        {idx.expiry && <span className="text-[10px] bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded">Expiry Tomo.</span>}
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{idx.value}</p>
                      <p className={`text-xs ${idx.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>{idx.change}</p>
                    </div>
                  ))}
                </div>
                <button className="text-xs text-green-600 hover:underline mt-4 float-right">view all Indices ›</button>
              </div>

              {/* IPOs */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h2 className="text-base font-semibold text-gray-800 mb-4">IPOs</h2>
                <div className="divide-y divide-gray-100">
                  {ipos.map(ipo => (
                    <div key={ipo.name} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">{ipo.name[0]}</div>
                        <span className="text-sm text-gray-800">{ipo.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">Issue Size: {ipo.size}</span>
                        <button className="border border-orange-400 text-orange-500 text-xs px-3 py-1 rounded hover:bg-orange-50 transition-colors">Apply</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="text-xs text-green-600 hover:underline mt-2">more ›</button>
              </div>
            </div>

            {/* Corporate Actions */}
            <div className="w-full xl:w-80 bg-white rounded-lg border border-gray-200 p-4 h-fit">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-gray-800">Corporate Actions</h2>
                <select className="text-xs border border-gray-200 rounded px-2 py-1 text-gray-600 outline-none">
                  <option>All Markets</option>
                </select>
              </div>
              <div className="divide-y divide-gray-100">
                {corporateActions.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="text-center">
                        <p className="text-[10px] text-gray-400">{item.date.split(' ')[1]}</p>
                        <p className="text-sm font-bold text-gray-700">{item.date.split(' ')[0]}</p>
                      </div>
                      <span className="text-sm text-gray-800">{item.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{item.action}</span>
                  </div>
                ))}
              </div>
              <button className="text-xs text-green-600 hover:underline mt-3 float-right">view all ›</button>
            </div>
          </div>

          {/* SECTION 2: Trading Tools by Dhan */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h2 className="text-base font-semibold text-gray-800 mb-4">Trading Tools by Dhan</h2>
            <div className="grid grid-cols-3 gap-3">
              {tradingTools.map(tool => (
                <button key={tool.label} className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-green-400 hover:text-green-700 transition-colors">
                  <span className="text-lg">{tool.icon}</span>
                  <span>{tool.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* SECTION 3: More Power to you + Footer */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h2 className="text-base font-semibold text-gray-800 mb-4">More Power to you</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {powerTools.map(tool => (
                <div key={tool.name} className="flex-shrink-0 w-60 border border-gray-200 rounded-lg p-4 hover:border-green-400 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-gray-800">{tool.name}</span>
                    {tool.tag && <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-semibold">{tool.tag}</span>}
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{tool.desc}</p>
                  <span className="text-2xl">{tool.icon}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-500">🖥️ DEXT T3 Desktop Terminal - Windows</span>
              <button className="text-xs text-gray-600 border border-gray-300 rounded px-3 py-1 hover:border-green-400 transition-colors">⬇ Get</button>
            </div>
          </div>

          {/* Footer tagline */}
          <div className="text-center py-6">
            <p className="text-2xl font-light text-gray-300 tracking-widest">#made_for_trade</p>
            <p className="text-sm text-gray-400 mt-1">built with ❤️ in India</p>
          </div>

        </main>
      </div>
    </div>
  )
}
