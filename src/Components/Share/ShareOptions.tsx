import { IoIosMailOpen } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { useLocation } from 'react-router';

export const ShareOptions: React.FC<{ showOptions: boolean }> = ({ showOptions }) => {
  const location = useLocation();

  const baseUrl = window.location.origin;
  const url = `${baseUrl}${location.pathname}`;

  const shareViaEmail = () => {
    const body = url;
    const mailtoLink = `mailto:?body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  const shareOnFacebook = () => {
    const formattedUrl = url.startsWith('http') ? url : `http://${url}`;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      formattedUrl
    )}`;
    window.open(facebookShareUrl, '_blank');
  };

  return showOptions ? (
    <div className="flex flex-row gap-4">
      <IoIosMailOpen
        color={'grey'}
        size={'1.5rem'}
        onClick={shareViaEmail}
        style={{ cursor: 'pointer' }}
      />
      <FaFacebook
        color={'grey'}
        size={'1.5rem'}
        onClick={shareOnFacebook}
        style={{ cursor: 'pointer' }}
      />
    </div>
  ) : null;
};
