import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import MobileSelect from './SelectMobile';
import WhiteBtn, { BlackBtn } from '../Buttons';
import { LanguageSelect } from './language';
import { Link } from 'react-router-dom';

export default function PopUP() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="hidden max-lg:block font_base">
            <button onClick={() => setIsOpen(!isOpen)}>
                <img src="/svg/headerPOP.svg" alt="" />
            </button>
            {isOpen && (
                <div className="w-full h-fit bg-white  absolute top-[100%] left-0 px-3 py-[21px] border border-black ">
                    <nav className="text-xl ">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <MobileSelect
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
                            <li>
                                <MobileSelect
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
                                <Link to={'/blogs'}>Contact</Link>
                            </li>
                            <li>
                                {' '}
                                <Link to={'/price-list'}>Price List</Link>
                            </li>
                            <BlackBtn
                                text="Qiymet teklifi al"
                                className="hidden max-md:block"
                            />
                            <WhiteBtn
                                text="+994 055 266 07 28"
                                className="hidden max-md:block"
                            />
                            <div className="h-fit hidden max-md:block">
                                <LanguageSelect />
                            </div>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}
