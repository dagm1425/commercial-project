import Header from './components/header/index.jsx';
import Footer from './components/footer/Index.jsx';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Project from './pages/Project.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
