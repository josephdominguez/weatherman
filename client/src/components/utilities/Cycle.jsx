import React, { useState, useEffect } from 'react';

function Cycle({components}) {
    const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
    const CurrentComponent = components[currentComponentIndex];

    const cycleToNextComponent = () => {
        setCurrentComponentIndex((currentComponentIndex + 1) % components.length);
    }

    useEffect(() => {
        const timer = setInterval(cycleToNextComponent, 5000);
        return () => clearInterval(timer);
    }, [currentComponentIndex]);

    return (
        <>
            <CurrentComponent />
        </>
    );
}

export default Cycle;
