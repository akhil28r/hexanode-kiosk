import Achievements from "./components/Achievements"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Platforms from "./components/Platforms"
import Possibilities from "./components/Possibilities"
import ReachOut from "./components/ReachOut"
import TabSection from "./components/TabSection"
import WhyHexnode from "./components/WhyHexnode"


function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <Achievements/> */}
      <TabSection/>
      <WhyHexnode/>
      <Platforms/>
      <Possibilities/>
      <ReachOut/>
      <Footer/>
    </div>
  )
}

export default App
