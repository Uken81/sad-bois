import { useState } from 'react';
import { HiOutlineShare } from 'react-icons/hi2';
import { ShareOptions } from './ShareOptions';
import { useLocation } from 'react-router';

export const ShareButton: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);
  const location = useLocation();

  const baseUrl = window.location.origin;
  const url = `${baseUrl}${location.pathname}`;

  return (
    <div>
      <HiOutlineShare onClick={() => setShowOptions(!showOptions)} />
      <ShareOptions showOptions={showOptions} url={url} />
    </div>
  );
};
