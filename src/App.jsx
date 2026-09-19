import Home from './pages/Home';
import ApplyPage from './pages/ApplyPage';
import PortfolioPage from './pages/PortfolioPage';

export default function App() {
  if (window.location.pathname === '/apply') return <ApplyPage />;
  if (window.location.pathname === '/profiolo') return <PortfolioPage />;
  return <Home />;
}
