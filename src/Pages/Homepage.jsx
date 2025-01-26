import FacilitiesSections from "../Components/FacilitiesSections"
import LandingSection from "../Components/LandingSection"
import Navbar from "../Components/Navbar"

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <LandingSection/>
        <FacilitiesSections/>
    </div>
  )
}

export default Homepage