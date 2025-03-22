import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="">
                <Outlet /> {/* This is where nested routes will render */}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
