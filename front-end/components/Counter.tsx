import React, { useState } from 'react';

export const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
