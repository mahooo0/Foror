import { motion } from 'framer-motion';
import CardDevMap from './Card';

export default function DevSection({
    variat = 'left',
}: {
    variat: 'left' | 'right';
}) {
    const variants = {
        left: {
            initial: { opacity: 0, x: 30, y: -50 },
            animate: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 1, ease: 'easeOut' },
            },
        },
        right: {
            initial: { opacity: 0, x: -30, y: -50 },
            animate: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 1, ease: 'easeOut' },
            },
        },
    };

    const containerStyles =
        variat === 'left' ? 'flex justify-end' : 'flex justify-start';

    const paddingStyles =
        variat === 'left'
            ? 'max-sm:px-[12px] px-[30px] xl:pt-[120px] pt-0'
            : 'lg:px-[100px] md:px-[60px] px-[12px]';

    return (
        <section
            data-scroll-section
            data-scroll
            data-scroll-speed="0.01"
            className={`!z-40 ${containerStyles} h-fit items-center min-h-[330px] opacity-100 w-full ${paddingStyles}`}
        >
            <motion.div
                initial={variants[variat].initial}
                whileInView={variants[variat].animate}
                viewport={{ once: true, amount: 0.3 }}
            >
                <CardDevMap />
            </motion.div>
        </section>
    );
}
