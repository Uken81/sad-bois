import { Link } from 'react-router-dom';

export const HomeLink: React.FC<{ textSize?: string }> = ({ textSize }) => {
  const selectedTextSize = textSize ?? '2xl';
  return (
    <Link to="/" className={`btn btn-ghost text-${selectedTextSize} text-primary`}>
      The Sad Bois
    </Link>
  );
};
