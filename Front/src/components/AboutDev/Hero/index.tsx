import Spline from '@splinetool/react-spline';

type ImageProps = {
    src: string;
    alt?: string;
};

type Props = {
    heading: string;
    description: string;
    image: ImageProps;
};

export type Layout3Props = React.ComponentPropsWithoutRef<'section'> &
    Partial<Props>;

export const AboutDevHero = (props: Layout3Props) => {
    const { heading, description, image } = {
        ...Layout3Defaults,
        ...props,
    };
    return (
        <section
            data-scroll-section
            id="relume"
            className="px-[5%]  flex flex-col gap-10 "
        >
            <h2 className="rb-5 mb-5 text-4xl text-center font-bold md:mb-6 md:text-5xl lg:text-6xl">
                {heading}
            </h2>
            <div className="">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2  md:items-center md:gap-x-12 lg:gap-x-20">
                    <div className="order-2 md:order-1">
                        <h2 className="rb-5 mb-5 text-xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                            {heading}
                        </h2>
                        <p className="md:text-md">{description}</p>
                    </div>
                    <div className="order-1 md:order-2 bg-[#222222]">
                        <img
                            src={
                                'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-3390-51f7-b04d-60b0e3391c3d/raw?se=2025-03-26T19%3A43%3A31Z&sp=r&sv=2024-08-04&sr=b&scid=b498e53a-7ed5-5e27-9166-0b246e9e951b&skoid=fa7966e7-f8ea-483c-919a-13acfd61d696&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-03-25T20%3A58%3A50Z&ske=2025-03-26T20%3A58%3A50Z&sks=b&skv=2024-08-04&sig=GRxcYfKjyElVRfa4wl8tbKv1IYkVsFi9c3j8w4kWol8%3D'
                            }
                            className="w-full object-cover max-lg:block hidden aspect-square"
                            alt={image.alt}
                        />
                        <div className="relative w-full aspect-square max-lg:hidden block">
                            <Spline
                                scene="https://prod.spline.design/dyCB-x3D4JdINOjF/scene.splinecode"
                                className="w-full object-cover aspect-square max-xl:hidden block  "
                            />
                            <Spline
                                scene="https://prod.spline.design/puqnzC8eTKRvKPQn/scene.splinecode"
                                className="w-full object-cover aspect-square xl:hidden block  "
                            />

                            <div className="absolute bottom-[20px] right-0 xl:h-[50px] border border-black h-[40px] bg-black flex justify-center items-center xl:text-xl text-lg rounded-xl   xl:w-[30%] w-[38%]  text-white">
                                {' '}
                                type something
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Layout3Defaults: Props = {
    heading: 'Long heading is what you see here in this feature section',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Relume placeholder image',
    },
};
