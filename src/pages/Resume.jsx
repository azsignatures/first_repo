import "../assets/styles/resume.css"
import resume from "../assets/resume.pdf"

const Resume = () => {
    return(
        <div className="resume">
            <h1 className="resume1">Resume</h1>
            <a rel="noopener norefferrer"
            href={resume} target="_blank">
                 <button>Download Resume</button>
            </a>

            
        </div>
    )
}

export default Resume