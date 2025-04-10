// `components/Loading.tsx`
'use client'

import React from 'react';
import * as motion from "motion/react-client";
const Loading: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f0f0f0',
                color:"black"
            }}
        >
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4 }}
            >
          Welcome..
            </motion.h1>
        </motion.div>
    );
};

export default Loading;