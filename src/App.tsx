import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import SOC from './pages/SOC'
import ByGRC from './pages/ByGRC'
import About from './pages/About'
import Contact from './pages/Contact'
import Academy from './pages/Academy'
import Partners from './pages/Partners'
import HomodeusPartnership from './pages/HomodeusPartnership'
import Phisher from './pages/Phisher'
import Conscientizacao from './pages/Conscientizacao'
import Compliance from './pages/Compliance'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import NotFound from './pages/NotFound'
import { Navbar, Footer } from './components/Layout'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/soc" element={<SOC />} />
        <Route path="/bygrc" element={<ByGRC />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/homodeus-partnership" element={<HomodeusPartnership />} />
        <Route path="/enterprise/phisher" element={<Phisher />} />
        <Route path="/enterprise/conscientizacao" element={<Conscientizacao />} />
        <Route path="/enterprise/compliance" element={<Compliance />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
