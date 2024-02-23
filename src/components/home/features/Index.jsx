import "./styles.scss";

export default function Index() {
    const features = [
        {
            label: "elegant openness",
            title: "meticulous design",
            desc: "we believe in an uncompromising vision that permeates every design element, meticulously crafted from architectural inception to the curated selection of interior elements, creating environments that are as relevant to their surroundings as they are adaptable to evolving needs.",
            src: "furnishing-materials.png",
        },
        {
            label: "Remarkable experience",
            title: "Tailored to you",
            desc: "Meticulously designed for excellence, our expertise curates an unparalleled experience. Immerse yourself in a lifestyle exclusive to residents here, an opportunity unmatched by any other development.",
            src: "woman-with-design-book.png",
        },
    ];

    return (
        <div className="featuresWrapper">
            <div className="feature">
                <div className="featureMain">
                    <p>{features[0].label}</p>
                    <h2>{features[0].title}</h2>
                    <p>{features[0].desc}</p>
                </div>
                <div className="featureImgWrapper">
                    <img src={`/images/${features[0].src}`} alt={features[0].title} />
                </div>
            </div>
            <div className="feature">
                <div className="featureImgWrapper">
                    <img src={`/images/${features[1].src}`} alt={features[1].title} />
                </div>
                <div className="featureMain">
                    <p>{features[1].label}</p>
                    <h2>{features[1].title}</h2>
                    <p>{features[1].desc}</p>
                </div>
            </div>
        </div>
    )
}