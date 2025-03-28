import AnimatedImage from './AnimatedImage';

const isLoading = false;

export default function AboutHero() {
    if (isLoading) {
        return (
            <section className="flex flex-col py-[40px] justify-center items-center gap-10 lg:px-[100px] md:px-[60px] px-[12px] animate-pulse">
                <div className="mb-5 h-12 w-3/4 md:w-1/2 bg-gray-300 rounded-md"></div>
                <div className="flex xl:flex-row flex-col gap-10 w-full">
                    <div className="flex flex-col gap-4 xl:w-1/2 w-full">
                        <div className="h-4 w-24 bg-gray-300 rounded"></div>
                        <div className="h-10 w-3/4 bg-gray-300 rounded-md"></div>
                        <div className="space-y-3">
                            <div className="h-4 bg-gray-300 rounded w-full"></div>
                            <div className="h-4 bg-gray-300 rounded w-full"></div>
                            <div className="h-4 bg-gray-300 rounded w-11/12"></div>
                            <div className="h-4 bg-gray-300 rounded w-full"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-300 rounded w-full"></div>
                            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                            <div className="h-4 bg-gray-300 rounded w-full"></div>
                        </div>
                    </div>
                    <div className="flex xl:w-1/2 w-full justify-center">
                        <div className="h-64 w-full bg-gray-300 rounded-lg"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="flex flex-col py-[40px] justify-center items-center gap-10 lg:px-[100px] md:px-[60px] px-[12px]">
            <h2 className="rb-5 mb-5 text-4xl text-center font-bold md:mb-6 md:text-5xl lg:text-6xl">
                {'heading'}
            </h2>
            <div className="flex xl:flex-row flex-col gap-10">
                <div className="flex flex-col gap-4 xl:w-1/2 w-full">
                    <p className="text-base font-semibold">Tagline</p>
                    <h1 className="text-5xl">
                        Tell the story of how your company came about
                    </h1>
                    <p className="text-base opacity-70 col-span-1 max-sm:text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce varius faucibus massa sollicitudin amet augue.
                        Nibh metus a semper purus mauris duis. Lorem eu neque,
                        tristique quis duis. Nibh scelerisque ac adipiscing
                        velit non nulla in amet pellentesque. Sit turpis pretium
                        eget maecenas. Vestibulum dolor mattis consectetur eget
                        commodo vitae. Amet pellentesque sit pulvinar lorem mi
                        a, euismod risus rhoncus. Elementum ullamcorper nec,
                        habitasse vulputate. Eget dictum quis est sed egestas
                        tellus, a lectus. Quam ullamcorper in fringilla arcu
                        aliquet fames arcu. Lacinia eget faucibus urna, nam
                        risus nec elementum cras porta. Sed elementum, sed dolor
                        purus dolor dui. Ut dictum nulla pulvinar vulputate sit
                        sagittis in eleifend dignissim. Natoque mauris cras
                        molestie velit. Maecenas eget adipiscing quisque viverra
                        lectus arcu, tincidunt ultrices pellentesque.
                    </p>
                </div>
                <div className="flex xl:w-1/2 w-full justify-center">
                    <AnimatedImage />
                </div>
            </div>
        </section>
    );
}
