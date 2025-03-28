import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import AboutDevelopment from './Pages/AboutDevelopment';
import Service from './Pages/Service';
import BlogDetail from './Pages/BlogDetail';
import Blogs from './Pages/Blogs';
import Price from './Pages/Price';
import Worcks from './Pages/Worcks';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route
                        path="/about-development"
                        element={<AboutDevelopment />}
                    />

                    <Route path="/service/:slug" element={<Service />} />

                    <Route path="/blogs" element={<Blogs />} />

                    <Route path="/blog/:slug" element={<BlogDetail />} />

                    <Route path="/price-list" element={<Price />} />

                    <Route path="/worcks" element={<Worcks />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
