import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ContactUsSection from '../Home/Contact';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Layout = () => {
    const location = useLocation();
    const controls = useAnimation();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const runAnimation = async () => {
            setShowContent(false); // Hide content (simulate route start)
            await controls.start({ opacity: 0, transition: { duration: 0.3 } });

            // Scroll to top
            window.scrollTo(0, 0);

            setShowContent(true); // Show new route content
            await controls.start({ opacity: 1, transition: { duration: 0.4 } });
        };

        runAnimation();
    }, [location.pathname]);

    return (
        <motion.div
            animate={controls}
            initial={{ opacity: 1 }}
            className="flex flex-col min-h-screen"
        >
            <Header />

            <main className="flex-grow">
                {showContent && <Outlet />} {/* Only show after fade-out */}
            </main>

            <ContactUsSection />
            <Footer />
        </motion.div>
    );
};

export default Layout;
