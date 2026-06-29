import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import Home from './pages/Home'
import Money from './pages/Money'
import Login from './pages/Login'
import Portfolio from './pages/Portfolio'
import Positions from './pages/Positions'
import Orders from './pages/Orders'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/money" element={<Money />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
            {/* <Footer /> */}
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
