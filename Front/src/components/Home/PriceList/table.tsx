import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

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
        <div className="container py-10  ">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {plans.map((plan, index) => (
                    <Card
                        key={index}
                        className="border border-gray-200 justify-between"
                    >
                        <CardHeader className="pb-0">
                            <h3 className="text-center text-sm font-medium">
                                {plan.name}
                            </h3>
                            <div className="mt-2 text-center">
                                <span className="text-4xl font-bold">
                                    ${plan.price}
                                </span>
                                <span className="text-sm text-gray-500">
                                    /mo
                                </span>
                            </div>
                            <p className="mt-1 text-center text-xs text-gray-500">
                                or ${plan.yearly} yearly
                            </p>
                        </CardHeader>
                        <CardContent className="pt-6 ">
                            <ul className="space-y-3 flex flex-col items-center">
                                {plan.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-start"
                                    >
                                        <Check className="mr-2 h-5 w-5 shrink-0 text-black" />
                                        <span className="text-sm">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-black text-white hover:bg-gray-800">
                                Get started
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
