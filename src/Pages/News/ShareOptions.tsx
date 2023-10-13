import { IoIosMailOpen } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa6';

export const Share: React.FC<{ showOptions: boolean; link: string }> = ({ showOptions, link }) => {
  const shareViaEmail = () => {
    const body = link;
    const mailtoLink = `mailto:?body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return showOptions ? (
    <div>
      <IoIosMailOpen onClick={shareViaEmail} />
      <FaFacebook />
    </div>
  ) : null;
};
