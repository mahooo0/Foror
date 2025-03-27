import DevSection from './DevSection';
import AnimationBG from './animationBG';

export default function DevMap() {
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
