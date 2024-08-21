import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import Services from './pages/Services';
import Team from './pages/Team';
import Profile from './components/Profile';
export default function Router() {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="services" element={<Services />} />
                <Route path="team" element={<Team />} />
                <Route path="profile" element={<Profile />} />






            </Routes>
            <Footer />
        </BrowserRouter>

    )
}
