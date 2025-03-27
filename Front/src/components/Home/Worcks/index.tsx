import ProjectCard from '../ProjectCard';
import WhiteBtn from '@/components/Buttons';

export default function WorcksSection() {
    const loading = false;

    return (
        <section
            data-scroll-section
            className="flex flex-col items-center opacity-0 transition-all duration-700 ease-in-out"
            data-scroll
            data-scroll-class="fade-up-in"
            data-scroll-offset="20%"
        >
            <header className="flex flex-col items-center gap-4 text-[#222222] mb-10 lg:px-[100px] md:px-[60px] px-[12px]">
                {loading ? (
                    <div className="w-full flex flex-col items-center gap-3 animate-pulse">
                        <div className="h-4 w-[80px] bg-gray-300 rounded" />
                        <div className="h-10 w-[400px] bg-gray-300 rounded" />
                        <div className="h-4 w-[60%] bg-gray-300 rounded" />
                    </div>
                ) : (
                    <>
                        <p className="text-base font-semibold">Portfolio</p>
                        <h2 className="text-5xl font-bold">Services</h2>
                        <h3 className="text-[18px] max-sm:text-base font-medium opacity-60">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </h3>
                    </>
                )}
            </header>

            <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-1 md:gap-y-8 lg:grid-cols-3 lg:px-[100px] md:px-[60px] px-[12px]">
                {loading ? (
                    Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-[300px] w-[300px] bg-gray-200 animate-pulse rounded-xl"
                        />
                    ))
                ) : (
                    <>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </>
                )}
            </div>

            {!loading && <WhiteBtn text="Show more" className="mt-5" />}
        </section>
    );
}
