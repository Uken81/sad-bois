import { RiLoginCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Login: React.FC<{ icons?: boolean }> = ({ icons }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="text-accent">{icons ? <RiLoginCircleFill /> : null}</div>
      <li>
        <Link to={'/login'}>Login</Link>
      </li>
    </div>
  );
};
