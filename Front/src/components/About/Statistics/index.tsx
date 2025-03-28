import React from 'react';

type ImageProps = {
    src: string;
    alt?: string;
};

type StatsProps = {
    title: string;
    description: string;
};

type Props = {
    heading: string;
    stats: StatsProps[];
    description: string;
    image: ImageProps;
};

export type Layout118Props = React.ComponentPropsWithoutRef<'section'> &
    Partial<Props>;

const isLoading = false; // <-- toggle this to true to see the skeleton

export const Statistics = (props: Layout118Props) => {
    const { heading, description, stats } = {
        ...Layout118Defaults,
        ...props,
    };

    if (isLoading) {
        return (
            <section id="relume" className="px-[5%] pt-[40px] animate-pulse">
                <div className="container">
                    <div className="mb-12 flex flex-col text-center items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
                        <div className="flex flex-col gap-4 w-full justify-center items-center">
                            <div className="h-10 w-3/4 bg-gray-300 rounded-md"></div>
                            <div className="h-5 w-full bg-gray-200 rounded-md"></div>
                            <div className="h-5 w-2/3 bg-gray-200 rounded-md"></div>
                        </div>
                        <div className="w-full">
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 py-2">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex flex-col items-center gap-2"
                                    >
                                        <div className="h-12 w-24 bg-gray-300 rounded-md"></div>
                                        <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                                        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="relume" className="px-[5%] pt-[40px]">
            <div className="container">
                <div className="mb-12 flex flex-col text-center items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
                            {heading}
                        </h3>
                        <p className="mb-6 md:mb-8 md:text-lg">{description}</p>
                    </div>
                    <div className="w-full">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 grid-flow-row-dense justify-center gap-6 py-2">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="w-full col-span-1 justify-self-auto"
                                >
                                    <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                                        {stat.title}
                                    </h3>
                                    <p className="text-base">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Layout118Defaults: Props = {
    heading: 'Long heading is what you see here in this feature section',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
        alt: 'Relume placeholder image',
    },
    stats: [
        {
            title: '50%',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: '50%',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: '50%',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: '50%',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ],
};
