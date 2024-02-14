import { ShareButton } from '../../../Components/Share/ShareButton';
import { ShareOptions } from '../../../Components/Share/ShareOptions';

export const Share: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="hidden md:block">
        <ShareButton />
      </div>
      <div className="md:hidden">
        <ShareOptions showOptions={true} />
      </div>
    </div>
  );
};
