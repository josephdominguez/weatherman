import { useState, useEffect, lazy, Suspense } from 'react';

function Cycle({ components, componentProps=[], cycleSpeed, loadingComponent: LoadingComponent}) {
    const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
    const CurrentComponent = components[currentComponentIndex];
    const Component = lazy(() => import(`../app/${CurrentComponent}.jsx`));

    const cycleToNextComponent = () => {
        setCurrentComponentIndex((currentComponentIndex + 1) % components.length);
    };

    useEffect(() => {
        const timer = setInterval(cycleToNextComponent, cycleSpeed);
        return () => clearInterval(timer);
    }, [currentComponentIndex]);

    return (
        <Suspense fallback={LoadingComponent ? <LoadingComponent /> : null}>
            {componentProps ? <Component {...componentProps[0]} /> : <Component />}
        </Suspense>
    );
}

export default Cycle;
