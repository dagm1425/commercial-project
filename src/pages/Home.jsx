import Hero from '../components/home/hero/Index.jsx';
import Projects from '../components/home/projects/Index.jsx';
import Features from '../components/home/features/Index.jsx';
import Videos from '../components/home/videos/Index.jsx';
import Contact from '../components/home/contact/Index.jsx';
import Stats from "../components/home/stats/Index.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Features />
      <Stats />
      <Videos />
      <Contact />
    </>
  )
}
