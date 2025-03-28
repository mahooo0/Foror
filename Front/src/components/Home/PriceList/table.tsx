'use client'; // if using Next.js App Router

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { BlackBtn } from '@/components/Buttons';
import { StoreState, useStore } from '@/helpers/StateManegment';
import { scrollToId } from '@/helpers/Scroll/ScrollTo';

interface PricingPlan {
    name: string;
    price: number;
    yearly: number;
    features: string[];
}

export default function PricingTable() {
    const plans: PricingPlan[] = [
        {
            name: 'Basic plan',
            price: 19,
            yearly: 199,
            features: [
                'Feature text goes here',
                'Feature text goes here',
                'Feature text goes here',
            ],
        },
        {
            name: 'Business plan',
            price: 29,
            yearly: 299,
            features: [
                'Feature text goes here',
                'Feature text goes here',
                'Feature text goes here',
                'Feature text goes here',
            ],
        },
        {
            name: 'Business plan',
            price: 29,
            yearly: 299,
            features: [
                'Feature text goes here',
                'Feature text goes here',
                'Feature text goes here',
                'Feature text goes here',
            ],
        },
        {
            name: 'Enterprise plan',
            price: 49,
            yearly: 499,
            features: [
                'Feature text goes here',
                'Feature text goes here',
                'Feature text goes here',
                'Feature text goes here',
                'Feature text goes here',
            ],
        },
    ];

    return (
        <div className="container py-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {plans.map((plan, index) => (
                    <AnimatedCard key={index} index={index} plan={plan} />
                ))}
            </div>
        </div>
    );
}

// 👇 Animate each card with fade-up effect
const AnimatedCard = ({
    plan,
    index,
}: {
    plan: PricingPlan;
    index: number;
}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const setSelectedPriceVariant = useStore(
        (state: StoreState) => state.setSelectedPriceVariant
    );

    const isGradient = index === 2; // Only first 3 cards get gradient border

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div
                className={
                    isGradient
                        ? 'bg-gradient-to-br from-[#E6D535] to-[#E53535] p-[2px] rounded-2xl h-full'
                        : ' h-full'
                }
            >
                <Card className="border border-gray-200 justify-between h-full flex flex-col rounded-2xl">
                    <CardHeader className="pb-0">
                        <h3 className="text-center text-sm font-medium">
                            {plan.name}
                        </h3>
                        <div className="mt-2 text-center">
                            <span className="text-4xl font-bold">
                                ${plan.price}
                            </span>
                            <span className="text-sm text-gray-500">/mo</span>
                        </div>
                        <p className="mt-1 text-center text-xs text-gray-500">
                            or ${plan.yearly} yearly
                        </p>
                    </CardHeader>
                    <CardContent className="pt-6 flex-1">
                        <ul className="space-y-3 flex flex-col items-center">
                            {plan.features.map((feature, featureIndex) => (
                                <li
                                    key={featureIndex}
                                    className="flex items-start"
                                >
                                    <Check className="mr-2 h-5 w-5 shrink-0 text-black" />
                                    <span className="text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <BlackBtn
                            action={() => {
                                setSelectedPriceVariant(index + 1);
                                scrollToId('contact');
                            }}
                            text=" Get started"
                            className="w-full"
                        />
                    </CardFooter>
                </Card>
            </div>
        </motion.div>
    );
};
