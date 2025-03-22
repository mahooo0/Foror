import React from 'react';
import MobileCard from './mobileCard';

export default function MobileContect() {
    return (
        <div className="  max-md:flex hidden  flex-col gap-4 px-[12px]">
            {Array.from({ length: 5 }).map((_, i) => (
                <MobileCard isBlack={i % 2 === 1} />
            ))}
        </div>
    );
}
