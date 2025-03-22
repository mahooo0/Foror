import { ButtonLink } from '@/components/Buttons';
import React from 'react';

export default function MobileCard({ isBlack }: { isBlack: boolean }) {
    if (isBlack) {
        return (
            <div className=" rounded-2xl bg-[#222222] w-full h-fit text-white p-3 flex flex-col gap-[30px]">
                <p className="text-base">0.001</p>
                <article className="flex flex-col gap-2 justify-start">
                    <h4 className="text-2xl">Veb saytların hazırlanması</h4>
                    <p className="text-base opacity-60">
                        We take on no more than 3 projects per month, ensuring
                        we give you our full attention.
                    </p>
                    <ButtonLink
                        text="Ətraflı"
                        className={`!px-0 transition-all duration-300 transform text-base w-fit  text-white`}
                    />{' '}
                </article>
            </div>
        );
    }
    return (
        <div className=" rounded-2xl bg-[#fffffff] w-full h-fit text-[#222222] border-[#222222] border p-3 flex flex-col gap-[30px]">
            <p className="text-base">0.001</p>
            <article className="flex flex-col gap-2 justify-start">
                <h4 className="text-2xl">Veb saytların hazırlanması</h4>
                <p className="text-base opacity-60">
                    We take on no more than 3 projects per month, ensuring we
                    give you our full attention.
                </p>
                <ButtonLink
                    text="Ətraflı"
                    className={`!px-0 transition-all duration-300 transform text-base w-fit  text-[#222222]`}
                />{' '}
            </article>
        </div>
    );
}
