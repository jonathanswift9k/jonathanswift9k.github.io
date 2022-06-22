import React, {useState} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { useMediaQuery } from 'react-responsive'
import './css/body.css'

import NavBar from './NavBar'
import Home from './pages/Home'
import Certification from './pages/Certification'
import History from './pages/History'
import About from './pages/About'
import All from './pages/All'



export default function App() {
    const [page, setPage] = useState(1)
    const [isNext, setIsNext] = useState(false);
    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
      })

    const pageSelector = () => {
        if(page === 1) {
            return (
                <Home />
            )
        } else if (page === 2) {
            return (
                <History />
            )
        } else if (page === 3) {
            return (
                <Certification />
            )
        } else if (page === 4) {
            return (
                <About />
            )
        } else if (page === 5) {
            return (
                <All />
            )
        }
    }

    const nextPage = () => {
        setPage(prevPage => prevPage+1)
        setIsNext(true)
    }
    const prevPage = () => {
        setPage(prevPage => prevPage-1)
        setIsNext(false)
    }

    const pageRender = () => {
        if (page < 5 && isDesktop) {
            return (
                <TransitionGroup childFactory={child => React.cloneElement(child, { classNames: isNext ? "right-to-left" : "left-to-right", timeout: 1000 })}>
                    <CSSTransition in={isNext} key={page} classNames="right-to-left" timeout={1000}>
                        {pageSelector}
                    </CSSTransition>
                </TransitionGroup> 
            )
        } else if (page === 5 && isDesktop) {
            return (
                pageSelector()
            )
        } else if (!isDesktop) {
            return (
                <All />
            )
        }
    }
    

    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
        {pageRender()}
        
        {isDesktop ?  <NavBar key='nav' page={page} nextPage={nextPage} prevPage={prevPage}/> : ""}
       
        </div>
    )
}