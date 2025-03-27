import DevMap from '@/components/AboutDev/DevMap';
import { AboutDevHero } from '@/components/AboutDev/Hero';
import ToolsSection from '@/components/AboutDev/Tools';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef } from 'react';

export default function AboutDevelopment() {
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
            data-scroll-container
            ref={scrollRef}
            className="flex flex-col gap-10 py-10  "
        >
            <AboutDevHero />
            <ToolsSection />
            <ToolsSection />
            <DevMap />
        </div>
    );
}
