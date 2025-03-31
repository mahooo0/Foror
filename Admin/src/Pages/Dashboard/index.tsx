'use client';
import {
    Activity,
    CreditCard,
    DollarSign,
    Download,
    Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: 'Jan',
        total: 1200,
        sales: 900,
    },
    {
        name: 'Feb',
        total: 2100,
        sales: 1600,
    },
    {
        name: 'Mar',
        total: 1800,
        sales: 1400,
    },
    {
        name: 'Apr',
        total: 2400,
        sales: 1900,
    },
    {
        name: 'May',
        total: 2800,
        sales: 2100,
    },
    {
        name: 'Jun',
        total: 3200,
        sales: 2500,
    },
    {
        name: 'Jul',
        total: 3600,
        sales: 3000,
    },
];

export default function Dashboard() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                    </Button>
                </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Revenue
                                </CardTitle>
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    $45,231.89
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    +20.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Subscriptions
                                </CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+2,350</div>
                                <p className="text-xs text-muted-foreground">
                                    +180.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Sales
                                </CardTitle>
                                <CreditCard className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    +12,234
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    +19% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Active Now
                                </CardTitle>
                                <Activity className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+573</div>
                                <p className="text-xs text-muted-foreground">
                                    +201 since last hour
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <ChartContainer
                                    config={{
                                        total: {
                                            label: 'Total Revenue',
                                            color: 'hsl(var(--chart-1))',
                                        },
                                        sales: {
                                            label: 'Sales',
                                            color: 'hsl(var(--chart-2))',
                                        },
                                    }}
                                    className="aspect-[4/3]"
                                >
                                    <LineChart
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 10,
                                            left: 10,
                                            bottom: 0,
                                        }}
                                    >
                                        <XAxis
                                            dataKey="name"
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={10}
                                        />
                                        <YAxis
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={10}
                                            tickFormatter={(value) =>
                                                `$${value}`
                                            }
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="total"
                                            strokeWidth={2}
                                            activeDot={{
                                                r: 6,
                                                style: {
                                                    fill: 'var(--color-total)',
                                                    opacity: 0.8,
                                                },
                                            }}
                                            style={{
                                                stroke: 'var(--color-total)',
                                            }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="sales"
                                            strokeWidth={2}
                                            activeDot={{
                                                r: 6,
                                                style: {
                                                    fill: 'var(--color-sales)',
                                                    opacity: 0.8,
                                                },
                                            }}
                                            style={{
                                                stroke: 'var(--color-sales)',
                                            }}
                                        />
                                        <ChartTooltip
                                            content={<ChartTooltipContent />}
                                        />
                                    </LineChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Recent Sales</CardTitle>
                                <CardDescription>
                                    You made 265 sales this month.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-8">
                                    {[
                                        {
                                            name: 'Olivia Martin',
                                            email: 'olivia.martin@email.com',
                                            amount: '+$1,999.00',
                                        },
                                        {
                                            name: 'Jackson Lee',
                                            email: 'jackson.lee@email.com',
                                            amount: '+$39.00',
                                        },
                                        {
                                            name: 'Isabella Nguyen',
                                            email: 'isabella.nguyen@email.com',
                                            amount: '+$299.00',
                                        },
                                        {
                                            name: 'William Kim',
                                            email: 'will@email.com',
                                            amount: '+$99.00',
                                        },
                                        {
                                            name: 'Sofia Davis',
                                            email: 'sofia.davis@email.com',
                                            amount: '+$39.00',
                                        },
                                    ].map((sale, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                        >
                                            <div className="flex-1 space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {sale.name}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {sale.email}
                                                </p>
                                            </div>
                                            <div className="font-medium">
                                                {sale.amount}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Monthly Sales</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <ChartContainer
                                    config={{
                                        sales: {
                                            label: 'Sales',
                                            color: 'hsl(var(--chart-1))',
                                        },
                                    }}
                                    className="aspect-[4/3]"
                                >
                                    <BarChart
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 10,
                                            left: 10,
                                            bottom: 0,
                                        }}
                                    >
                                        <XAxis
                                            dataKey="name"
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={10}
                                        />
                                        <YAxis
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={10}
                                            tickFormatter={(value) =>
                                                `$${value}`
                                            }
                                        />
                                        <Bar
                                            dataKey="sales"
                                            fill="var(--color-sales)"
                                            radius={[4, 4, 0, 0]}
                                        />
                                        <ChartTooltip
                                            content={<ChartTooltipContent />}
                                        />
                                    </BarChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Performance</CardTitle>
                                <CardDescription>
                                    Monthly performance metrics
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[
                                        {
                                            label: 'Conversion Rate',
                                            value: '24.5%',
                                            change: '+2.5%',
                                        },
                                        {
                                            label: 'Average Order Value',
                                            value: '$45.82',
                                            change: '+12.3%',
                                        },
                                        {
                                            label: 'Customer Retention',
                                            value: '84.3%',
                                            change: '+1.2%',
                                        },
                                        {
                                            label: 'Sessions',
                                            value: '12,543',
                                            change: '+24.5%',
                                        },
                                    ].map((metric, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between"
                                        >
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {metric.label}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {metric.value}
                                                </p>
                                            </div>
                                            <div className="text-sm font-medium text-green-500">
                                                {metric.change}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="reports" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Reports</CardTitle>
                            <CardDescription>
                                View and download your reports
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                {
                                    name: 'Monthly Sales Report',
                                    date: 'March 2025',
                                    size: '2.4 MB',
                                },
                                {
                                    name: 'Quarterly Performance',
                                    date: 'Q1 2025',
                                    size: '4.2 MB',
                                },
                                {
                                    name: 'Annual Financial Summary',
                                    date: '2024',
                                    size: '8.1 MB',
                                },
                                {
                                    name: 'Customer Acquisition Report',
                                    date: 'March 2025',
                                    size: '1.8 MB',
                                },
                            ].map((report, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b pb-4"
                                >
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {report.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {report.date}
                                        </p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        <Download className="mr-2 h-4 w-4" />
                                        {report.size}
                                    </Button>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">
                                <Download className="mr-2 h-4 w-4" />
                                Download All Reports
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
