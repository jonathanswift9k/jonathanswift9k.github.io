import React, {useState} from "react"
import "../css/history.css"

export default function History() {
    const [histLength, setHistLength] = useState(true)

    const jobArr = [
        {
            firstLine: "Application Specialist @ InMoment",
            secondLine: "Application Specialist, May 2023 - Present",
            thirdLine: "Project Director, December 2021 - May 2023",
            fourthLine: "Intern, June 2021 - December 2021",
            fifthLine: "As an Application Specialist, I am responsible for both building and maintaining customer facing surveys, as well as building custom reports/data validations, workflows. I am tasked with maintaining a very in-depth understanding of each component within the platform. Because of my progamming knowledge, I have been chosen to participate alonside a specialized team of other Specialists, with the goal of maximizing efficiency across the board - often utilizing the ability to create custom applications through the Apps Script of Google Sheets. I am frequently brought in to assist the other Specialists in their more complex client asks, typically requiring high-level custom extensibility revolving around JavaScript (mainly jQuery), CSS and HTML."
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
        setHistLength(prev => !prev)
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