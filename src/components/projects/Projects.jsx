import { useState } from 'react';
import './styles.scss';
import FrontEnd from '../frontEnd/FrontEnd';
import BackEnd from '../backEnd/BackEnd';
import WebDesign from '../webDesign/WebDesign';
import Ecommerce from '../ecommerce/Ecommerce';

const worksData = [
    "Web Design",
    "Development",
    "Frontend",
    "Backend",
    "Ecommerce"
]


const Projects = () => {
    const [works, setWorks] = useState("Web Design");


    return (
        <div className='projectsSection'>
            <div className="projectsContainer">
                <div className="left">
                    <ul className="list">
                        {worksData.map((work, i) => (
                            <>
                                <li key={i} text={work} className="listItem" onClick={() => setWorks(work)}>{work}
                                    <span className="listItem2">{work}</span>
                                </li>
                                
                            </>
                        ))}
                        
                    </ul>
                </div>
                <div className="right">
                    {works === "Web Design" ? (<WebDesign />) : works === "Frontend" ? (<FrontEnd />) : works === "Backend" ? <BackEnd /> : works === "Ecommerce" ? <Ecommerce /> : <Development />}
                </div>
            </div>
        </div>
    )
}

export default Projects