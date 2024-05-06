import { useStore } from '../../../../Stores/useStore';
import { ChangeDetails } from './ChangeDetails';

export const AddressDetails: React.FC = () => {
  const customer = useStore((state) => state.customerState.customer);
  const { address, suburb, state, postcode } = customer ?? {};
  const combinedAddress = `${address}, ${suburb}, ${state}, ${postcode}`;

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <p className="font-bold">Ship To</p>
        <p>{combinedAddress}</p>
      </div>
      <div className="ml-auto text-accent">
        <ChangeDetails />
      </div>
    </div>
  );
};
