import AboutSection from "../Components/AboutSection"
import FacilitiesSections from "../Components/FacilitiesSections"
import LandingSection from "../Components/LandingSection"
import MoreAbout from "../Components/MoreAbout"
import Navbar from "../Components/Navbar"
import StayAndCuisine from "../Components/StayAndCuisine"
import Location from "../Components/Location"
import Experience from "../Components/Experience"
import PopularDestination from "../Components/PopularDestination"


const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <LandingSection/>
        <FacilitiesSections/>
        <AboutSection/>
        <MoreAbout />
        <StayAndCuisine />
        <Experience />
        <Location />
        <PopularDestination />
    </div>
  )
}

export default Homepage