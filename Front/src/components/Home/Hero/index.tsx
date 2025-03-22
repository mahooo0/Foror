import WhiteBtn from '@/components/Buttons';
import React from 'react';

export default function Hero() {
    return (
        <section className=" relative overflow-hidden max-sm:max-h-screen  h-fit border-b border-black/20">
            <div
                style={{
                    backgroundImage: `
                      linear-gradient(to bottom, 
                        rgba(255, 255, 255, 1) 0%, 
                        rgba(255, 255, 255, 0) 50%, 
                        rgba(255, 255, 255, 1) 100%)`,
                }}
                className=" w-full z-10   flex items-center   flex-col lg:px-[100px] md:px-[30px] px-[12px]    gap-10 relative border-b border-black/20"
            >
                <article className="  xl:w-[70%] w-fit xl:px-0  pt-[40px] text-center flex flex-col gap-3 h-fit justify-center items-center">
                    <p className="lg:text-base md:text-[12px] max-sm:font-medium max-sm:text-[10px] font-bold">
                        ✦  Hi, you are on the right place
                    </p>
                    <h1 className=" xl:text-[44px]  lg:text-[36px] md:text-[30px] max-sm:text-[32px]  max-lg:text-[36px] font-bold">
                        Medium length hero heading goes here
                    </h1>
                    <h2 className="lg:text-[14px] md:text-[12px] max-sm:text-[11px] max-w-[680px] opacity-60">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                    </h2>
                    <WhiteBtn
                        text="Qiymət təklifi al"
                        className=" w-fit font-sans !px-8 !py-5 shadow-2xl rounded-[8px]  !text-[18px] max-sm:!px-[24px] max-sm:!py-[12px] max-sm:!text-[14px]"
                    />
                </article>

                <img
                    src="/images/heroLg.png"
                    alt=""
                    className=" sm:block  hidden   xl:w-[70%] w-full"
                />
                <img
                    src="/images/heroSm.png"
                    alt=""
                    className="   max-sm:block hidden      w-[70%]"
                />
            </div>
            <div
                className=" w-full h-full absolute top-0 left-0  z-0  opacity-10"
                style={{
                    backgroundImage: "url('/images/black.png')",
                    backgroundRepeat: 'repeat',
                    backgroundSize: '6%',
                }}
            ></div>
        </section>
    );
}
