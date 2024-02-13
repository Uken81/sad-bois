import { ChangeDetails } from './ChangeDetails';

export const AddressDetails: React.FC<{ address: string }> = ({ address }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <p className="font-bold">Ship To</p>
        <p>{address}</p>
      </div>
      <div className="ml-auto text-accent">
        <ChangeDetails />
      </div>
    </div>
  );
};
