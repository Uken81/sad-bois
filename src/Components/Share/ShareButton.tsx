import { useState } from 'react';
import { HiOutlineShare } from 'react-icons/hi2';
import { ShareOptions } from './ShareOptions';
import { Location } from 'react-router';

export const ShareButton: React.FC<{ location: Location }> = ({ location }) => {
  const [showOptions, setShowOptions] = useState(false);

  const baseUrl = window.location.origin;
  const url = `${baseUrl}${location.pathname}`;

  return (
    <div>
      <HiOutlineShare onClick={() => setShowOptions(!showOptions)} />
      <ShareOptions showOptions={showOptions} url={url} />
    </div>
  );
};
