const footerLinks = {
  Company: ['About Us', 'Careers', 'Press', 'Contact'],
  Products: ['Stocks', 'Mutual Funds', 'ETFs', 'Options', 'Futures', 'Commodities'],
  Support: ['Help Center', 'Charges', 'Open Account', 'NSE', 'BSE'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Disclosures', 'Grievances'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">{heading}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-xs text-gray-500 hover:text-green-600 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xs">ध</div>
            <span className="text-sm font-semibold text-gray-700">Dahn</span>
          </div>
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} Dahn Broking Pvt. Ltd. All rights reserved. SEBI Registered Broker.
          </p>
          <div className="flex gap-3">
            {['Twitter', 'LinkedIn', 'YouTube'].map(s => (
              <a key={s} href="#" className="text-xs text-gray-400 hover:text-green-600 transition-colors">{s}</a>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4 leading-relaxed">
          Investments in securities market are subject to market risks. Read all the related documents carefully before investing.
          Registration No: INZ000000000 | CDSL: IN-DP-000000-2024 | SEBI Reg. No: INH000000000
        </p>
      </div>
    </footer>
  )
}
