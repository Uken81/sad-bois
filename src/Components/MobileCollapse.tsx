import { ReactNode, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

export const MobileCollapse: React.FC<{
  icon?: ReactNode;
  closedText?: string;
  openText?: string;
  subtitle?: string;
  children: ReactNode;
}> = ({ icon, closedText, openText, subtitle, children }) => {
  const [isClosed, setIsClosed] = useState(true);
  const buttonText = isClosed ? closedText : openText;

  return (
    <div className="collapse w-full rounded-none bg-base-200">
      <input type="checkbox" onClick={() => setIsClosed(!isClosed)} />
      <div className="collapse-title pr-4 text-xl font-medium">
        <div className="flex flex-row items-center justify-center">
          {icon ? icon : buttonText}
          <div className="ml-1">
            {isClosed ? <FaChevronDown size="1rem" /> : <FaChevronUp size="1rem" />}
          </div>
          {subtitle ? <div className="ml-auto mr-2">{subtitle}</div> : null}
        </div>
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};
