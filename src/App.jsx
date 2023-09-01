import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { Checking } from "./components/Checking"
import { Fintech } from "./components/Fintech"
import { Grid } from "./components/Grid"
import { Kitchen } from "./components/Kitchen"
import { MainRoute } from "./components/MainRoute"
import Navbar from "./components/Navbar"
import { Service } from "./components/Service"
import { SmartEducation } from "./components/SmartEducation"
import { Software } from "./components/Software"


function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Fintech/>
    <Kitchen/>
    <SmartEducation/>
    <Checking/>
    <Grid/>
    <Software/>
    <Service/>
    <About/>
    {/* <MainRoute/> */}
    </>
  )
}

export default App
