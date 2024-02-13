import AmexLogo from './Logos/Amex';
import DiscoveryLogo from './Logos/DiscoveryLogo';
import MasterCardLogo from './Logos/MasterCard';
import VisaLogo from './Logos/Visa';

export const CardOptions: React.FC = () => {
  const logos = [MasterCardLogo, VisaLogo, AmexLogo, DiscoveryLogo];

  return (
    <div className="my-2 text-center">
      <h3 className="text-h3 font-h3">Credit Card</h3>
      <div className="my-2 flex flex-row justify-center space-x-2">
        {logos.map((Logo, index) => (
          <div key={index} className="flex h-7 w-14 justify-center border bg-white p-1">
            <Logo />
          </div>
        ))}
      </div>
    </div>
  );
};
