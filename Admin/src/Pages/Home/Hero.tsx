import HomeHeroContent from '@/components/Content/Home/Hero';

export default function Home_hero() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Home hero</h1>
            <HomeHeroContent />
        </div>
    );
}
