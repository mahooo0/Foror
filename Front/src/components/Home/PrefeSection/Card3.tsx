import React from 'react';

export default function Card3() {
    const [isHover, setIsHover] = React.useState(false);
    return (
        <div
            className={`h-[360px]  c xl:col-span-9 lg:col-span-8 col-span-12 ${
                isHover ? 'rounded-[9px]' : ' rounded-[24px]'
            }   border border-black/20 duration-300  relative overflow-hidden flex flex-col md:justify-between  px-[14px] py-[18px]`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className=" w-full h-full  absolute top-[0px] left-[0px] z-0 blur-xl flex justify-end items-end overflow-hidden">
                <img
                    src="/images/Card3.png"
                    alt=""
                    className={`w-full object-cover ${
                        isHover ? 'opacity-100' : ' opacity-0'
                    }  duration-700`}
                />
            </div>
            <p className="text-[32px] font-semibold z-10">Responsive </p>
            <p className="z-10  md:text-[40px] text-base w-[180px] font-sans font-bold">
                Mobile & Frendly{' '}
            </p>
            <img
                src="/images/Phone.png "
                alt=""
                className={`xl:w-[36%] lg:w-[320px] md:w-[36%] w-4/6 object-cover  absolute bottom-[-10%] zl:right-[20%] right-6 ${
                    isHover ? ' rotate-[-20deg] scale-125' : ' opacity-100'
                }  duration-700`}
            />
        </div>
    );
}
