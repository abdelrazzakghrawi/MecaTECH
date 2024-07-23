import './App.css'
import LESAVIS from './Avis client/LESAVIS'
import Footer from './Footer/Footer'
import Hover from './icons/Hover'
import Navbar from './Navbar/Navbar'
import Slider from './slider/Slider'


import Animation from './Animation/Animation'



const App = () => {
  return (
    <div>
  <Animation/>
  <Navbar/>
  <Slider/>
  <Hover/>
  <LESAVIS/>
  <Footer/>
    </div>
  )
}

export default App
