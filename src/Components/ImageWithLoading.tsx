import { useState } from 'react';

export const ImageWithLoading: React.FC<{ src: string; style?: React.CSSProperties }> = ({
  src,
  style
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-full items-center justify-center">
      {isLoading && !isError ? <span className="loading loading-spinner loading-sm" /> : null}
      <img
        src={src}
        onLoad={handleImageLoaded}
        onError={handleImageError}
        style={{ display: isLoading ? 'none' : 'block', ...style }}
      />
      {isError ? <p>Error Loading Image</p> : null}
    </div>
  );
};
