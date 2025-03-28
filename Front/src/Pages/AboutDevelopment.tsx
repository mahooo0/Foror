import DevMap from '@/components/AboutDev/DevMap';
import { AboutDevHero } from '@/components/AboutDev/Hero';
import ToolsSection from '@/components/AboutDev/Tools';

export default function AboutDevelopment() {
    return (
        <div className="flex flex-col gap-10 py-10  ">
            <AboutDevHero />
            <ToolsSection />
            <ToolsSection />
            <DevMap />
        </div>
    );
}
