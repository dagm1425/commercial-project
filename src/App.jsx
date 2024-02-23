import Header from './components/header/index.jsx';
import Footer from './components/footer/Index.jsx';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
