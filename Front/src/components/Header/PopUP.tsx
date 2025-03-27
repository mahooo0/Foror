import { useEffect, useRef } from 'react';
import MobileSelect from './SelectMobile';
import WhiteBtn, { BlackBtn } from '../Buttons';
import { LanguageSelect } from './language';
import { Link } from 'react-router-dom';
import { useStore } from '@/helpers/StateManegment';
import { scrollToId } from '@/helpers/Scroll/ScrollTo';

export default function PopUP() {
    const isOpen = useStore((state: any) => state.isMobilePOPupOpen);
    const setIsOpen = useStore((state: any) => state.setIsMobilePOPupOpen);
    const popupRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    // 👇 Detect clicks outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                popupRef.current &&
                !popupRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Clean up on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setIsOpen]);
    return (
        <div className="hidden max-lg:block font_base">
            <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
                <img src="/svg/headerPOP.svg" alt="" />
            </button>
            <div
                ref={popupRef}
                className={`w-full h-fit bg-white absolute top-[100%] left-0 px-3 py-[21px] border border-black
                        transition-all duration-300 ease-in-out transform z-50
                        ${
                            isOpen
                                ? 'opacity-100 translate-y-0 pointer-events-auto'
                                : 'opacity-0 -translate-y-4 pointer-events-none'
                        }
                        `}
            >
                <nav className="text-xl ">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link onClick={() => setIsOpen(false)} to={'/'}>
                                Home
                            </Link>
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
                            <Link
                                onClick={() => setIsOpen(false)}
                                to={'/blogs'}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to={'/worcks'}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setIsOpen(false), scrollToId('contact');
                                }}
                            >
                                Contact
                            </button>
                        </li>
                        <li>
                            {' '}
                            <Link
                                onClick={() => setIsOpen(false)}
                                to={'/price-list'}
                            >
                                Price List
                            </Link>
                        </li>
                        <BlackBtn
                            action={() => {
                                setIsOpen(false), scrollToId('contact');
                            }}
                            text="Qiymet teklifi al"
                            className="hidden max-md:block"
                        />
                        <Link
                            to={'https://wa.me/966552660728'}
                            className="w-full"
                        >
                            <WhiteBtn
                                text="+994 055 266 07 28"
                                className="hidden max-md:block w-full"
                            />
                        </Link>

                        <div className="h-fit hidden max-md:block">
                            <LanguageSelect />
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
