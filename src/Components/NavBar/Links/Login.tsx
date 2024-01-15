import { RiLoginCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Login: React.FC<{ icons?: boolean }> = ({ icons }) => {
  return (
    <div className="flex flex-row items-center">
      <div>{icons ? <RiLoginCircleFill /> : null}</div>
      <li className="font-bold text-primary">
        <Link to={'/login'}>Login</Link>
      </li>
    </div>
  );
};
