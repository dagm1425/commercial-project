/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import ProjectHero from "../components/project/hero/Index.jsx";
import ProjectImgSlider from "../components/project/img-slider/Index.jsx";
import Features from "../components/project/features/Index.jsx";
import Amenities from "../components/project/amenities/Index.jsx";
import Location from "../components/project/location/Index.jsx";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

export default function Project({ projects }) {
    const { id } = useParams();
    const features = [
        {
            title: "everything works just fine",
            desc: "From water system to elevators and electricity, every facility works as it should be. We are taking great care to make sure that your life is uninterrupted with unwanted surprises.",
            icon: <HiWrenchScrewdriver />
        },
        {
            title: "great investment value",
            desc: "Our apartments offer not just a luxurious home, but also a sound financial decision. Boasting high resale value and premium rental income, you can expect to see a return on your investment in about 8 years.",
            icon: <FaHandHoldingDollar />
        },
        {
            title: "location, location, location!",
            desc: "Nestled in the heart of Addis Ababa's trendiest spot, our apartments offer unbeatable convenience. You'll be just minutes away from bustling business centers and the city's most exciting attractions.",
            icon: <FaMapLocationDot />
        },
        {
            title: "A vibrant community",
            desc: "Become part of a thriving community at our apartments. Strike up conversations with friendly neighbors and enjoy engaging social events planned throughout the year.",
            icon: <FaPeopleRoof />
        }
    ];
    const amenities = [
        {
            title: "fitness center",
            desc: "Our well equiped gym keeps your fitness routine on track",
            src: "fitness.png"
        },
        {
            title: "uninterrupted power supply",
            desc: "Our high capacity power generators will keep you powered up 24/7",
            src: "generator.png"
        },
        {
            title: "uninterrupted water supply",
            desc: " Our water infrastructure ensures a constant flow, all day, every day",
            src: "tanker.png"
        },
        {
            title: "large parking spaces",
            desc: "Our apartments have up to 3 level underground parking space",
            src: "parking.png"
        },
        {
            title: "elevators",
            desc: "Elevators for all units, built to international standards",
            src: "lift.png"
        },
        {
            title: "common areas",
            desc: "Common areas like entrance and lobby are designed to be welcoming",
            src: "lobby.png"
        },
    ];
    const project = projects.find((project) => project.id === id);
    const projectName = project.id.split("-")[0];
    const imgFileNames = [`${projectName}.png`, "living-room.png", "bathroom.png", "bedroom.png"];
    const projectImg = imgFileNames.map((imgFileName) => ({ src:`/images/projects/${projectName}/` + imgFileName, alt: `${imgFileName.split(".")[0]}` }));

    return (
        <>
            <ProjectHero project={project} />
            <Amenities amenities={amenities} />
            <Features features={features} />
            <ProjectImgSlider projectImg={projectImg} />
            <Location location={project.location} />
        </>
    )
}

