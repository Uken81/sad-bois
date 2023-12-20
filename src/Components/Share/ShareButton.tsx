import { useState } from 'react';
import { HiOutlineShare } from 'react-icons/hi2';
import { ShareOptions } from './ShareOptions';

export const ShareButton: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex flex-row gap-4">
      <div className="hover:cursor-pointer">
        <HiOutlineShare
          color={'gray'}
          size={'1.5rem'}
          onClick={() => setShowOptions(!showOptions)}
        />
      </div>
      <ShareOptions showOptions={showOptions} />
    </div>
  );
};
