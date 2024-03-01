/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./styles.scss";

export default function Index({ project }) {
    const projectName = project.id.split("-")[0];
    
    return (
        <div className="projectWrapper">
            <div style={{ backgroundImage: `url("/images/projects/${projectName}/living-room.png")` }} className="projectHero">
                <p className="snackBar">
                    <Link to='/'>home</Link> &gt; 
                    <Link to={'/projects'}>projects</Link> &gt;
                    <span>{project.title}</span>
                </p>
                <div className="projectMain">
                    <h1>{project.title}</h1>
                    <p>{project.desc}</p>
                    <div className="specsWrapper">
                        <div className="spec">
                            <h3>{project.specs.floors}</h3>
                            <p>floors</p>
                        </div>
                        <div className="spec">
                            <h3>{project.specs.bedrooms}</h3>
                            <p>bedrooms</p>
                        </div>
                        <div className="spec">
                            <h3>{project.specs.minMaxArea}</h3>
                            <p>Minimum & Maximum (sqm.)</p>
                        </div>
                        <div className="spec">
                            <h3>{project.specs.builtUpArea}</h3>
                            <p>Built-up Area (sqm.)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}