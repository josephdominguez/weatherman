import React, { useState, useEffect } from 'react';
import LoadingComponent from '@components/app/LoadingComponent';
import ErrorComponent from '@components/app/ErrorComponent';

function AppPageComponent({ fetchFunction, renderData, dependencies }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const data = await fetchFunction();
            setData(data);
            setError(null);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [dependencies]);

    if (loading) {
        return <LoadingComponent />;
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }

    return renderData(data);
}

export default AppPageComponent;
