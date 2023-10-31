import React, { useState, useEffect, lazy, Suspense } from "react";
import LoadingComponent from "@components/app/LoadingComponent";

function Cycle({ components }) {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const CurrentComponent = components[currentComponentIndex];
  const Component = lazy(() => import(`../app/${CurrentComponent}.jsx`));

  const cycleToNextComponent = () => {
      setCurrentComponentIndex(
          (currentComponentIndex + 1) % components.length
      );
  };

  useEffect(() => {
      const timer = setInterval(cycleToNextComponent, 5000);
      return () => clearInterval(timer);
  }, [currentComponentIndex]);

  return (
      <Suspense fallback={<LoadingComponent />}>
          <Component />
      </Suspense>
  );
}

export default Cycle;
