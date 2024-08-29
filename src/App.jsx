import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contactus/ContactUs";

import About from "./Components/About/About";
import Reviews from "./Components/Review/Reviews"
import "./App.css";
import Faq from "./Components/Faq/Faq";
import Blog from "./Components/Blog/Blog";

import Footer from './Components/Footer/Footer';
import { BrowserRouter } from "react-router-dom";
// import Carousel from "./Components/Carousel/Carousel";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar /> 
      <About />
      <Products />
      <Blog />
      <Faq /> 

      <Reviews />
      <Contact />
      <Footer />
</BrowserRouter>
    </>
  );
}

export default App;
