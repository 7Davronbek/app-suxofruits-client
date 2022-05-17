import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
// import Socials from "./components/Socials"
import AboutCompany from "./pages/AboutCompany"
import CatalogId from "./pages/CatalogId"
import Contacts from "./pages/Contacts"
import Main from "./pages/Main"
import Production from "./pages/Production"
import SeeCatalog from "./pages/SeeCatalog"

const App = () => {

  return (
    <>

      <Router>
        <Navbar />
        {/* <Socials /> */}
        <ScrollToTop />

        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about-company" exact component={AboutCompany} />
          <Route path="/production" exact component={Production} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/catalog/1" exact component={CatalogId} />
          <Route path="/see-catalog/1" exact component={SeeCatalog} />
        </Switch>

        <Footer />
      </Router>

    </>
  )
}

export default App
