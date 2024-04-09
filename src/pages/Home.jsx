import Hero from '../components/home/hero/Index.jsx';
import Projects from '../components/home/projects/Index.jsx';
import Features from '../components/home/features/Index.jsx';
import Contact from '../components/home/contact/Index.jsx';
import Stats from "../components/home/stats/Index.jsx";

// eslint-disable-next-line react/prop-types
export default function Home({ projects }) {
  return (
    <>
      <Hero />
      <Projects projects={projects}/>
      <Features />
      <Stats />
      <Contact />
    </>
  )
}
