import React, {useState} from "react"
import "../css/history.css"

export default function History() {
    const [histLength, setHistLength] = useState(true)

    const jobArr = [
        {
            firstLine: "Associate Project Director @ InMoment",
            secondLine: "Associate Project Director, December 2021 - Present",
            thirdLine: "Intern, June 2021 - December 2021",
            fourthLine: "As an Associate Project Director, I work with a multitude of premier business clientele to create, manage, and maintain consumer facing surveys for overall market research. I am also part of a specialized team of workers dedicated to improving infrastructural methods with the goal of reducing manual hours through code and automation. I frequently work through Jira tickets to fulfill client requests for programming updates to consumer surveys."
        },
        {
            firstLine: "Installer @ Quirk, Inc.",
            secondLine: "December 2020 - June 2021",
        },
        {
            firstLine: "Day Manager @ Jed's Barbershop",
            secondLine: "November 2019 - November 2020",
            thirdLine: "",
        }
    ]

    const handleClick = () => {
        setTimeout(() => {
            setHistLength(prev => !prev)
        }, "250")
        
        document.querySelector(".historyText").focus()
    }

    const view = () => {
        if(histLength) {
            return (
                <>
                    <p>{jobArr[0].firstLine}</p>
                    <h2>{jobArr[0].secondLine}</h2>
                    <h2>{jobArr[0].thirdLine}</h2>
                    <h2>{jobArr[0].fourthLine}</h2>
                </>
            )
        } else {
            const allJobs = jobArr.map(job => {
                return (
                    <>
                        <p>{job.firstLine}</p>
                        <h2>{job.secondLine}</h2>
                    </>
                )
            })
            return allJobs
        }
    }

    return (
            <div className="historyText historyContainer">
                {view()}
                <span className="histDiv buttonText">
                    <button onClick={() => handleClick()} className={`histButton ${histLength ? "bi bi-toggle-off" : "bi bi-toggle-on"}`}></button>
                    <p>{histLength ? "Show All" : "Show Recent"}</p>
                </span>
            </div>
    )
}