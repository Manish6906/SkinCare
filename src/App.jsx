import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contactus/ContactUs";

import About from "./Components/About/About";

import "./App.css";
import Faq from "./Components/Faq/Faq";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Reviews from "./Components/Review/Reviews";

function App() {
  return (
    <>
      <Navbar /> 
      <About />
      <Products />
      <Blog />
      <Faq /> 
      <Reviews />
      <Contact />
      <div className="mt-5 md:mt-10"><Footer /></div>
      {/* <Carousel /> */}

    </>
  );
}

export default App;
