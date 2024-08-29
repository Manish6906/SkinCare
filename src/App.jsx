import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
// import Carousel from "./Components/Carousel/Carousel";  
import Contact from "./Components/Contactus/ContactUs";

import About from "./Components/About/About";

import "./App.css";
import Faq from "./Components/Faq/Faq";
import Blog from "./Components/Blog/Blog";
import { BrowserRouter } from "react-router-dom";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <About />
      <Products />
      <Blog />
      <Faq />
      <Contact />
      <Footer />
     </BrowserRouter>

    </>
  );
}

export default App;
