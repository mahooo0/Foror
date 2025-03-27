import DevSection from './DevSection';
import AnimationBG from './animationBG';

export default function DevMap() {
    let isLoading = false;

    if (isLoading) {
        // ⛔ Skeleton View
        return (
            <section
                className="px-[5%] flex flex-col gap-10 animate-pulse"
                data-scroll-section
            >
                <div className="h-[48px] bg-neutral-700 rounded w-[60%] mx-auto"></div>
                <div
                    data-scroll-section
                    className="w-full flex  justify-center relative  h-[3580px] max-sm:h-fit "
                >
                    <AnimationBG />
                    <div
                        data-scroll
                        data-scroll-speed="0.3"
                        className="flex flex-col w-full max-sm:gap-4   gap-0 "
                    >
                        {Array.from({ length: 11 }).map((_, i) => (
                            <section
                                data-scroll-section
                                data-scroll
                                data-scroll-speed="0.01"
                                className={`!z-40 ${
                                    i % 2 === 1
                                        ? 'max-sm:px-[12px] px-[30px] xl:pt-[120px] pt-0'
                                        : 'lg:px-[100px] md:px-[60px] px-[12px]'
                                } h-fit items-center min-h-[330px] opacity-100 w-full ${
                                    i % 2 === 1
                                        ? 'flex justify-end'
                                        : 'flex justify-start'
                                }`}
                            >
                                <div className=" bg-neutral-700 rounded w-[40%] max-sm:w-full h-full "></div>
                            </section>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="">
            <h2 className="text-5xl font-bold text-center">Services</h2>

            <div
                data-scroll-section
                className="w-full flex  justify-center relative  h-[3580px] max-sm:h-fit "
            >
                <AnimationBG />
                <div
                    data-scroll
                    data-scroll-speed="0.3"
                    className="flex flex-col w-full max-sm:gap-4   gap-0 "
                >
                    <DevSection variat="left" />
                    <DevSection variat="right" />
                    <DevSection variat="left" />
                    <DevSection variat="right" />
                    <DevSection variat="left" />
                    <DevSection variat="right" />
                    <DevSection variat="left" />
                    <DevSection variat="right" />
                    <DevSection variat="left" />
                    <DevSection variat="right" />
                </div>
            </div>
        </section>
    );
}
