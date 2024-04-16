/* eslint-disable react/prop-types */
import styles from "./style.module.scss";
import BreadCrumb from "../../common/bread-crumb/Index";
import Overlay from "../../common/overlay/Index";

export default function Index({ project }) {
    const projectName = project.id.split("-")[0];
    const specs =[
        {
            name: "floors",
            title: "floors",
        },
        {
            name: "bedrooms",
            title: "bedrooms",
        },
        {
            name: "minMaxArea",
            title: "Minimum & Maximum (sqm.)",
        },
        {
            name: "builtUpArea",
            title: "Built-up Area (sqm.)",
        },
    ];

    return (
        <div className={styles["project-wrapper"]}>
            <div style={{ backgroundImage: `url("/images/projects/${projectName}/living-room.png")` }} className={styles["project-hero"]}>
                <BreadCrumb links={["home", "projects", project.title]} />
                <div className={styles["project-main"]}>
                    <h1>{project.title}</h1>
                    <p>{project.desc}</p>
                    <div className={styles["specs-wrapper"]}>
                        {specs.map((spec, i) => {
                            return (
                                <div key={i} className={styles.spec}>
                                    <h3>{project.specs[spec.name]}</h3>
                                    <p>{spec.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Overlay />
        </div>
    )
}