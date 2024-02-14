import { useLocation } from 'react-router-dom';
import { SubmitButton } from '../../Components/Forms/SubmitButton';
import { Form, FormikProps } from 'formik';
import { ReactNode } from 'react';
import { capitaliseWords } from '../../Utils/capitaliseWords';
import { SignupLink } from './SignupLink';

export const UserForm = <T,>({
  children,
  formik
}: {
  children: ReactNode;
  formik: FormikProps<T>;
}) => {
  const location = useLocation();
  const isLoginPage = /\/login(\/.*)?$/.test(location.pathname);
  const title = isLoginPage ? 'Login' : 'Sign Up';

  const backgroundGradient = 'bg-gradient-to-b from-black to-gray-600';

  return (
    <div className={`flex flex-col ${backgroundGradient} h-screen items-center justify-center`}>
      <Form className="card my-5 bg-primary shadow-sm shadow-slate-200 md:w-96">
        <div className="card card-body items-center">
          <h1 className="text-center text-h1 font-h1 text-white">{capitaliseWords(title)}</h1>
          {children}
          {isLoginPage ? <SignupLink /> : null}
          <div className="my-2">
            <SubmitButton isSubmitting={formik.isSubmitting} />
          </div>
        </div>
      </Form>
    </div>
  );
};
