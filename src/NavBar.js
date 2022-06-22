import React from 'react'
import "./css/navbar.css"

export default function NavBar(props) {
    const {page, nextPage, prevPage} = props

    return (
        <div className="nav">
            <div>
            <button className={`bi bi-arrow-return-left btnLeft ${page === 1 ? "hide" : page === 5 ? "hide" : ""} leftBtn`} onClick={prevPage}></button>
            <button className={`bi bi-arrow-return-right btnRight ${page === 5 ? "hide" : ""} rightBtn`} onClick={nextPage}></button>
            </div>
        </div>
    )
}