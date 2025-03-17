import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import AboutDevelopment from './assets/Pages/AboutDevelopment';
import Service from './assets/Pages/Service';
import BlogDetail from './assets/Pages/BlogDetail';
import Blogs from './assets/Pages/Blogs';
import Price from './assets/Pages/Price';
import Worcks from './assets/Pages/Worcks';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route
                    path="/about-development"
                    element={<AboutDevelopment />}
                />

                <Route path="/service/:slug" element={<Service />} />

                <Route path="/blogs" element={<Blogs />} />

                <Route path="/blogs/:slug" element={<BlogDetail />} />

                <Route path="/price-list" element={<Price />} />

                <Route path="/worcks" element={<Worcks />} />
            </Routes>
        </Router>
    );
}

export default App;
