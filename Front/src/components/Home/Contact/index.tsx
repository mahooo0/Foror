import { BlackBtn } from '@/components/Buttons';
import { StoreState, useStore } from '@/helpers/StateManegment';
import { useEffect } from 'react';

export default function ContactUsSection() {
    const SelectedPriceVariant = useStore(
        (state: StoreState) => state.SelectedPriceVariant
    );
    const setSelectedPriceVariant = useStore(
        (state: StoreState) => state.setSelectedPriceVariant
    );
    useEffect(() => {
        console.log('SelectedPriceVariant', SelectedPriceVariant);
    }, [SelectedPriceVariant]);
    return (
        <section
            data-scroll-section
            id="contact"
            className="lg:px-[100px] md:px-[60px] px-[12px] relative"
        >
            <div className="w-full  border border-[#222222] gap-8 rounded-[12px] px-[30px] py-[40px] flex lg:flex-row flex-col  justify-between">
                <div className="flex flex-col  justify-between gap-4">
                    <p className="text-base font-semibold">Tagline</p>
                    <h2 className="text-5xl font-bold">Contact us</h2>
                    <p className="text-base ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                    </p>
                    <div className=" flex flex-col gap-4">
                        {Array.from({ length: 3 }).map((_) => (
                            <div className="flex flex-row gap-4 items-center">
                                <img
                                    src="/svg/relume.svg"
                                    alt=""
                                    className="w-[24px] aspect-square"
                                />
                                <p className="text-base">hello@relume.io</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col  gap-3">
                        <p className="text-base font-semibold">Easy Contact:</p>
                        <div className="flex flex-row gap-4">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <button
                                    key={i}
                                    className=" w-[36px] aspect-square rounded-full flex justify-center items-center bg-[#222222] text-white"
                                >
                                    {' '}
                                    <img src="/svg/relume.svg" alt="" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <form className="lg:w-[46%] w-full grid grid-cols-2 gap-4">
                    <div className="xl:col-span-1 col-span-2 h-fit  flex flex-col gap-2">
                        <label htmlFor="" className="text-base ">
                            NAME
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="h-[48px] w-full border rounded-lg border-[#222222]  bg-white text-base px-[12px] "
                        />
                    </div>
                    <div className="xl:col-span-1 col-span-2 h-fit   flex flex-col gap-2">
                        <label htmlFor="" className="text-base ">
                            Phone number
                        </label>
                        <input
                            type="number"
                            name=""
                            id=""
                            className="h-[48px] w-full border  rounded-lg border-[#222222]  bg-white text-base px-[12px] "
                        />
                    </div>
                    {SelectedPriceVariant !== 0 && (
                        <div className=" col-span-2 h-fit flex flex-col gap-2">
                            <label htmlFor="selectField" className="text-base">
                                SELECT OPTION
                            </label>

                            <div className="h-[48px] w-full border rounded-lg border-[#222222] bg-white">
                                <select
                                    value={SelectedPriceVariant}
                                    onChange={(e) =>
                                        setSelectedPriceVariant(+e.target.value)
                                    }
                                    name="selectField"
                                    id="selectField"
                                    className="w-full h-full  text-base px-[12px] border-transparent border-r-[16px]"
                                >
                                    <option value="0">Select an option</option>
                                    <option value="2">Option One</option>
                                    <option value="3">Option Two</option>
                                    <option value="4">Option Three</option>
                                </select>
                            </div>
                        </div>
                    )}
                    <div className="col-span-2 h-fit   flex flex-col gap-2">
                        <label htmlFor="" className="text-base ">
                            Phone number
                        </label>
                        <textarea
                            name=""
                            id=""
                            className="h-[180px] w-full border  rounded-lg border-[#222222]  bg-white text-base py-2     px-[12px] "
                        ></textarea>
                    </div>
                    <BlackBtn text="Submit" className=" col-span-2 h-[48px]" />
                </form>
            </div>
        </section>
    );
}
