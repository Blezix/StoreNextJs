'use client';

import React, { useState, useEffect } from 'react';
import Loading from '@/app/_components/Loading';

const LoadingWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulate a 2-second loading time

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return <>{children}</>;
};

export default LoadingWrapper;