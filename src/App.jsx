// the main CSS file
import './App.css'

// importing pages
import Homepage from './Pages/Homepage'
import Booking from './Pages/Booking'
import Food from './Pages/Food'
import Blog from './Pages/Blog'
import Tourist_Destination from './Pages/Tourist_Destination'
import Contact from './Pages/Contact'

// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './ResusableComps/Navbar'

const App = () => {
  return (
    <Router>

      <Navbar />

      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/food" element={<Food />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/destinations" element={<Tourist_Destination />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App