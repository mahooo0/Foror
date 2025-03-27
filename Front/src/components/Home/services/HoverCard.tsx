import { ButtonLink } from '@/components/Buttons';

const HoverCard = ({
    index,
    hoveredIndex,
    setHoveredIndex,
}: {
    index: number;
    hoveredIndex: number;
    setHoveredIndex: (par: number) => void;
}) => {
    // Determine positioning based on `index`
    switch (index) {
        case 0:
            return (
                <div
                    className={`absolute  top-0 left-[60px] transition-all duration-300 cursor-pointer ${
                        hoveredIndex != 0 &&
                        hoveredIndex != 1 &&
                        'blur-[1px] opacity-40'
                    }`}
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(0)}
                >
                    <div className="flex justify-center items-center border xl:w-[60px] lg:w-[50px] md:w-[40px]  aspect-square border-black">
                        <div
                            className={`aspect-square bg-black transition-all duration-300 ${
                                hoveredIndex === 1
                                    ? ' xl:w-[20px] lg:w-[20px] md:w-[18px] '
                                    : ' xl:w-[40px] lg:w-[30px] md:w-[26px] '
                            }`}
                        ></div>
                    </div>
                    <h4 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl ml-[60px] text-[32px] transition-all duration-300">
                        Veb saytların hazırlanması
                    </h4>

                    {/* Smooth fade-in for paragraph */}
                    <div className="h-auto overflow-hidden 2xl:max-w-[600px] xl:max-w-[500px] lg:max-w-[400px] md:max-w-[260px]">
                        <p
                            className={`ml-[60px] 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm   transition-all duration-300 transform ${
                                hoveredIndex === 1
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 -translate-y-1'
                            }`}
                        >
                            We take on no more than 3 projects per month,
                            ensuring we give you our full attention.
                        </p>
                    </div>

                    {/* Smooth fade-in for button */}
                    <div className="h-auto overflow-hidden">
                        <ButtonLink
                            text="Ətraflı"
                            className={`ml-[60px] !px-0 transition-all duration-300 transform 2xl:!text-xl xl:!text-lg lg:!text-base md:!text-sm ${
                                hoveredIndex === 1
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 -translate-y-1'
                            }`}
                        />
                    </div>
                </div>
            );
            break;
        case 1:
            return (
                <div
                    className={`absolute top-0 right-[60px] flex flex-col justify-end items-end transition-all duration-300 cursor-pointer ${
                        hoveredIndex != 0 &&
                        hoveredIndex != 2 &&
                        'blur-[1px] opacity-40'
                    }`}
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(0)}
                >
                    <div className="flex justify-center items-center border xl:w-[60px] lg:w-[50px] md:w-[40px]  aspect-square border-black">
                        <div
                            className={`aspect-square bg-black transition-all duration-300 ${
                                hoveredIndex === 2
                                    ? ' xl:w-[20px] lg:w-[20px] md:w-[18px] '
                                    : ' xl:w-[40px] lg:w-[30px] md:w-[26px] '
                            }`}
                        ></div>
                    </div>
                    <h4 className=" 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl mr-[60px] text-end text-[32px] transition-all duration-300">
                        Veb saytların hazırlanması
                    </h4>

                    {/* Smooth fade-in for paragraph */}
                    <div className="h-auto overflow-hidden 2xl:max-w-[600px] xl:max-w-[500px] lg:max-w-[400px] md:max-w-[260px]">
                        <p
                            className={`mr-[60px] text-end 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm transition-all duration-300 transform ${
                                hoveredIndex === 2
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 -translate-y-1'
                            }`}
                        >
                            We take on no more than 3 projects per month,
                            ensuring we give you our full attention.
                        </p>
                    </div>

                    {/* Smooth fade-in for button */}
                    <div className="h-auto overflow-hidden">
                        <ButtonLink
                            text="Ətraflı"
                            className={`mr-[60px] text-end !px-0 transition-all duration-300 transform  2xl:!text-xl xl:!text-lg lg:!text-base md:!text-sm ${
                                hoveredIndex === 2
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 -translate-y-1'
                            }`}
                        />
                    </div>
                </div>
            );
            break;
        case 2:
            return (
                <div
                    className={`absolute bottom-0 left-[60px] flex flex-col-reverse justify-start items-start transition-all duration-300 cursor-pointer ${
                        hoveredIndex != 0 &&
                        hoveredIndex != 3 &&
                        'blur-[1px] opacity-40'
                    }`}
                    onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(0)}
                >
                    <div className="flex justify-center items-center border xl:w-[60px] lg:w-[50px] md:w-[40px]  aspect-square border-black">
                        <div
                            className={`aspect-square bg-black transition-all duration-300 ${
                                hoveredIndex === 3
                                    ? ' xl:w-[20px] lg:w-[20px] md:w-[18px] '
                                    : ' xl:w-[40px] lg:w-[30px] md:w-[26px] '
                            }`}
                        ></div>
                    </div>

                    {/* Button with proper transition */}
                    <div
                        className={`ml-[60px] overflow-hidden transition-all duration-300 transform ${
                            hoveredIndex === 3
                                ? 'max-h-[50px] opacity-100 translate-y-0'
                                : 'max-h-0 opacity-0 translate-y-4'
                        }`}
                    >
                        <ButtonLink
                            text="Ətraflı"
                            className="text-start !px-0 transition-all duration-300  2xl:!text-xl xl:!text-lg lg:!text-base md:!text-sm"
                        />
                    </div>

                    {/* Paragraph with proper transition */}
                    <div
                        className={`ml-[60px] overflow-hidden transition-all duration-300 2xl:max-w-[600px] xl:max-w-[500px] lg:max-w-[400px] md:max-w-[260px] transform ${
                            hoveredIndex === 3
                                ? 'max-h-[100px] opacity-100 translate-y-0'
                                : 'max-h-0 opacity-0 translate-y-4'
                        }`}
                    >
                        <p className="text-start t2xl:text-2xl xl:text-xl lg:text-lg md:text-sm">
                            We take on no more than 3 projects per month,
                            ensuring we give you our full attention.
                        </p>
                    </div>

                    {/* Heading that moves up smoothly */}
                    <h4
                        className={`ml-[60px] 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-start text-[32px] transition-all duration-300 transform ${
                            hoveredIndex === 3
                                ? 'translate-y-0'
                                : 'translate-y-2'
                        }`}
                    >
                        Veb saytların hazırlanması
                    </h4>
                </div>
            );
            break;
        case 3:
            return (
                <div
                    className={`absolute bottom-0   z-10 right-[60px] flex flex-col-reverse justify-end items-end transition-all duration-300 cursor-pointer ${
                        hoveredIndex != 0 &&
                        hoveredIndex != 4 &&
                        'blur-[1px] opacity-40'
                    }`}
                    onMouseEnter={() => setHoveredIndex(4)}
                    onMouseLeave={() => setHoveredIndex(0)}
                >
                    <div className="flex justify-center items-center border xl:w-[60px] lg:w-[50px] md:w-[40px]  aspect-square border-black">
                        <div
                            className={`aspect-square bg-black transition-all duration-300 ${
                                hoveredIndex === 4
                                    ? ' xl:w-[20px] lg:w-[20px] md:w-[18px] '
                                    : ' xl:w-[40px] lg:w-[30px] md:w-[26px] '
                            }`}
                        ></div>
                    </div>

                    {/* Button with proper transition */}
                    <div
                        className={`mr-[60px] overflow-hidden transition-all duration-300 transform ${
                            hoveredIndex === 4
                                ? 'max-h-[50px] opacity-100 translate-y-0'
                                : 'max-h-0 opacity-0 translate-y-4'
                        }`}
                    >
                        <ButtonLink
                            text="Ətraflı"
                            className="text-start !px-0 transition-all duration-300  2xl:!text-xl xl:!text-lg lg:!text-base md:!text-sm"
                        />
                    </div>

                    {/* Paragraph with proper transition */}
                    <div
                        className={`mr-[60px] overflow-hidden transition-all 2xl:max-w-[600px] xl:max-w-[500px] lg:max-w-[400px] md:max-w-[260px] duration-300 transform ${
                            hoveredIndex === 4
                                ? 'max-h-[100px] opacity-100 translate-y-0'
                                : 'max-h-0 opacity-0 translate-y-4'
                        }`}
                    >
                        <p className="text-end 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm ">
                            We take on no more than 3 projects per month,
                            ensuring we give you our full attention.
                        </p>
                    </div>

                    {/* Heading that moves up smoothly */}
                    <h4
                        className={`mr-[60px] 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-end text-[32px] transition-all duration-300 transform ${
                            hoveredIndex === 4
                                ? 'translate-y-0'
                                : 'translate-y-2'
                        }`}
                    >
                        Veb saytların hazırlanması
                    </h4>
                </div>
            );
    }
};

export default HoverCard;
