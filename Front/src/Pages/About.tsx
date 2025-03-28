import AboutHero from '@/components/About/Hero';
import { Statistics } from '@/components/About/Statistics';
import CompaniesSection from '@/components/Home/Companies';
import ReviueSection from '@/components/Rewiue';

export default function About() {
    return (
        <div className="pb-[40px]">
            <AboutHero />
            <Statistics />
            <CompaniesSection />
            <ReviueSection />
        </div>
    );
}
