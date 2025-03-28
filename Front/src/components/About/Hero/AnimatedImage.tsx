import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedImage = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust as needed to define "center"
    });

    return (
        <motion.div
            ref={ref}
            initial={{ width: '0%', x: '0%' }}
            animate={inView ? { width: '100%', x: '0%' } : {}}
            transition={{
                duration: 1.5,
                ease: 'easeInOut',
            }}
            className="overflow-hidden relative bg-[#222222] rounded-2xl"
        >
            <motion.img
                initial={{ y: '100%', opacity: 0 }}
                animate={inView ? { y: '0%', opacity: 1 } : {}}
                transition={{
                    duration: 2,
                    ease: 'easeOut',
                    delay: 0.2,
                }}
                className="w-full absolute bottom-0"
                src="https://s3-alpha-sig.figma.com/img/76a1/84e0/c741a00ce1097c7e04f7a4d0544708f4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sE50w~c1EzaYsQWiwVmVa87lEz4o3pyK0FC97MSr0P-aR5c5x~EnIWnrf21~eujZu~lX9MBlpJB3vV2y3-BB9SJyKUaX84l40dBUDVMJYac1TPG6w7hMCJViCME6HMv-C9CJmuDfNLpa2vf1FFKqvw-tBacBzGpgi5NvAmxQ4Oey5UFuwXN8UdjF9XAiLl1PZGby1MVuW32vBC-hCStLacO1eQnXeoz3voRnGFQ152ofbyLupimtWknriC~GrlonGkV5TUdPuDlylHdFhXlzyw45fvZERgI5h8XqH50tkp5k9trC1dpgn3AQ~NOpe199Q5SGWNboc~wK8foZOfD-4w__"
                alt=""
            />
            <img
                className="w-full  opacity-0"
                src="https://s3-alpha-sig.figma.com/img/76a1/84e0/c741a00ce1097c7e04f7a4d0544708f4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sE50w~c1EzaYsQWiwVmVa87lEz4o3pyK0FC97MSr0P-aR5c5x~EnIWnrf21~eujZu~lX9MBlpJB3vV2y3-BB9SJyKUaX84l40dBUDVMJYac1TPG6w7hMCJViCME6HMv-C9CJmuDfNLpa2vf1FFKqvw-tBacBzGpgi5NvAmxQ4Oey5UFuwXN8UdjF9XAiLl1PZGby1MVuW32vBC-hCStLacO1eQnXeoz3voRnGFQ152ofbyLupimtWknriC~GrlonGkV5TUdPuDlylHdFhXlzyw45fvZERgI5h8XqH50tkp5k9trC1dpgn3AQ~NOpe199Q5SGWNboc~wK8foZOfD-4w__"
                alt=""
            />
        </motion.div>
    );
};

export default AnimatedImage;
