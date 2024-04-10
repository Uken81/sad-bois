import { useBoundStore } from '../../../../Stores/boundStore';
import { ChangeDetails } from './ChangeDetails';

export const ContactDetails: React.FC = () => {
  const email = useBoundStore((state) => state.customer?.email);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <p className="font-bold">Contact</p>
        <p>{email}</p>
      </div>
      <div className="ml-auto text-accent">
        <ChangeDetails />
      </div>
    </div>
  );
};
