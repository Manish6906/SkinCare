import Products from "./Components/Products/Products"
import Navbar from './Components/Navbar/Navbar';
import Carousel from "./Components/Carousel/Carousel";
// import Reviews from "./Components/Review/Reviews";
import Contact from "./Components/Contactus/ContactUs";

import About from "./Components/About/About"




import './App.css'


function App() {
 

  return (
    <>
    <Navbar />
    <About />
    <Products />
    {/* <Reviews /> */}
    <Carousel />
    <Contact />
   
    {/* <About /> */}
    </>
  )
}

export default App
