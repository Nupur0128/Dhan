import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const VALID_MOBILE = '7483946281'
const VALID_OTP = '123456'
const VALID_PIN = '808503'

const features = [
  { label: 'Powered by DEXT', desc: 'High-speed order execution with our own proprietary engine.' },
  { label: 'New: The Trading Terminal (T3)', desc: '' },
  { label: 'New: 5 Cr MTF Funding Limit', desc: '' },
  { label: 'New: Invest in US Stocks', desc: '' },
]

function Logo({ size = 10 }) {
  const px = size * 4
  return <img src="/dhan.png" alt="logo" className={`w-${px} h-${px}`} />
}

export default function Login() {
  const [step, setStep] = useState(1)
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [pin, setPin] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [timer, setTimer] = useState(27)
  const otpRefs = useRef([])
  const pinRefs = useRef([])
  const navigate = useNavigate()

  useEffect(() => {
    if (step === 2 && timer > 0) {
      const t = setTimeout(() => setTimer(t => t - 1), 1000)
      return () => clearTimeout(t)
    }
  }, [step, timer])

  function handleProceed() {
    if (mobile === VALID_MOBILE) { setStep(2); setError(''); setTimer(27) }
    else setError('Invalid mobile number. Use: ' + VALID_MOBILE)
  }

  function handleOtpChange(i, val) {
    if (!/^\d*$/.test(val)) return
    const next = [...otp]; next[i] = val.slice(-1); setOtp(next)
    if (val && i < 5) otpRefs.current[i + 1]?.focus()
  }

  function handleOtpKey(i, e) {
    if (e.key === 'Backspace' && !otp[i] && i > 0) otpRefs.current[i - 1]?.focus()
  }

  function handleVerifyOtp() {
    if (otp.join('') === VALID_OTP) { setStep(3); setError('') }
    else setError('Invalid OTP. Use: ' + VALID_OTP)
  }

  function handlePinChange(i, val) {
    if (!/^\d*$/.test(val)) return
    const next = [...pin]; next[i] = val.slice(-1); setPin(next)
    if (val && i < 5) pinRefs.current[i + 1]?.focus()
  }

  function handlePinKey(i, e) {
    if (e.key === 'Backspace' && !pin[i] && i > 0) pinRefs.current[i - 1]?.focus()
  }

  function handleLogin() {
    if (pin.join('') === VALID_PIN) { setError(''); navigate('/home') }
    else setError('Invalid PIN. Use: ' + VALID_PIN)
  }

  const leftBg = step === 1
    ? 'from-amber-50 to-orange-50'
    : 'from-green-50 via-teal-50 to-purple-50'

  return (
    <div className="min-h-screen flex">
      {/* LEFT */}
      <div className={`hidden lg:flex flex-col justify-between w-1/2 bg-gradient-to-br ${leftBg} p-10 relative overflow-hidden`}>
        <div className="flex items-center gap-3">
          <Logo size={10} />
          <span className="text-2xl font-bold text-gray-800">dhan</span>
        </div>

        <div className="max-w-lg">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            The Complete Trading Ecosystem
          </h1>
          <p className="text-gray-500 mb-8">6+ products. Industry-first features. Designed for everyone from Scalpers to Investors!</p>

          <div className="divide-y divide-gray-200">
            {features.map((f, i) => (
              <div key={i} className="py-4">
                <div className="flex items-center justify-between">
                  <span className="text-amber-500 font-semibold text-sm">{f.label}</span>
                  <span className="text-gray-400 text-xs">{step === 1 ? '∨' : '∧'}</span>
                </div>
                {f.desc && <p className="text-gray-500 text-sm mt-1">{f.desc}</p>}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl px-5 py-4 flex items-center justify-between shadow-sm mb-6 max-w-md">
            <span className="text-sm text-gray-700 font-medium">New to Dhan? Open your Trading Account for FREE</span>
            <button className="border border-amber-500 text-amber-500 text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-amber-50 whitespace-nowrap ml-4">Start ▶</button>
          </div>
          <p className="text-[11px] text-gray-400 leading-relaxed">
            Version: v1.0.0.66 e1.0.0<br />
            SEBI Registered Stock Broker: INZ000006031. Exchange Member of BSE (6593), NSE (90133), MCX (56320) and Depository Participant with CDSL (IN-DP-289-2016)<br />
            By proceeding ahead, you acknowledge that you have read, understood and agree to the Terms & Conditions, Disclaimers and Privacy Policy of Dhan. © 2025 - 2026 Raise Securities Pvt. Ltd. All rights reserved.
          </p>
        </div>

        {/* circuit lines decoration for step 2+ */}
        {step >= 2 && (
          <svg className="absolute top-0 right-0 w-72 h-72 opacity-30" viewBox="0 0 300 300" fill="none">
            <circle cx="180" cy="60" r="5" stroke="#14b8a6" strokeWidth="1.5" />
            <circle cx="250" cy="100" r="5" stroke="#14b8a6" strokeWidth="1.5" />
            <circle cx="200" cy="150" r="5" stroke="#14b8a6" strokeWidth="1.5" />
            <path d="M180 60 H250 V100" stroke="#14b8a6" strokeWidth="1.5" />
            <path d="M250 100 H200 V150" stroke="#14b8a6" strokeWidth="1.5" />
          </svg>
        )}
      </div>

      {/* RIGHT */}
      <div className={`flex-1 flex items-center justify-center bg-gradient-to-br ${step === 1 ? 'from-gray-100 to-gray-200' : 'from-green-50 to-purple-100'} p-6`}>
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-10">

          {/* STEP 1: Mobile */}
          {step === 1 && (
            <>
              <div className="flex flex-col items-center mb-8">
                <Logo size={16} />
                <h2 className="text-2xl font-bold text-gray-900 mt-4">Login to Dhan</h2>
              </div>

              <label className="text-xs text-gray-500 mb-1 block">Enter Mobile Number</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-6 focus-within:border-teal-500 transition-colors">
                <input
                  type="tel"
                  maxLength={10}
                  value={mobile}
                  onChange={e => { setMobile(e.target.value.replace(/\D/, '')); setError('') }}
                  placeholder="Enter Your Mobile Number Here"
                  className="flex-1 px-4 py-3 text-sm outline-none text-gray-700 placeholder-gray-300"
                />
                <span className="px-3 text-gray-400 text-lg">⊞</span>
              </div>

              {error && <p className="text-red-500 text-xs mb-3">{error}</p>}

              <button
                onClick={handleProceed}
                className={`w-full py-3 rounded-xl text-white font-semibold text-sm transition-colors ${mobile.length === 10 ? 'bg-teal-600 hover:bg-teal-700' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={mobile.length !== 10}
              >
                Proceed
              </button>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 mb-2">Login to:</p>
                  <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:border-teal-400">
                    <img src="/logo2.png" alt="Dhan" className="w-5 h-5 rounded object-contain" />
                    Dhan Web <span className="text-gray-400">▾</span>
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-2">Fast QR</p>
                  <button className="w-10 h-10 border-2 border-dashed border-teal-400 rounded-lg overflow-hidden hover:opacity-80">
                    <img src="/qr.png" alt="QR" className="w-full h-full object-cover" />
                  </button>
                </div>
              </div>
            </>
          )}

          {/* STEP 2: OTP */}
          {step === 2 && (
            <>
              <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-20 rounded-2xl bg-teal-50 flex items-center justify-center text-5xl mb-2">📱</div>
                <h2 className="text-2xl font-bold text-gray-900 mt-2">Verify with OTP</h2>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 text-lg">⌨</span>
                <p className="text-sm text-gray-600">Enter OTP sent to <strong>{mobile}</strong></p>
                <button onClick={() => { setStep(1); setOtp(['', '', '', '', '', '']); setError('') }} className="text-gray-400 hover:text-teal-600">✎</button>
              </div>

              <div className="flex gap-3 mb-6">
                {otp.map((d, i) => (
                  <input
                    key={i}
                    ref={el => otpRefs.current[i] = el}
                    type="tel"
                    maxLength={1}
                    value={d}
                    onChange={e => handleOtpChange(i, e.target.value)}
                    onKeyDown={e => handleOtpKey(i, e)}
                    className={`w-12 h-12 text-center text-lg font-semibold border rounded-xl outline-none transition-colors ${d ? 'border-teal-500 text-teal-700' : 'border-gray-300'} focus:border-teal-500`}
                  />
                ))}
              </div>

              {error && <p className="text-red-500 text-xs mb-3">{error}</p>}

              <button
                onClick={handleVerifyOtp}
                className={`w-full py-3 rounded-xl text-white font-semibold text-sm transition-colors ${otp.every(d => d) ? 'bg-teal-600 hover:bg-teal-700' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!otp.every(d => d)}
              >
                Verify OTP
              </button>

              <p className="text-xs text-gray-400 text-right mt-3">
                {timer > 0
                  ? `Resend OTP in 00:${String(timer).padStart(2, '0')} seconds`
                  : <button onClick={() => setTimer(27)} className="text-teal-600 hover:underline">Resend OTP</button>
                }
              </p>
            </>
          )}

          {/* STEP 3: PIN */}
          {step === 3 && (
            <>
              <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-20 rounded-2xl bg-teal-50 flex items-center justify-center text-5xl mb-2">🔐</div>
                <h2 className="text-2xl font-bold text-gray-900 mt-2">Enter Account PIN</h2>
                <p className="text-sm text-gray-400 mt-1">Enter your 6-digit account PIN</p>
              </div>

              <div className="flex gap-4 justify-center mb-6">
                {pin.map((d, i) => (
                  <input
                    key={i}
                    ref={el => pinRefs.current[i] = el}
                    type="password"
                    maxLength={1}
                    value={d}
                    onChange={e => handlePinChange(i, e.target.value)}
                    onKeyDown={e => handlePinKey(i, e)}
                    className={`w-14 h-14 text-center text-2xl font-bold border rounded-xl outline-none transition-colors ${d ? 'border-teal-500 text-teal-700' : 'border-gray-300'} focus:border-teal-500`}
                  />
                ))}
              </div>

              {error && <p className="text-red-500 text-xs mb-3 text-center">{error}</p>}

              <button
                onClick={handleLogin}
                className={`w-full py-3 rounded-xl text-white font-semibold text-sm transition-colors ${pin.every(d => d) ? 'bg-teal-600 hover:bg-teal-700' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!pin.every(d => d)}
              >
                Login
              </button>

              <button onClick={() => { setStep(2); setPin(['', '', '', '', '', '']); setError('') }} className="w-full text-center text-xs text-teal-600 hover:underline mt-4">
                ← Back to OTP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
