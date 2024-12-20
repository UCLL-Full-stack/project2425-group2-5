import React from 'react';
import { Child } from './Child';

export const Parent: React.FC = () => {
    const handleNotification = (message: string) => {
        alert(`Parent received: ${message}`);
    };

    return <Child onNotify={handleNotification} />;
};
