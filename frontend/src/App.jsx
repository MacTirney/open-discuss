// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import DiscussionCard from './components/DiscussionCard.jsx'

export default function App() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <DiscussionCard />
            </div>
        </>
    )
}