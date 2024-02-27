import { useParams } from "react-router-dom";
import ProjectHero from "../components/project/hero/Index.jsx";
import ProjectImgSlider from "../components/project/imgSlider/Index.jsx";
import Features from "../components/project/features/Index.jsx";
import Amenities from "../components/project/amenities/Index.jsx";
import Location from "../components/project/location/Index.jsx";

export default function Project() {
    const { id } = useParams();
    const projects = [
        {
            id: "addis-westview",
            title: "addis westview standard apartments",
            desc: "More than just affordable, Westview Standard is your gateway to a better life in Addis Ababa. Experience international standards, modern amenities, and a convenient location, all within your budget.",
            specs: { floors: "11", bedrooms: "1-3", minMaxArea: "78-120", builtUpArea: "1558" },
            location: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d492.56212615924943!2d38.73318242430231!3d9.018343685417916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1708955993214!5m2!1sen!2set",
            src: "woman-with-design-book.png",
        },
        {
            id: "piazza-downtown",
            title: "piazza downtown luxury apartments",
            desc: "Experience luxury living in Piazza Midtown. Our expertly crafted apartments boast thoughtful floor plans, top-notch infrastructure, and exceptional finishes. Perfectly situated in the heart of Piazza, you'll enjoy effortless access to everything this vibrant district offers.",
            specs: { floors: "16", bedrooms: "1-3", minMaxArea: "98-175", builtUpArea: "1527" },
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.54336340047695!2d38.75095361677435!3d9.03208469945599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f5efcffebd3%3A0xda821c73ef928f93!2sPiazza%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1708955413945!5m2!1sen!2set",
            src: "furnishing-materials.png",
        },
        {
            id: "bole-skyline",
            title: "bole skyline luxury apartments",
            desc: "Rise above the ordinary and experience a new level of sophistication at Bole's most anticipated residential development. From stunning views to spacious layouts, every detail is meticulously curated to offer an unparalleled living experience.",
            specs: { floors: "19", bedrooms: "1-3", minMaxArea: "105-182", builtUpArea: "1647" },
            location: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d985.1833621678446!2d38.79718850038464!3d8.99665675289613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbole!5e0!3m2!1sen!2set!4v1708955647521!5m2!1sen!2set",
            src: "woman-with-design-book.png",
        },
        {
            id: "addis-central",
            title: "addis central luxury apartments",
            desc: "Immerse yourself in the vibrant pulse of Addis Ababa. Addis Central Tower's central location, international standards, and original architecture promise an unmatched living experience.",
            specs: { floors: "14", bedrooms: "1-3", minMaxArea: "87-110", builtUpArea: "1486" },
            location: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d246.28497630880852!2d38.75150727629101!3d9.012605792975558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sstadium!5e0!3m2!1sen!2set!4v1708955800401!5m2!1sen!2set",
            src: "woman-with-design-book.png",
        },
    ];
    const features = [
        {
            title: "Here, everything WORKS JUST FINE",
            desc: "From water system to elevators and electricity, every facility works as it should be. We are taking great care to make sure that your life is uninterrupted with unwanted surprises."
        },
        {
            title: "Great INVESTMENT VALUE",
            desc: "Westview Standard Apartments are not only a high quality residence, but also a great investment as well. With its high resale value and premium rental rates, you will receive your return on investment in approximately 8 years!"
        },
        {
            title: "LOCATION, LOCATION, LOCATION!",
            desc: "At the heart of Addis Ababa, Westview Standard Apartments are being built in one of the trendiest locations and are only a few minutes from business centers and major attractions in the city."
        },
    ];
    const amenities = [
        {
            title: "UNINTERRUPTED POWER SUPPLY",
            desc: "At Westview You won't suffer from Addis Ababa's common Power Outage. Our high capacity power generators will keep you powered up 24/7",
            src: "generator.png"
        },
        {
            title: "LARGE PARKING SPACES",
            desc: "Westview international Standard Apartment for sale in Addis Ababa has 3 level secured underground parking space available for all units",
            src: "parking.png"
        },
        {
            title: "UNINTERRUPTED WATER SUPPLY",
            desc: "Westview is equipped with a large water tank so you wouldn't have to worry about Addis Ababa's Water supply issue",
            src: "tanker.png"
        },
        {
            title: "ELEVATORS",
            desc: "Its only logical that any G+7 Apartments should have an elevator which meets international standards",
            src: "lift.png"
        },
        {
            title: "COMMON AREAS",
            desc: "Common areas like entrance and lobby are designed to be warm and welcoming for you and your family",
            src: "lobby.png"
        },

    ];
    const project = projects.find((project) => project.id === id);

    return (
        <>
            <ProjectHero project={project} />
            <Features features={features} />
            <ProjectImgSlider />
            <Amenities amenities={amenities} />
            <Location location={project.location} />
        </>
    )
}

