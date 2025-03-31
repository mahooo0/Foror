import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Login from './Pages/Login';
import AppLayout from './components/Layout';
import Dashboard from './Pages/Dashboard';
import Translates from './Pages/Tanslates';
import Seo from './Pages/SEO';
import Logo from './Pages/Logo&FAvIcon';
import Home_hero from './Pages/Home/Hero';
import Home_About from './Pages/Home/About';
// In your layout.tsx or global.css

function App() {
    return (
        <Router>
            <Routes>
                {/* Login page is at root */}
                <Route path="/" element={<Login />} />

                {/* App routes nested under /app */}
                <Route path="/app" element={<AppLayout />}>
                    <Route path="translates" element={<Translates />} />
                    <Route index element={<Dashboard />} />
                    <Route path="Seo" element={<Seo />} />
                    <Route path="logo" element={<Logo />} />
                    <Route path="Home_hero" element={<Home_hero />} />
                    <Route path="Home_About" element={<Home_About />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
