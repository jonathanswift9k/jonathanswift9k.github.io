import React from 'react'
import Home from "./Home"
import History from './History'
import Certification from './Certification'
import About from './About'
import "../css/all.css"

export default function All() {

    return (
        <>
            <Home />
            <History />
            <Certification />
            <About />
            <div className="all">
                <p>find me on <a href="https://www.linkedin.com/in/jonoswift/" target="_blank" rel="noreferrer">linkedin</a></p> 
            </div>
            
        </>
    )

}