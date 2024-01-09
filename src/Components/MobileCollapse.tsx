import { ReactNode, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

export const MobileCollapse: React.FC<{
  closedText: string;
  openText: string;
  subtitle?: string;
  children: ReactNode;
}> = ({ closedText, openText, subtitle, children }) => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <div className="collapse rounded-none bg-base-200" onClick={() => setIsClosed(!isClosed)}>
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <div className="flex flex-row ">
          {isClosed ? closedText : openText}
          <div className="ml-1 self-center">
            {isClosed ? <FaChevronDown size="1rem" /> : <FaChevronUp size="1rem" />}
          </div>
          <div className="ml-auto">{subtitle}</div>
        </div>
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};
