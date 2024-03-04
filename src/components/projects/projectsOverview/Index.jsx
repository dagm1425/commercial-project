import { Link } from "react-router-dom";
import "./styles.scss";

export default function Index() {
    const projects = [
        {
            id: "addis-westview",
            title: "addis westview apartments",
            label: "standard",
            desc: "More than just affordable, Westview Standard is your gateway to a better life in Addis Ababa. Experience international standards, modern amenities, and a convenient location, all within your budget.",
        },
        {
            id: "piazza-downtown",
            title: "piazza downtown apartments",
            label: "luxury",
            desc: "Experience luxury living in Piazza Midtown. Our expertly crafted apartments boast thoughtful floor plans, top-notch infrastructure, and exceptional finishes. Perfectly situated in the heart of Piazza, you'll enjoy effortless access to everything this vibrant district offers.",
        },
        {
            id: "bole-skyline",
            title: "bole skyline apartments",
            label: "luxury",
            desc: "Rise above the ordinary and experience a new level of sophistication at Bole's most anticipated residential development. From stunning views to spacious layouts, every detail is meticulously curated to offer an unparalleled living experience.",
        },
        {
            id: "lagare-central",
            title: "lagare central apartments",
            label: "luxury",
            desc: "Immerse yourself in the vibrant pulse of Addis Ababa. Addis Central Tower's central location, international standards, and original architecture promise an unmatched living experience.",
        },
    ];

    const isZeroEven = (n) => {
        return (n % 2 === 0) || n === 0;
    }

    return (
        <div className="projectsWrapper">
            {projects.map((project, i) => {
                const projectName = project.id.split("-")[0];

                return (
                    <div key={i} className="project">
                        {!isZeroEven(i) && <div className="projectImgWrapper">
                        <img src={`/images/projects/${projectName}/${projectName}.png`} alt={project.title} />
                    </div>}
                        <div className="projectMain">
                            <p>{project.label}</p>
                            <h2>{project.title}</h2>
                            <p>{project.desc}</p>
                            <Link to={`/projects/${project.id}`}>Learn more</Link>
                        </div>
                        {isZeroEven(i) && <div className="projectImgWrapper">
                            <img src={`/images/projects/${projectName}/${projectName}.png`} alt={project.title} />
                        </div>}
                    </div>

                )
            })}
        </div>
    )
}