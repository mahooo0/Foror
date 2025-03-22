import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#222222] font_base lg:px-[100px] md:px-[60px] px-[12px] mt-[100px] py-[60px] text-white">
            <div className="flex flex-row flex-wrap justify-between max-md:flex-col gap-10">
                <div className="flex flex-col justify-between gap-5 ">
                    <div>
                        {' '}
                        <Link
                            to={'/'}
                            className="flex flex-row gap-2 items-center fill-white "
                        >
                            <img
                                src="/svg/logo.svg"
                                alt=""
                                className="h-[47px] max-sm:h-[30px]"
                            />
                            <h2 className="font_base text-[32px] max-sm:text-[20px] block  ">
                                Fooror
                            </h2>
                        </Link>
                    </div>
                    <div className="text-[14px] font-normal">
                        <p className="text-[14px] font-semibold">contact</p>
                        <p>+994 055 266 07 28</p>
                        <p>info@relume.io</p>
                    </div>
                    <div className="flex flex-row gap-3">
                        {Array.from({ length: 5 }).map((item, i) => (
                            <Link to={'/'}>
                                <img
                                    key={i}
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
                        <p className="text-[24px] ">Routing</p>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/'}>Price List</Link>
                        <Link to={'/'}>Haqqımızda</Link>
                        <Link to={'/'}>Blog</Link>
                        <Link to={'/'}>Contact</Link>
                    </nav>
                    <nav className="flex flex-col gap-2 font-semibold text-[16px]">
                        <p className="text-[24px] ">Services</p>
                        <Link to={'/'}>Veb saytların hazırlanması</Link>
                        <Link to={'/'}>Veb saytlara texniki dəstək</Link>
                        <Link to={'/'}>Korporativ mail xidməti</Link>
                        <Link to={'/'}>Online ödəmə sistemi inteqrasiyası</Link>
                    </nav>{' '}
                </div>
            </div>
            <div className="text-[#FFD711] font_base xl:text-[96px] lg:text-[60px] md:text-[50px] text-[40px] ">
                LEST MAKE A FOROR
            </div>
            <div className="w-full border-t border-white text-[14px] flex flex-row justify-between pt-[32px]  flex-wrap gap-2">
                <p>© 2024 Relume. All rights reserved.</p>
                <div className=" underline  flex flex-row gap-3 flex-wrap">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </div>
            </div>
        </footer>
    );
}
