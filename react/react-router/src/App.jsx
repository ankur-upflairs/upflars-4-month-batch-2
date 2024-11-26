import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router";
import Home from "./pages/Home";
import Services, { Tablet } from "./pages/Services";
import Contact from "./pages/Contact";
import { Mobile, Desktop } from "./pages/Services";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/services"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
        {/* <ul>
        <li><Link to={'/'} >Home</Link></li>
        <li><Link to={'/services'} >Services</Link></li>
        <li><Link to={'/contact'} >Contact</Link></li>
      </ul> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />}>
            <Route index element={<h1>all services</h1>} />
            <Route path="mobile" element={<Mobile />} />
            <Route path="desktop" element={<Desktop />} />
          </Route>
          <Route path="services/tablet" element={<Tablet/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
