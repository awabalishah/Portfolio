import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const location = useLocation();

  return (
    <div className="bg-[#050505] min-h-screen text-[#f3f3f3] selection:bg-white selection:text-black">
      <Navbar />
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </PageTransition>
    </div>
  );
}

export default App;

