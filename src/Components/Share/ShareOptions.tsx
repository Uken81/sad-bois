import { IoIosMailOpen } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';

export const ShareOptions: React.FC<{ showOptions: boolean; url: string }> = ({
  showOptions,
  url
}) => {
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
    <div>
      <IoIosMailOpen onClick={shareViaEmail} style={{ cursor: 'pointer' }} />
      <FaFacebook onClick={shareOnFacebook} style={{ cursor: 'pointer' }} />
    </div>
  ) : null;
};
