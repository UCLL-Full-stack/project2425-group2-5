import React, { useEffect, useState } from 'react';

const BrowserStorageExample: React.FC = () => {
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        const storedValue = localStorage.getItem('key');
        if (storedValue) setValue(storedValue);
    }, []);

    const saveValue = () => {
        localStorage.setItem('key', value);
    };

    return (
        <div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter value"
            />
            <button onClick={saveValue}>Save</button>
        </div>
    );
};

export default BrowserStorageExample;
