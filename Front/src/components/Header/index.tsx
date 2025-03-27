import Nawbar from './nawbar';
import WhiteBtn, { BlackBtn } from '../Buttons';
import { LanguageSelect } from './language';
import { scrollToId } from '@/helpers/Scroll/ScrollTo';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className=" sticky top-0 bg-white z-50">
            <div className="h-[72px] w-full relative  shadow flex justify-between items-center xl:px-[30px] px-[20px] max-sm:px-3">
                <Nawbar />
                <div className="flex flex-row gap-4 ">
                    <Link to={'https://wa.me/966552660728'}>
                        <WhiteBtn
                            text="+994 055 266 07 28"
                            className="flex max-md:hidden"
                        />
                    </Link>
                    <BlackBtn
                        text="Qiymət təklifi al"
                        action={() => scrollToId('contact')}
                    />
                    <div className="w-fit block max-md:hidden">
                        <LanguageSelect />
                    </div>
                </div>
            </div>
        </header>
    );
}
