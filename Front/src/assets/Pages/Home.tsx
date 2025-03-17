import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function Home() {
    return (
        <div>
            <Header />
            <h1 className="text-3xl font-bold underline ">Hello world!</h1>
        </div>
    );
}
