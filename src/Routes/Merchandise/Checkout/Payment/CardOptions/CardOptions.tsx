import AmexLogo from './Logos/Amex';
import DiscoveryLogo from './Logos/DiscoveryLogo';
import MasterCardLogo from './Logos/MasterCard';
import Visalogo from './Logos/Visa';

export const CardOptions: React.FC = () => {
  const logos = [MasterCardLogo, Visalogo, AmexLogo, DiscoveryLogo];
  return (
    <div className="my-2">
      <h3 className="text-h3">Credit Card</h3>
      <div className="mb-2 flex flex-row space-x-2">
        {logos.map((Logo) => (
          <div className="flex h-10 w-14 justify-center border p-1">
            <Logo />
          </div>
        ))}
      </div>
    </div>
  );
};
