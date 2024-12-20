import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/apiService';

const DataComponent: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetchData('/api/data').then(setData).catch(console.error);
    }, []);

    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
};

export default DataComponent;