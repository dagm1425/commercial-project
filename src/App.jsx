import Header from './components/header/index.jsx';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
