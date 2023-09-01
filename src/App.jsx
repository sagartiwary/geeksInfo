import { Banner } from "./components/Banner"
import { Fintech } from "./components/Fintech"
import { Kitchen } from "./components/Kitchen"
import { MainRoute } from "./components/MainRoute"
import Navbar from "./components/Navbar"
import { SmartEducation } from "./components/SmartEducation"


function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Fintech/>
    <Kitchen/>
    <SmartEducation/>
    {/* <MainRoute/> */}
    </>
  )
}

export default App
