import React from 'react';
import HoverCard from './HoverCard';
import Spline from '@splinetool/react-spline';
import { useStore } from '@/helpers/StateManegment';
import GETRequest from '@/helpers/Requests/Query';
import { ServiceItem } from '@/helpers/Requests/Types';

export default function DesctopContent({ loading }: { loading: boolean }) {
    const [HoveredId, setHoveredId] = React.useState<number>(0);
    const language = useStore((state) => state.Lang);

    const { data: services } = GETRequest<ServiceItem[]>(
        'services',
        'services',
        [language]
    );
    return (
        <div className="relative max-md:hidden block overflow-hidden max-sm:max-h-[80vh] h-fit lg:px-[100px] md:px-[30px] px-[12px]">
            {loading ? (
                <div className="w-[80vw] h-[500px] bg-gray-200 animate-pulse rounded-xl" />
            ) : (
                <>
                    <Spline scene="https://prod.spline.design/m1wbrZ0-TwhTPU4F/scene.splinecode" />
                    {services?.map((Service, i) => (
                        <HoverCard
                            key={i}
                            index={i}
                            data={Service}
                            hoveredIndex={HoveredId}
                            setHoveredIndex={setHoveredId}
                        />
                    ))}
                    <div className="bg-white w-[20%] z-0 h-[50px] absolute bottom-[10px] right-0 mr-[70px]" />
                </>
            )}
        </div>
    );
}
