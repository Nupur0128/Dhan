import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Positions', to: '/positions' },
  { label: 'Orders', to: '/orders' },
  { label: 'Money', to: '/money' },
]

const rightLinks = ['Markets', 'Rent Stocks', 'News', 'IPOs']

const tickers = [
  { name: 'Nifty 50', price: '23,978.35', change: '-77.65 (-0.32%)', up: false },
  { name: 'Nifty Next 50', price: '71,492.60', change: '-706.95 (-0.98%)', up: false },
  { name: 'Nifty Bank', price: '57,774.70', change: '-402.35 (-0.69%)', up: false },
  { name: 'India VIX', price: '13.81', change: '+0.76 (+5.82%)', up: true },
  { name: 'Fin Nifty', price: '26,620.85', change: '-149.70 (-0.56%)', up: false },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [tickerOpen, setTickerOpen] = useState(true)
  const [profileOpen, setProfileOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Main nav bar */}
      <div className="flex items-center justify-between px-4 h-14 border-b border-gray-100">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm select-none">ध</div>
          <span className="font-semibold text-sm text-gray-800 hidden sm:block">Fin Nifty</span>
          <span className="text-sm font-bold text-gray-900">26,620.85</span>
          <span className="text-red-500 text-xs font-medium">-149.70 (-0.56%) ↘</span>
        </div>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium pb-1 transition-colors ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-green-600'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5">
          {rightLinks.map(link => (
            <button key={link} className="text-sm text-gray-600 hover:text-green-600 transition-colors">{link}</button>
          ))}
          <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
            Live 12:22:56 pm
          </span>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" /></svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </button>
          <div className="relative">
            <button onClick={() => setProfileOpen(o => !o)} className="text-gray-500 hover:text-green-600 transition-colors">
              {/* <FaUser className="w-4 h-4" /> */}
              <img src="/k-logo.png" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                <button onClick={() => { setProfileOpen(false); navigate('/profile') }} className="flex items-center gap-2 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  👤 Profile
                </button>
                <button onClick={() => { setProfileOpen(false); navigate('/settings') }} className="flex items-center gap-2 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-100">
                  ⚙️ Settings
                </button>
                <button onClick={() => { setProfileOpen(false); navigate('/login') }} className="flex items-center gap-2 w-full px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors border-t border-gray-100">
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen
            ? <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          }
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b px-4 py-3 flex flex-col gap-1">
          {navLinks.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm py-2 px-1 ${isActive ? 'text-green-600 font-semibold' : 'text-gray-700'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {rightLinks.map(link => (
            <button key={link} className="text-sm text-left py-2 px-1 text-gray-600">{link}</button>
          ))}
        </div>
      )}

      {/* Ticker strip */}
      {tickerOpen && (
        <div className="bg-white border-b border-gray-100 px-4 py-2 flex items-center overflow-x-auto">
          {tickers.map((t, i) => (
            <span key={t.name} className="flex items-center whitespace-nowrap text-xs">
              <span className="text-gray-500 mr-1">{t.name}</span>
              <span className="font-semibold text-gray-800 mr-1">{t.price}</span>
              <span className={t.up ? 'text-green-600' : 'text-red-500'}>{t.change} {t.up ? '↗' : '↘'}</span>
              {i < tickers.length - 1 && <span className="mx-4 text-gray-300">|</span>}
            </span>
          ))}
          <button onClick={() => setTickerOpen(false)} className="ml-auto pl-4 text-gray-400 hover:text-gray-600 text-xs">▲</button>
        </div>
      )}
    </header>
  )
}
