import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Error from './Error'
import Home from './Home'
import World from './Categories/World'
import Politics from './Categories/Politics'
import Business from './Categories/Business'
import Sports from './Categories/Sports'
import Bollywood from './Categories/Bollywood'
import Hollywood from './Categories/Hollywood'
import Technology from './Categories/Technology'
import Travel from './Categories/Travel'
import WorldContextProvider from '../Context/WorldContext'
import Common from './Common'
import PoliticsContextProvider from '../Context/PoliticsContext'
import BusinessContextProvider from '../Context/BusinessContext'
import SportsContextProvider from '../Context/SportsContext'
import BollywoodContextProvider from '../Context/BollywoodContext'
import HollywoodContextProvider from '../Context/HollywoodContext'
import TechnologyContextProvider from '../Context/TechnologyContext'
import TravelContextProvider from '../Context/TravelContext'



function Navbar() {
    return (
        <div className='nav'>

            <Router>
                <div className='nav-1'>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                    <NavLink to="/world" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>World</NavLink>
                    <NavLink to="/politics" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Politics</NavLink>
                    <NavLink to="/business" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Business</NavLink>
                    <NavLink to="/sports" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Sports</NavLink>
                    <NavLink to="/bollywood" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Bollywood</NavLink>
                    <NavLink to="/hollywood" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Hollywood</NavLink>
                    <NavLink to="/technology" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Technology</NavLink>
                    <NavLink to="/travel" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Travel</NavLink>
                </div>
                <div className='hr-1'><hr /></div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/world" element={<WorldContextProvider><World /></WorldContextProvider>} />
                    <Route exact path="/politics" element={<PoliticsContextProvider><Politics /></PoliticsContextProvider>} />
                    <Route exact path="/business" element={<BusinessContextProvider><Business /></BusinessContextProvider>} />
                    <Route exact path="/sports" element={<SportsContextProvider><Sports /></SportsContextProvider>} />
                    <Route exact path="/bollywood" element={<BollywoodContextProvider><Bollywood /></BollywoodContextProvider>} />
                    <Route exact path="/hollywood" element={<HollywoodContextProvider><Hollywood /></HollywoodContextProvider>} />
                    <Route exact path="/technology" element={<TechnologyContextProvider><Technology /></TechnologyContextProvider>} />
                    <Route exact path="/travel" element={<TravelContextProvider><Travel /></TravelContextProvider>} />
                    <Route path="/*" element={<Error />} />
                    <Route path="/article/:category/:id/:tittle" element={<Common />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Navbar;
