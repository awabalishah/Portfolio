import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen selection:bg-sage-200 selection:text-ink">
      <Navbar />
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {/* Old portfolio links (e.g. /project/...) land on the homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </div>
  );
}

export default App;
