import { useState, useEffect, useRef } from 'react';

const DataItem = ({ count, description, isLast }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const dataItemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const targetCount = parseInt(count.replace(/[^\d]/g, ''), 10); // Extract digits from count string
          const step = Math.ceil(targetCount / 150); // Determine step size for incrementing

          const timer = setInterval(() => {
            setCurrentCount((prevCount) => {
              const nextCount = prevCount + step;
              return nextCount >= targetCount ? targetCount : nextCount; // Stop when reaching the target count
            });
          }, 10); // Adjust the duration as needed

          return () => clearInterval(timer); // Cleanup the interval when the component unmounts
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is in view
    );

    if (dataItemRef.current) {
      observer.observe(dataItemRef.current);
    }

    return () => {
      if (dataItemRef.current) {
        observer.unobserve(dataItemRef.current);
      }
    };
  }, [count]);

  return (
    <div ref={dataItemRef}>
      <p className="data-numbers-count">
        {currentCount.toLocaleString()}
        {isLast && '+'}
      </p> {/* Display count with comma separators */}
      <p className="data-numbers-description">{description}</p>
    </div>
  );
};

export default DataItem;
