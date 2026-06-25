import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom'
import i18n, { isLang } from './i18n'
import { useSeoLinks } from './lib/useSeoLinks'
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
import MaturityAssessment from './pages/MaturityAssessment'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import NotFound from './pages/NotFound'
import { Navbar, Footer } from './components/Layout'

// Localized app tree: validates the :lang segment, syncs i18next to it, and
// renders the chrome + page routes (paths relative to /:lang).
function LocalizedApp() {
  const { lang } = useParams()
  const location = useLocation()
  const valid = isLang(lang)

  // hreflang + canonical for the current route (depends only on lang + path).
  useSeoLinks(valid && lang ? lang : 'en')

  useEffect(() => {
    if (valid && lang) {
      if (i18n.language !== lang) i18n.changeLanguage(lang)
      document.documentElement.lang = lang
    }
  }, [lang, valid])

  // Invalid first segment (e.g. an old absolute "/about" link, or a typo):
  // treat it as a path, not a language — prepend the active language and keep
  // the full path so not-yet-migrated pages and their "/x" links still resolve.
  if (!valid) {
    const active = isLang(i18n.language) ? i18n.language : 'en'
    return <Navigate to={`/${active}${location.pathname}${location.search}`} replace />
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="soc" element={<SOC />} />
        <Route path="bygrc" element={<ByGRC />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="academy" element={<Academy />} />
        <Route path="partners" element={<Partners />} />
        <Route path="homodeus-partnership" element={<HomodeusPartnership />} />
        <Route path="enterprise/phisher" element={<Phisher />} />
        <Route path="enterprise/conscientizacao" element={<Conscientizacao />} />
        <Route path="enterprise/compliance" element={<Compliance />} />
        <Route path="enterprise/maturity-assessment" element={<MaturityAssessment />} />
        <Route path="careers" element={<Careers />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

// Any path without a valid language prefix is redirected to the active/detected
// language, preserving the rest of the path. This keeps not-yet-migrated pages
// and their absolute "/x" links working (one transparent redirect hop).
function RedirectToLang() {
  const { pathname, search } = useLocation()
  const lang = isLang(i18n.language) ? i18n.language : 'en'
  return <Navigate to={`/${lang}${pathname === '/' ? '' : pathname}${search}`} replace />
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/:lang/*" element={<LocalizedApp />} />
        <Route path="*" element={<RedirectToLang />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
