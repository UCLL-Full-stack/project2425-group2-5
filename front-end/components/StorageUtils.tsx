import { useEffect } from 'react';

export const getStoredValue = (key: string) => {
    return localStorage.getItem(key);
};

export const setStoredValue = (key: string, value: string) => {
    localStorage.setItem(key, value);
};

// Usage in a component:
useEffect(() => {
    const theme = getStoredValue('theme');
    console.log('Stored theme:', theme);
}, []);
