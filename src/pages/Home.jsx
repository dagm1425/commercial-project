import PropTypes from "prop-types";
import { ProjectPropType } from "../components/common/PropTypes.js";
import Hero from "../components/home/hero/Index.jsx";
import Projects from "../components/home/projects/Index.jsx";
import Features from "../components/home/features/Index.jsx";
import Contact from "../components/home/contact/Index.jsx";
import Stats from "../components/home/stats/Index.jsx";

export default function Home({ projects }) {
  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <Features />
      <Stats />
      <Contact />
    </>
  );
}

Home.propTypes = {
  projects: PropTypes.arrayOf(ProjectPropType).isRequired,
};
