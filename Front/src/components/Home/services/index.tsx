import DesctopContent from './DexctopContent';
import MobileContect from './MobileContect';

export default function ServicesSection() {
    const loading = false;

    return (
        <section data-scroll-section>
            <header className="flex flex-col items-center gap-4 text-[#222222] mb-10 lg:px-[100px] md:px-[60px] px-[12px]">
                {loading ? (
                    <div className="w-full flex flex-col items-center gap-3 animate-pulse">
                        <div className="h-4 w-[80px] bg-gray-300 rounded" />
                        <div className="h-10 w-[200px] bg-gray-300 rounded" />
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

            <DesctopContent loading={loading} />
            <MobileContect loading={loading} />
        </section>
    );
}
