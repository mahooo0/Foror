import React from 'react';
import HeaderSelect from './Select';
import { Link } from 'react-router-dom';
import PopUP from './PopUP';

export default function Nawbar() {
    return (
        <nav className="flex flex-row xl:gap-6 gap-4  h-full items-center">
            <Link to={'/'} className="flex flex-row gap-2 items-center ">
                <PopUP />
                <img
                    src="/images/logo.png"
                    alt=""
                    className="h-[47px] max-sm:h-[30px]"
                />
                <h2 className="font_base text-[32px] max-sm:text-[20px] block max-xl:hidden max-lg:block ">
                    Fooror
                </h2>
            </Link>
            <ul className="lg:flex flex-row lg:gap-4 pt-[10px] hidden  text-base  font-[500] text-[#222222] items-center h-full">
                <li className="h-full">
                    <HeaderSelect
                        title="Xidmətlərimiz"
                        options={[
                            {
                                title: 'Veb saytların hazırlanması',
                                link: '/service/id',
                            },
                            {
                                title: 'Veb saytlara texniki dəstək',
                                link: '/about-development',
                            },
                            {
                                title: 'Korporativ mail xidməti',
                                link: '/about-development',
                            },
                            {
                                title: 'Online ödəmə sistemi inteqrasiyası',
                                link: '/about-development',
                            },
                        ]}
                    />
                </li>
                <li className="h-full">
                    <HeaderSelect
                        title="Haqqımızda"
                        options={[
                            {
                                title: 'Haqqımızda',
                                link: '/about',
                            },
                            {
                                title: 'Proqramlasdirma haqqinda',
                                link: '/about-development',
                            },
                        ]}
                    />
                </li>
                <li>
                    <Link to={'/blogs'}>Blog</Link>
                </li>
                <li>
                    <Link to={'/worcks'}>Portfolio</Link>
                </li>

                <li>
                    {' '}
                    <Link to={'/price-list'}>Price List</Link>
                </li>
            </ul>
        </nav>
    );
}
