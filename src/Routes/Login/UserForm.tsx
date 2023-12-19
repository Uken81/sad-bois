import { Link } from 'react-router-dom';
import { SubmitButton } from '../../Components/Forms/SubmitButton';
import { Form, FormikProps } from 'formik';
import { ReactNode } from 'react';
import { capitaliseWords } from '../../Utils/capitaliseWords';

export const UserForm = <T,>({
  title,
  children,
  formik
}: {
  title: string;
  children: ReactNode;
  formik: FormikProps<T>;
}) => {
  const displayLink = title === 'login';
  const backgroundGradient = 'bg-gradient-to-b from-black to-gray-600';

  return (
    <div className={`flex h-screen flex-col ${backgroundGradient} items-center `}>
      <div className="flex h-1/2 w-screen items-center ">
        <img src="../public/Assets/logo1.png" className="mx-auto"></img>
      </div>
      <Form className="card bg-yellow-50 shadow-sm shadow-slate-200 md:w-96">
        <div className="card card-body items-center">
          <h1 className="text-center text-h1 font-h1">{capitaliseWords(title)}</h1>
          {children}
          {displayLink ? (
            <div className="text-center">
              <span className="text-sm">Dont have an account? </span>
              <Link className="link-hover text-sm text-blue-600" to="/register">
                Sign up
              </Link>
            </div>
          ) : null}
          <div className="my-2 ">
            <SubmitButton isSubmitting={formik.isSubmitting} />
          </div>
        </div>
      </Form>
    </div>
  );
};
