import Header from './components/header/index.jsx';
import Footer from './components/footer/Index.jsx';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Project from './pages/Project.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  const projects = [
    {
        id: "addis-westview",
        label: "standard",
        title: "Addis Westview Apartments",
        desc: "More than just affordable, Addis Westview is your gateway to a better life in Addis Ababa. Experience international standards, modern amenities, and a convenient location, all comfortably within your budget.",
        specs: { floors: "11", bedrooms: "1-3", minMaxArea: "78-120", builtUpArea: "1558" },
        location: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d492.56212615924943!2d38.73318242430231!3d9.018343685417916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1708955993214!5m2!1sen!2set",
    },
    {
        id: "piazza-downtown",
        label: "luxury",
        title: "Piazza Downtown Apartments",
        desc: "Live luxuriously at Piazza Downtown. Expertly crafted apartments with thoughtful layouts, top-notch infrastructure, and exceptional finishes await. Perfectly situated, enjoy effortless access to Piazza's vibrancy.",
        specs: { floors: "16", bedrooms: "1-3", minMaxArea: "98-175", builtUpArea: "1527" },
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.54336340047695!2d38.75095361677435!3d9.03208469945599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f5efcffebd3%3A0xda821c73ef928f93!2sPiazza%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1708955413945!5m2!1sen!2set",
    },
    {
        id: "bole-skyline",
        label: "luxury",
        title: "Bole Skyline Apartments",
        desc: "Rise above the ordinary and experience a new level of sophistication at Bole's most anticipated residential development. From stunning views to spacious layouts, every detail is meticulously curated to offer an unparalleled living experience.",
        specs: { floors: "19", bedrooms: "1-3", minMaxArea: "105-182", builtUpArea: "1647" },
        location: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d985.1833621678446!2d38.79718850038464!3d8.99665675289613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbole!5e0!3m2!1sen!2set!4v1708955647521!5m2!1sen!2set",
    },
    {
        id: "lagare-central",
        label: "luxury",
        title: "Lagare Central Apartments",
        desc: "Immerse yourself in the vibrant pulse of Addis Ababa in the heart of Lagare Central Tower. This iconic landmark boasts a central location, international standards, and original architecture, all promising an unmatched living experience.",
        specs: { floors: "14", bedrooms: "1-3", minMaxArea: "87-110", builtUpArea: "1486" },
        location: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d246.28497630880852!2d38.75150727629101!3d9.012605792975558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sstadium!5e0!3m2!1sen!2set!4v1708955800401!5m2!1sen!2set",
    },
  ];

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home projects={projects} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/projects/:id" element={<Project projects={projects} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
