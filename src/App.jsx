import Home from './pages/Home';
import ApplyPage from './pages/ApplyPage';

export default function App() {
  return window.location.pathname === '/apply' ? <ApplyPage /> : <Home />;
}
