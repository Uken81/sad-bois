import { useEffect } from 'react';

export const Test: React.FC = () => {
  useEffect(() => {
    console.log('AddToCart mounted');

    return () => {
      console.log('AddToCart unmounted');
    };
  }, []);
  return <h1>TEST</h1>;
};
