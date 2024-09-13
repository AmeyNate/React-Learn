import React, { useEffect, useState } from 'react';

const useWindowWidth = (): number => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

const WindowWidthComponent: React.FC = () => {
  const width = useWindowWidth();

  return (
    <div className="p-4 m-4 border rounded shadow-md bg-white">
      <p className="text-lg">Window Width: {width}px</p>
    </div>
  );
};

export default WindowWidthComponent;
