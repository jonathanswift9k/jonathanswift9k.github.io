import React from "react"
import "../css/certification.css"
import certif from "./JonathanSwiftVSchoolCred.png"


export default function Certification() {
    return (
        <div className="certifContainer">
            <a href="https://app.digit.ink/view-credential/b987b8f7-e1e9-426e-bba3-bbed695e056c" target="_blank" rel="noreferrer"><img src={certif} alt="https://app.digit.ink/view-credential/b987b8f7-e1e9-426e-bba3-bbed695e056c" className="certif"></img></a>
        </div>
    )
}