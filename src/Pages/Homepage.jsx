import AboutSection from "../Components/AboutSection"
import FacilitiesSections from "../Components/FacilitiesSections"
import LandingSection from "../Components/LandingSection"
import MoreAbout from "../Components/MoreAbout"
import Navbar from "../Components/Navbar"
import StayAndCuisine from "../Components/StayAndCuisine"


const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <LandingSection/>
        <FacilitiesSections/>
        <AboutSection/>
        <MoreAbout />
        <StayAndCuisine />
    </div>
  )
}

export default Homepage