import { Dispatch, SetStateAction, useEffect } from 'react';

export const TransitionButtons: React.FC<{
  arrLength: number;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}> = ({ arrLength, activeIndex, setActiveIndex }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % (arrLength || 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, arrLength, setActiveIndex]);

  return (
    <div className="flex justify-center">
      <p
        className="btn btn-circle mr-2 bg-black text-primary"
        onClick={() => setActiveIndex((current) => Math.max(current - 1, 0))}>
        ❮
      </p>
      <p
        className="btn btn-circle bg-black text-primary"
        onClick={() => setActiveIndex((current) => Math.max(current + 1, 1) % (arrLength || 1))}>
        ❯
      </p>
    </div>
  );
};
