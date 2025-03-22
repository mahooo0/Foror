'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import WhiteBtn from '@/components/Buttons';

export default function AboutDevelopmentSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const baseDelay = 0.5;

    const imageVariants = {
        hidden: { y: 100 },
        visible: (i: number) => ({
            y: 0,

            transition: {
                delay: baseDelay + i * 0.3,
                duration: 0.8,
                ease: 'easeOut',
            },
        }),
    };

    const articleVariants = {
        hidden: { opacity: 1, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: baseDelay + 3 * 0.3 + 0.3, // starts after the last image
                duration: 1,
            },
        },
    };

    return (
        <section
            ref={ref}
            className="lg:pl-[80px] md:px-[60px] px-[12px] items-center xl:pr-0 lg:pr-[60px] md:pr-[60px] pr-[12px] pt-[80px] min-h-[780px] relative pb-[80px] bg-[#222222] w-full h-fit overflow-hidden text-white flex xl:flex-row flex-col gap-5"
        >
            <motion.article
                className="xl:w-[40%] w-full max-lg:w-full flex flex-col gap-5"
                variants={articleVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <p className="text-base font-semibold 2xl:text-lg">
                    Who we are?
                </p>
                <h3 className="text-4xl 2xl:text-6xl max-sm:text-[32px] font-bold">
                    Medium length section heading goes here
                </h3>
                <p className="text-[18px] 2xl:text-xl max-sm:text-base font-medium opacity-60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique...
                </p>
                <WhiteBtn
                    text="Read more"
                    className="w-fit font-sans !px-8 !py-5 shadow-2xl rounded-[8px] !text-[18px] max-sm:!px-[24px] max-sm:!py-[12px] max-sm:!text-[14px]"
                />
            </motion.article>

            <div className="xl:w-[60%] w-[100%] max-lg:w-full h-[600px] max-sm:h-[230px] flex relative ">
                <motion.img
                    custom={0}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={imageVariants}
                    src="https://s3-alpha-sig.figma.com/img/c070/acca/b76e89a2e96b9161b8a27aa9d6698e89?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YeWFDtrQvY6P0XvQPJAIGoB-q7p-Hp~S1He837Ert~MrcjI6pKWEkyAVx7eNNXBn69QKATT5nrzchL4jAdB2vxqfbdKiHkVxGLr-17Rlf80e6nQodmh-Tu2enktm9g4b3cWA~eok1JecpvR6KjcTYX-1muI-g7~1IHLxqESuFEJTHAJmh~iHMi85ANDyhrsoXZue6Q6gZsTOvReljUhv~6FQGfajpBayR9anas7UIG0dxKdTIt5C6qOsfk8Zxcso2pcjtpPWHRA5o~xtkiirkbBFiVzlcrbHd-uSpI5xk8fWnVMcGwepKhUXEDB02EG1GwqVZwCfhLjtMNmvWBIAWA__"
                    alt=""
                    className="absolute xl:w-[320px] lg:w-[40%] md:w-[45%] w-[50%] xl:right-[80px] lg:right-[5%] md:right-[5%] right-0 top-[0px]"
                />
                <motion.img
                    custom={1}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={imageVariants}
                    src="https://s3-alpha-sig.figma.com/img/c070/acca/b76e89a2e96b9161b8a27aa9d6698e89?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YeWFDtrQvY6P0XvQPJAIGoB-q7p-Hp~S1He837Ert~MrcjI6pKWEkyAVx7eNNXBn69QKATT5nrzchL4jAdB2vxqfbdKiHkVxGLr-17Rlf80e6nQodmh-Tu2enktm9g4b3cWA~eok1JecpvR6KjcTYX-1muI-g7~1IHLxqESuFEJTHAJmh~iHMi85ANDyhrsoXZue6Q6gZsTOvReljUhv~6FQGfajpBayR9anas7UIG0dxKdTIt5C6qOsfk8Zxcso2pcjtpPWHRA5o~xtkiirkbBFiVzlcrbHd-uSpI5xk8fWnVMcGwepKhUXEDB02EG1GwqVZwCfhLjtMNmvWBIAWA__"
                    alt=""
                    className="absolute xl:w-[320px] lg:w-[40%] md:w-[45%] w-[50%] xl:right-[280px] lg:right-[31%] md:right-[31%] right-[26%] top-[220px] max-sm:top-[80px]"
                />
                <motion.img
                    custom={2}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={imageVariants}
                    src="https://s3-alpha-sig.figma.com/img/c070/acca/b76e89a2e96b9161b8a27aa9d6698e89?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YeWFDtrQvY6P0XvQPJAIGoB-q7p-Hp~S1He837Ert~MrcjI6pKWEkyAVx7eNNXBn69QKATT5nrzchL4jAdB2vxqfbdKiHkVxGLr-17Rlf80e6nQodmh-Tu2enktm9g4b3cWA~eok1JecpvR6KjcTYX-1muI-g7~1IHLxqESuFEJTHAJmh~iHMi85ANDyhrsoXZue6Q6gZsTOvReljUhv~6FQGfajpBayR9anas7UIG0dxKdTIt5C6qOsfk8Zxcso2pcjtpPWHRA5o~xtkiirkbBFiVzlcrbHd-uSpI5xk8fWnVMcGwepKhUXEDB02EG1GwqVZwCfhLjtMNmvWBIAWA__"
                    alt=""
                    className="absolute xl:w-[320px] lg:w-[40%] md:w-[45%] w-[50%] xl:right-[480px] lg:right-[57%] md:right-[57%] right-[52%] top-[400px] max-sm:top-[160px]"
                />
            </div>
        </section>
    );
}
