import './styles.scss';

const worksData = [
    "Web Design",
    "Development",
    "Frontend",
    "Backend",
    "Ecommerce"
]


const Projects = () => {
    return (
        <div className='projectsSection'>
            <div className="projectsContainer">
                <div className="left">
                    <ul className="list">
                        {worksData.map((work, i) => (
                            <>
                                <li key={i} text={work} className="listItem">{work}
                                    <span className="listItem2">{work}</span>
                                </li>
                                
                            </>
                        ))}
                        
                    </ul>
                </div>
                <div className="right">
                    Animation
                </div>
            </div>
        </div>
    )
}

export default Projects