import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Service() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500); // simulate loading
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col gap-[40px] py-[40px] lg:px-[100px] md:px-[60px] px-[12px]">
            {isLoading ? (
                <div className="h-[48px] bg-neutral-700 rounded w-[60%] mx-auto animate-pulse"></div>
            ) : (
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rb-5 mb-5 text-4xl text-center font-bold md:mb-6 md:text-5xl lg:text-6xl"
                >
                    heading
                </motion.h2>
            )}

            {isLoading ? (
                <div className="p-[36px] rounded-3xl shadow-2xl animate-pulse space-y-4">
                    <div className="h-4 w-[90%] bg-neutral-700 rounded"></div>
                    <div className="h-4 w-[95%] bg-neutral-700 rounded"></div>
                    <div className="h-4 w-[85%] bg-neutral-700 rounded"></div>
                    <div className="h-4 w-[80%] bg-neutral-700 rounded"></div>
                    <div className="h-4 w-[92%] bg-neutral-700 rounded"></div>
                    <div className="h-4 w-[70%] bg-neutral-700 rounded"></div>
                    <div className="h-4 w-[60%] bg-neutral-700 rounded"></div>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="p-[36px] text-[18px] rounded-3xl shadow-2xl"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce varius faucibus massa sollicitudin amet augue. Nibh
                    metus a semper purus mauris duis. Lorem eu neque, tristique
                    quis duis...
                    {/* rest of your long content */}
                </motion.div>
            )}
        </div>
    );
}
