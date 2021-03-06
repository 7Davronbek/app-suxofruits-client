import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
// import Socials from "./components/Socials"
import AboutCompany from "./pages/AboutCompany"
import CatalogId from "./pages/CatalogId"
import Contacts from "./pages/Contacts"
import Main from "./pages/Main"
import Photogalary from "./pages/Photogalary"
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
          <Route path="/photogalary" exact component={Photogalary} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/catalog/:id" exact component={CatalogId} />
          <Route path="/see-catalog/:id" exact component={SeeCatalog} />
        </Switch>

        <Footer />
      </Router>

    </>
  )
}

export default App
