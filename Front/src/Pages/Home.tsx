import AboutSection from '@/components/Home/About';
import AboutDevelopmentSection from '@/components/Home/AboutDEvelopment';
import CompaniesSection from '@/components/Home/Companies';
import Hero from '@/components/Home/Hero';
import PrefeSection from '@/components/Home/PrefeSection';
import PriceList from '@/components/Home/PriceList';
import ServicesSection from '@/components/Home/services';
import WorcksSection from '@/components/Home/Worcks';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useEffect, useRef } from 'react';
export default function Home() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const scrollInstance = useRef<any>(null);
    useEffect(() => {
        if (scrollRef.current) {
            scrollInstance.current = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
            } as any);
        }

        return () => {
            if (scrollInstance.current) scrollInstance.current.destroy();
        };
    }, []);
    return (
        <div
            className="flex flex-col xl:gap-[80px] gap-10"
            data-scroll-container
            ref={scrollRef}
        >
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
