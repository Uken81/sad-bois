import { Link } from 'react-router-dom';

export const SignupLink: React.FC = () => {
  return (
    <div className="text-center">
      <span className="text-sm">Dont have an account? </span>
      <Link className="link-hover text-sm text-blue-600" to="/register">
        Sign up
      </Link>
    </div>
  );
};
