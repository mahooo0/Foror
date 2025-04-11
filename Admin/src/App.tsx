import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import AppLayout from './components/Layout';
import Dashboard from './Pages/Dashboard';
import Translates from './Pages/Tanslates';
import Seo from './Pages/SEO';
import Logo from './Pages/Logo&FAvIcon';
import Home_hero from './Pages/Home/Hero';
import Home_About from './Pages/Home/About';
// In your layout.tsx or global.css
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home_about_dev from './Pages/Home/AboutDev';
import Home_Prefe from './Pages/Home/Prefe';
import ColabarateCompanies from './Pages/ColabarateCompanies';
import Home_Services from './Pages/HomeServices';
import PartfolioCategory from './Pages/PartfolioCategory';
import Partfolio from './Pages/Partfolio';
import Services from './Pages/Services';
import PriceList from './Pages/PriceList';
import { Toaster } from 'react-hot-toast';
import PriceListFeatrues from './Pages/PriceListFeatrues';
import ContactInfo from './Pages/ContactInfo';
import SocialMedia from './Pages/SocialMedia';
import Blogs from './Pages/Blogs';
import About_Hero from './Pages/AboutHero';
import About_dev_Hero from './Pages/AboutdevHero';
import Desing_Tools from './Pages/desingTools';
import Dev_Tools from './Pages/devTools';
import Statistics from './Pages/Statisrics';
import Dev_Steps from './Pages/devSteps';
import Rewue from './Pages/Rewue';
import Contact from './Pages/Contact';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
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
                        <Route path="services" element={<Services />} />
                        <Route
                            path="Home_About"
                            element={<Home_About />}
                        />{' '}
                        <Route
                            path="partfolio-category"
                            element={<PartfolioCategory />}
                        />
                        <Route path="partfolio" element={<Partfolio />} />
                        <Route
                            path="home_about_dev"
                            element={<Home_about_dev />}
                        />
                        <Route path="Home_Prefe" element={<Home_Prefe />} />
                        <Route
                            path="Colabarete_Companies"
                            element={<ColabarateCompanies />}
                        />
                        <Route
                            path="Home_Services"
                            element={<Home_Services />}
                        />
                        <Route path="prices" element={<PriceList />} />
                        <Route
                            path="prices-featrues"
                            element={<PriceListFeatrues />}
                        />
                        <Route path="contact-info" element={<ContactInfo />} />{' '}
                        <Route path="socialmedia" element={<SocialMedia />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="about-Hero" element={<About_Hero />} />
                        <Route
                            path="about-dev-hero"
                            element={<About_dev_Hero />}
                        />{' '}
                        <Route path="desing-tools" element={<Desing_Tools />} />
                        <Route path="dev-tools" element={<Dev_Tools />} />
                        <Route path="dev-steps" element={<Dev_Steps />} />
                        <Route path="statistics" element={<Statistics />} />
                        <Route path="revue" element={<Rewue />} />
                        <Route path="contacts" element={<Contact />} />
                    </Route>
                </Routes>
            </Router>
            <Toaster position="top-center" />
        </QueryClientProvider>
    );
}

export default App;
