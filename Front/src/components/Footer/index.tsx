import { scrollToId } from '@/helpers/Scroll/ScrollTo';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500); // simulate loading delay
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        // 🔁 Skeleton Loader
        return (
            <footer className="bg-[#222222] sticky top-0 font_base lg:px-[100px] md:px-[60px] px-[12px] mt-[100px] py-[60px] text-white animate-pulse">
                <div className="flex flex-row flex-wrap justify-between max-md:flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3 items-center">
                            <div className="h-[47px] w-[47px] bg-neutral-700 rounded" />
                            <div className="h-8 w-[120px] bg-neutral-700 rounded" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 w-[80px] bg-neutral-700 rounded" />
                            <div className="h-4 w-[120px] bg-neutral-700 rounded" />
                            <div className="h-4 w-[150px] bg-neutral-700 rounded" />
                        </div>
                        <div className="flex gap-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="h-6 w-6 bg-neutral-700 rounded"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-row gap-[60px] max-md:flex-col">
                        {[...Array(2)].map((_, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                                <div className="h-6 w-[100px] bg-neutral-700 rounded" />
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="h-4 w-[120px] bg-neutral-800 rounded"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 h-12 bg-neutral-800 w-3/4 rounded" />
                <div className="w-full border-t border-white mt-6 pt-[32px] text-[14px] flex justify-between flex-wrap gap-2">
                    <div className="h-4 w-[200px] bg-neutral-700 rounded" />
                </div>
            </footer>
        );
    }

    // ✅ Real Footer
    return (
        <footer className="bg-[#222222] sticky top-0 font_base lg:px-[100px] md:px-[60px] px-[12px] mt-[100px] py-[60px] text-white">
            <div className="flex flex-row flex-wrap justify-between max-md:flex-col gap-10">
                <div className="flex flex-col justify-between gap-5 ">
                    <div>
                        <Link
                            to={'/'}
                            className="flex flex-row gap-2 items-center fill-white "
                        >
                            <img
                                src="/svg/logoMain.svg"
                                alt=""
                                className="h-[47px] max-sm:h-[30px]"
                            />
                            <h2 className="font_base text-[32px] max-sm:text-[20px] block">
                                Fooror
                            </h2>
                        </Link>
                    </div>
                    <div className="text-[14px] font-normal">
                        <p className="text-[14px] font-semibold">contact</p>
                        <Link to={'/ +994 055 266 07 28'}>
                            <p>+994 055 266 07 28</p>
                        </Link>
                        <p>info@relume.io</p>
                    </div>
                    <div className="flex flex-row gap-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Link to={'/'} key={i}>
                                <img
                                    src="/images/faceboock.png"
                                    className="w-6 aspect-square"
                                    alt=""
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row gap-[60px] max-md:flex-col">
                    <nav className="flex flex-col gap-2 font-semibold text-[16px]">
                        <p className="text-[24px]">Routing</p>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>Haqqımızda</Link>
                        <Link to={'/about-development'}>
                            Proqramlasdirma haqqinda
                        </Link>
                        <Link to={'/price-list'}>Price List</Link>
                        <button
                            className="w-fit"
                            onClick={() => {
                                scrollToId('contact');
                            }}
                        >
                            Contact
                        </button>
                        <Link to={'/blogs'}>Blog</Link>
                        <Link to={'/worcks'}>Portfolio</Link>
                    </nav>

                    <nav className="flex flex-col gap-2 font-semibold text-[16px]">
                        <p className="text-[24px]">Services</p>
                        <Link to={'/worcks/id'}>
                            Veb saytların hazırlanması
                        </Link>
                        <Link to={'/'}>Veb saytlara texniki dəstək</Link>
                        <Link to={'/'}>Korporativ mail xidməti</Link>
                        <Link to={'/'}>Online ödəmə sistemi inteqrasiyası</Link>
                    </nav>
                </div>
            </div>

            <div className="text-[#FFD711] font_base xl:text-[96px] lg:text-[60px] md:text-[50px] text-[40px]">
                LEST MAKE A FOROR
            </div>

            <div className="w-full border-t border-white text-[14px] flex flex-row justify-between pt-[32px] flex-wrap gap-2">
                <p>© 2025 Fooror. All rights reserved.</p>
            </div>
        </footer>
    );
}
