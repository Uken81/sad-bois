import { Link, useLocation } from 'react-router-dom';
import { SubmitButton } from '../../Components/Forms/SubmitButton';
import { Form, FormikProps } from 'formik';
import { ReactNode } from 'react';
import { capitaliseWords } from '../../Utils/capitaliseWords';

export const UserForm = <T,>({
  children,
  formik
}: {
  children: ReactNode;
  formik: FormikProps<T>;
}) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const title = isLoginPage ? 'Login' : 'Sign Up';

  const backgroundGradient = 'bg-gradient-to-b from-black to-gray-600';

  return (
    <div className={`flex flex-col ${backgroundGradient} items-center`}>
      <div>
        <img src="../public/Assets/logo1.png" className="mx-auto my-5"></img>
      </div>
      <Form className="card my-5 bg-accent shadow-sm shadow-slate-200 md:w-96">
        <div className="card card-body items-center">
          <h1 className="text-center text-h1 font-h1">{capitaliseWords(title)}</h1>
          {children}
          {isLoginPage ? (
            <div className="text-center">
              <span className="text-sm">Dont have an account? </span>
              <Link className="link-hover text-sm text-blue-600" to="/register">
                Sign up
              </Link>
            </div>
          ) : null}
          <div className="my-2">
            <SubmitButton isSubmitting={formik.isSubmitting} />
          </div>
        </div>
      </Form>
    </div>
  );
};
