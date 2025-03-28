import { motion } from 'framer-motion';
import WhiteBtn from '@/components/Buttons';
import { Link } from 'react-router-dom';

// {prolog?:string,img?:string, title?:string, description?:string}
export default function AboutSection() {
    const loading = false;

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-row max-lg:flex-col lg:px-[100px] md:px-[30px] px-[12px] gap-10 items-center justify-center"
        >
            {loading ? (
                <div className="bg-gray-300 animate-pulse w-[50%] max-lg:w-full max-lg:aspect-[2/1] max-md:aspect-square aspect-square rounded-xl" />
            ) : (
                <img
                    src="/images/about-img.png"
                    alt=""
                    className="bg-black/50 w-[50%] max-lg:w-full max-lg:aspect-[2/1] max-md:aspect-square aspect-square rounded-xl"
                />
            )}

            <article className="w-[50%] max-lg:w-full flex flex-col gap-5">
                {loading ? (
                    <div className="flex flex-col gap-4 animate-pulse">
                        <div className="h-4 w-[30%] bg-gray-300 rounded" />
                        <div className="h-10 w-[80%] bg-gray-300 rounded" />
                        <div className="h-4 w-[90%] bg-gray-300 rounded" />
                        <div className="h-4 w-[85%] bg-gray-300 rounded" />
                        <div className="h-12 w-[150px] bg-gray-300 rounded mt-4" />
                    </div>
                ) : (
                    <>
                        <p className="text-base font-semibold 2xl:text-lg">
                            Who we are?
                        </p>
                        <h3 className="text-4xl 2xl:text-6xl max-sm:text-[32px] font-bold">
                            Medium length section heading goes here
                        </h3>
                        <p className="text-[18px] 2xl:text-xl max-sm:text-base font-medium opacity-60">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique. Duis cursus, mi quis viverra ornare, eros
                            dolor interdum nulla, ut commodo diam libero vitae
                            erat.
                        </p>
                        <Link to={'/about'}>
                            <WhiteBtn
                                text="Read more"
                                className="w-fit font-sans !px-8 !py-5 shadow-2xl rounded-[8px] !text-[18px] max-sm:!px-[24px] max-sm:!py-[12px] max-sm:!text-[14px]"
                            />
                        </Link>
                    </>
                )}
            </article>
        </motion.section>
    );
}
