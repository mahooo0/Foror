import Nawbar from './nawbar';
import WhiteBtn, { BlackBtn } from '../Buttons';
import { LanguageSelect } from './language';

export default function Header() {
    return (
        <header className=" sticky top-0 bg-white z-50">
            <div className="h-[72px] w-full relative  shadow flex justify-between items-center xl:px-[30px] px-[20px] max-sm:px-3">
                <Nawbar />
                <div className="flex flex-row gap-4 ">
                    <WhiteBtn
                        text="+994 055 266 07 28"
                        className="flex max-md:hidden"
                    />
                    <BlackBtn text="Qiymət təklifi al" />
                    <div className="w-fit block max-md:hidden">
                        <LanguageSelect />
                    </div>
                </div>
            </div>
        </header>
    );
}
