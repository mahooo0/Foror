import React from 'react';
import HoverCard from './HoverCard';
import Spline from '@splinetool/react-spline';

export default function DesctopContent() {
    const [HoveredId, setHoveredId] = React.useState<number>(0);

    return (
        <div className="relative max-md:hidden block overflow-hidden max-sm:max-h-[80vh] h-fit lg:px-[100px] md:px-[30px] px-[12px]">
            <Spline scene="https://prod.spline.design/m1wbrZ0-TwhTPU4F/scene.splinecode" />
            {Array.from({ length: 5 }).map((_, i) => (
                <HoverCard
                    index={i}
                    hoveredIndex={HoveredId}
                    setHoveredIndex={setHoveredId}
                />
            ))}

            <div className="bg-white w-[20%] z-0 h-[50px] absolute  bottom-[10px] right-0 mr-[70px]"></div>
        </div>
    );
}
