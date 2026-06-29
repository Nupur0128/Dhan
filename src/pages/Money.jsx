import { useState } from 'react'

const sidebarMenu = [
  { icon: '👋', label: 'Personal Statistics' },
  { icon: '📓', label: "Trader's Diary" },
  { icon: '🦁', label: "Trader's Control" },
]

const manageMoneyMenu = [
  { icon: '💰', label: 'Funds & Margin Summary', active: true },
  { icon: '📅', label: 'AutoPay: Add funds Weekly/Monthly' },
  { icon: '🏦', label: 'Pay-Ins / Pay-Outs' },
  { icon: '🏧', label: 'Withdraw Money' },
]

const quickAmounts = [10000, 25000, 50000, 100000, 250000]

const marginSummaryRows = [
  { label: 'Available Cash', value: '-₹ 2.05', red: true },
  { label: 'Collateral & Other Limit', value: '₹ 0.00' },
]

export default function Money() {
  const [amount, setAmount] = useState(50000)

  const fmt = (n) => '₹' + Number(n).toLocaleString('en-IN', { minimumFractionDigits: 2 })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col lg:flex-row gap-4">

        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          {/* Greeting card */}
          <div className="bg-gradient-to-br from-yellow-50 to-green-50 border border-gray-200 rounded-xl p-5 mb-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-green-600 font-bold text-xl shadow-sm">
                <img src="/k-logo.png" alt="Dhan" className="w-12 h-12 rounded-full object-contain" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Good Afternoon,</p>
                <p className="text-lg font-bold text-gray-800 tracking-wide">KODANDA</p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {sidebarMenu.map(item => (
                <button key={item.label} className="flex items-center justify-between py-3 px-1 hover:bg-white/60 rounded-lg transition-colors group">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-gray-700 group-hover:text-green-600">{item.label}</span>
                  </div>
                  <span className="text-gray-400 text-sm">›</span>
                </button>
              ))}
            </div>
          </div>

          {/* Manage Money */}
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-sm font-semibold text-gray-700 mb-3">Manage Money</p>
            <div className="flex flex-col gap-1">
              {manageMoneyMenu.map(item => (
                <button key={item.label}
                  className={`flex items-center justify-between py-3 px-2 rounded-lg transition-colors group ${item.active ? 'bg-green-50' : 'hover:bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-base">{item.icon}</span>
                    <span className={`text-sm ${item.active ? 'text-green-700 font-medium' : 'text-gray-700 group-hover:text-green-600'}`}>{item.label}</span>
                  </div>
                  <span className={`text-sm ${item.active ? 'text-orange-400' : 'text-gray-400'}`}>›</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 flex flex-col gap-4">

          {/* Margin stats */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="grid grid-cols-3 gap-4 mb-5">
              <div>
                <p className="text-xs text-gray-500 mb-1">Margin Available</p>
                <p className="text-2xl font-bold text-green-600">₹ 24,60,132</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Margin Used</p>
                <p className="text-2xl font-bold text-gray-800">₹ 24,60,132</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">For Withdrawal</p>
                <p className="text-2xl font-bold text-gray-800">₹ 0.00</p>
              </div>
            </div>

            {/* Margin Utilization bar */}
            <div className="mb-5">
              <p className="text-xs text-gray-500 mb-2">Margin Utilization</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <span className="text-xs text-gray-600 whitespace-nowrap">0.00%</span>
              </div>
            </div>

            {/* Rows */}
            {marginSummaryRows.map(row => (
              <div key={row.label} className="flex items-center justify-between py-3 border-t border-gray-100">
                <span className="text-sm text-gray-600">{row.label}</span>
                <span className={`text-sm font-medium ${row.red ? 'text-red-500' : 'text-gray-800'}`}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* Pledge Shares */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🥧</span>
                <span className="text-sm font-semibold text-gray-800">Get Instant Margin by Pledging Shares</span>
              </div>
              <span className="text-sm font-semibold text-gray-800">₹ 0.00</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {[
                'Margin Benefit on Options Buying',
                'Auto-unpledge when you sell',
                'Get Instant Margin in 15 minutes',
                'Trade all segments & exchanges',
              ].map(point => (
                <div key={point} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0"></span>
                  <span className="text-xs text-gray-600">{point}</span>
                </div>
              ))}
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
              Get Instant Margin
            </button>
          </div>

          {/* Higher Margin Benefits */}
          <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💹</span>
              <span className="text-sm font-medium text-gray-800">Get Higher Margin Benefits For Trading</span>
            </div>
            <div className="flex gap-2">
              <button className="border border-orange-400 text-orange-500 text-xs px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors">Buy Stocks & ETFs</button>
              <button className="border border-orange-400 text-orange-500 text-xs px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors">Buy Mutual Funds</button>
            </div>
          </div>

          {/* Margin Summary */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm font-semibold text-gray-800">Margin Summary</h3>
              <span className="w-4 h-4 rounded-full border border-gray-400 text-gray-400 text-xs flex items-center justify-center cursor-help">i</span>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { label: 'Opening Balance', value: '-₹ 944.00', red: true },
                { label: 'Collateral', value: '₹ 0.00', dropdown: true },
                { label: 'Pay-in Today', value: '₹ 0.00' },
                { label: 'Delivery Sell Benefit', value: '₹ 0.00' },
                { label: 'Unrealised Ledger', value: '₹ 0.00' },
                { label: 'Net Option Premium', value: '₹ 0.00' },
                { label: 'MTF Funded Value', value: '₹ 0.00' },
                { label: 'Total Margin Used', value: '₹ 0.00', dropdown: true },
                { label: 'Additional Margin', value: '₹ 0.00' },
                { label: 'Payout in Progress / Processed', value: '₹ 0.00' },
              ].map(row => (
                <div key={row.label} className="flex items-center justify-between py-3">
                  <span className="text-sm text-gray-600 flex items-center gap-1">
                    {row.label}
                    {row.dropdown && <span className="text-gray-400 text-xs">▾</span>}
                  </span>
                  <span className={`text-sm font-medium ${row.red ? 'text-red-500' : 'text-gray-800'}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

        </main>

        {/* RIGHT PANEL */}
        <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-4">

          {/* Add Money */}
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Add Money to Dhan</h3>
            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-3">
              <p className="text-xs text-gray-500 mb-1">Add Amount:</p>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-800">
                  {fmt(amount)}
                </span>
              </div>
            </div>

            {/* Quick amount buttons */}
            <div className="flex flex-wrap gap-2 mb-4">
              {quickAmounts.map(amt => (
                <button
                  key={amt}
                  onClick={() => setAmount(prev => prev + amt)}
                  className="border border-gray-300 text-xs text-gray-600 px-2.5 py-1.5 rounded-lg hover:border-green-500 hover:text-green-600 transition-colors"
                >
                  +₹{(amt / 1000) >= 100 ? (amt / 100000).toFixed(0) + 'L' : (amt / 1000) + 'k'}
                </button>
              ))}
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-3 rounded-lg transition-colors">
              Add Money for Investing
            </button>
          </div>

          {/* Withdraw Money */}
          <div className="bg-white border border-gray-200 rounded-xl px-4 py-3">
            <button className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <span className="text-xl">🏧</span>
                <span className="text-sm font-medium text-gray-700">Withdraw Money</span>
              </div>
              <span className="text-gray-400">›</span>
            </button>
          </div>

          {/* Refer & Earn */}
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-sm text-gray-700 mb-1">
              Get <span className="text-orange-500 font-bold text-xl">20%</span> of brokerage
            </p>
            <p className="text-xs text-gray-500 mb-4">when they trade on Dahn</p>

            {/* QR Code */}
            <div className="flex justify-center mb-4">
              <img src="/qr.png" alt="Referral QR" className="w-36 h-36 rounded-xl object-contain border border-gray-200" />
            </div>

            {/* Share buttons */}
            <div className="flex gap-2 mb-3">
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 text-xs font-medium text-orange-500 hover:bg-orange-50 transition-colors">
                🔗 Share Referral Link
              </button>
              <button className="border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.856L.057 23.882l6.186-1.453A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </button>
              <button className="border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <button className="w-full border border-gray-200 rounded-lg py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-3">
              Click to view Referral Code
            </button>

            <button className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <span className="text-lg">🎉</span>
                <span className="text-xs font-medium text-gray-700">View Earnings &amp; Referrals</span>
              </div>
              <span className="text-gray-400 text-sm">›</span>
            </button>

            <p className="text-xs text-gray-400 mt-3">Referral is subject to <span className="underline cursor-pointer">Terms &amp; Conditions</span></p>
          </div>

        </aside>
      </div>
    </div>
  )
}
