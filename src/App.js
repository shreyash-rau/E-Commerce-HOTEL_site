
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';



import Navbar from './Components/Navbar/Navbar';
import Home from "./Commons/Pages/Home";
import About from "./Commons/About/About";
import Gallery from "./Commons/Gallery/Gallery";

import Destination from "./Commons/Destination/Destination";
import DesInfoPage from "./Commons/Destination/DesInfoPage/DesInfoPage";

import Blogs from "./Commons/Blogs/Blogs";
import Testimonial from "./Commons/Testimonial/Testimonial";
import Contact from "./Commons/Contact/Contact";
import BlogsPage from "./Commons/Blogs/BlogsPage/BlogsPage";

import Register from "./Commons/Login/Register";
import Sign_in from "./Commons/Login/Sign_in";
import Footer from "./Components/Footer/Footer";


// ................SCSS file .............
import "./Components/Navbar/Navbar.scss";
import "./Commons/Login/Sign+Reg.scss";
import "./Components/Footer/Footer.scss";
// ..........................................


function App() {
  return (<>
    <div className='App'>
      {/* <h1>Hellos</h1> */}
      <BrowserRouter>
        <Navbar />
     

        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/about" element = {<About/>}></Route>
          <Route path="/gallery" element = {<Gallery/>}></Route>

          <Route path="/destinations" element = {<Destination/>}></Route>
          <Route path="/desinfopage/:id" element = {<DesInfoPage/>}></Route>
          
          <Route path="/blogs" element = {<Blogs/>}></Route>
          <Route path="/blogspage/:id" element = {<BlogsPage/>}></Route>


          <Route path="/testimonial" element = {<Testimonial/>}></Route>
          <Route path="/contact" element = {<Contact/>}></Route>

          <Route path="/sign-in" element = {<Sign_in/>}></Route>
          <Route path="/register" element = {<Register/>}></Route>

        
        </Routes>


        <Footer/>

        

      </BrowserRouter>
    </div>
  </>);
}

export default App;
