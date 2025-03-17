import React, { useState } from 'react';

export default function PopUP() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="hidden max-lg:block">
            <button onClick={() => setIsOpen(!isOpen)}>
                <img src="/svg/headerPOP.svg" alt="" />
            </button>
            {isOpen && (
                <div className="w-full h-[300px] bg-white  absolute top-[100%] left-0 px-3 py-[21px] border border-black ">
                    <nav className="text-xl ">
                        <ul className="flex flex-col gap-4">
                            <li>Xidmətlərimiz</li>
                            <li>Haqqımızda</li>
                            <li>Blog</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                            <li>Price List</li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}
