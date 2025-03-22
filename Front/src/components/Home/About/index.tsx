import WhiteBtn from '@/components/Buttons';
import React from 'react';

export default function AboutSection() {
    return (
        <section
            className="flex flex-row max-lg:flex-col
         lg:px-[100px] md:px-[30px] px-[12px] gap-10 items-center justify-center"
        >
            <img
                src=""
                alt=""
                className=" bg-black/50 w-[50%] max-lg:w-full max-lg:aspect-[2/1] max-md:aspect-square aspect-square "
            />
            <article className="w-[50%]  max-lg:w-full flex flex-col gap-5">
                <p className="text-base font-semibold  2xl:text-lg ">
                    Who we are?
                </p>
                <h3 className="text-4xl 2xl:text-6xl max-sm:text-[32px] font-bold">
                    Medium length section heading goes here
                </h3>
                <p className="text-[18px] 2xl:text-xl max-sm:text-base font-medium opacity-60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                </p>
                <WhiteBtn
                    text="Read more"
                    className=" w-fit font-sans !px-8 !py-5 shadow-2xl rounded-[8px]  !text-[18px] max-sm:!px-[24px] max-sm:!py-[12px] max-sm:!text-[14px]"
                />
            </article>
        </section>
    );
}
