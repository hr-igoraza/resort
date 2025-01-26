import AboutSection from "../Components/AboutSection"
import FacilitiesSections from "../Components/FacilitiesSections"
import LandingSection from "../Components/LandingSection"
import MoreAbout from "../Components/MoreAbout"
import Navbar from "../Components/Navbar"

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <LandingSection/>
        <FacilitiesSections/>
        <AboutSection/>
        <MoreAbout />
    </div>
  )
}

export default Homepage