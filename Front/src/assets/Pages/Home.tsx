import AboutSection from '@/components/Home/About';
import AboutDevelopmentSection from '@/components/Home/AboutDEvelopment';
import CompaniesSection from '@/components/Home/Companies';
import Hero from '@/components/Home/Hero';
import PrefeSection from '@/components/Home/PrefeSection';
import PriceList from '@/components/Home/PriceList';
import ServicesSection from '@/components/Home/services';
import WorcksSection from '@/components/Home/Worcks';

export default function Home() {
    return (
        <div className="flex flex-col xl:gap-[80px] gap-10">
            <Hero />
            <AboutSection />
            <ServicesSection />
            <WorcksSection />
            <CompaniesSection />
            <AboutDevelopmentSection />
            <PrefeSection />
            <PriceList />
        </div>
    );
}
