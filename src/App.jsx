import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar2 from "./components/NavbarPg";
import Footer from "./components/Footer";



function App() {
  const [pg,setpg]=useState(0)
  return (
    <div className=" bg-gray-100  font-bebas h-full">
      {/* <Navbar />   */}
      <Navbar2 setpg={setpg} />
      {/* <Outlet /> */}
      {pg==0?<Home setpg={setpg}/>:<About  setpg={setpg}/>}
      <div className=" lg:mx-28 px-4 mt-12 pb-20">
        <Contact />
      </div>
       <Footer/>
    </div>
  );
}

export default App;
