import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/header/home"
import About from "./pages/header/about"
import Pricing from "./pages/header/pricing"
import noPage from "./pages/noPage"
import LegalStuff from "./pages/footer/legalstuff"
import PrivacyPolicy from "./pages/footer/privacypolicy"
import Security from "./pages/footer/security"
import Options from "./pages/options"
import Crypto from "./pages/options/crypto"
import Socials from "./pages/options/socials"
import Dropshipp from "./pages/options/dropshipp"
import Course from "./pages/header/course"

function App() {

  return (
    <>
      <AppRoutes />
    </>
  )
}
function AppRoutes(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/course" element={<Course />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/legalstuff" element={<LegalStuff />}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}/>
        <Route path="/security" element={<Security />}/>
        <Route path="/options" element={<Options />}/>
        <Route path="/crypto" element={<Crypto />}/>
        <Route path="/dropshipp" element={<Dropshipp />}/>
        <Route path="/socials" element={<Socials />}/>
        <Route path="*" element={<noPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
