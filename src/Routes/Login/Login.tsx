import { useNavigate, useOutletContext, useParams } from 'react-router';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { CustomInput } from '../../Components/Forms/Inputs/CustomInput';
import { SubmitButton } from '../../Components/Forms/SubmitButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { validateUser } from '../../Utils/validateUser';
import { UserContextType, UserType } from '../RouteWrappers/rootWrapper';
import { ErrorMessage, FormErrorType } from '../../Components/ErrorMessage';

interface LoginFormValues {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const { registeredEmail } = useParams();
  const { setUserDetails } = useOutletContext() as UserContextType;
  const [error, setError] = useState<FormErrorType | null>(null);
  // const [error, setError] = useState<FormErrorType | null>(null);
  const navigate = useNavigate();

  //Todo: Change these inital values to test user when about to publish.
  const initialValues = { email: registeredEmail || '', password: '12345' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(5, 'Must be at least 5 characters')
      .max(200, 'Must be 200 characters or less')
      .required('Required')
  });

  const handleSubmit = async (
    values: LoginFormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    };

    try {
      const response = await fetch('http://localhost:2001/auth/login', requestOptions);
      if (!response.ok) {
        const data: FormErrorType = await response.json();
        setError({ type: data.type, message: data.message });
        setSubmitting(false);

        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const user: UserType = data.user;
      setUserDetails({ email: user.email, username: user.username });

      setSubmitting(false);
      navigate('/');
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        setError({ type: 'network', message: 'Network error: Failed to connect' });
        setSubmitting(false);
        return;
      }

      if (error instanceof Error) {
        console.error('error: ', error);
        setSubmitting(false);
        return;
      }

      console.error('An unexpected error occurred:', error);
      setSubmitting(false);
    }
  };

  const isEmailError = error && error.type === 'email';
  const isPasswordError = error && error.type === 'password';
  const isNetworkError = (error && error.type === 'network') || false;

  const backgroundGradient = 'bg-gradient-to-b from-black to-gray-600';
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}>
        {(formik) => (
          <div className={`flex flex-col p-2 ${backgroundGradient} h-screen`}>
            <div className="flex items-center h-1/2">
              {/* <div className="bg-backgroundLogo bg-cover bg-no-repeat h-1/2 bg-center"> */}
              <img src="../public/Assets/logo1.png" className="mx-auto"></img>
            </div>
            {/* <div className="bg-backgroundLogo bg-cover bg-no-repeat h-1/2 bg-center" /> */}
            <div className="md:mx-64">
              <Form className="form-control h-fit ">
                <ErrorMessage
                  display={isNetworkError}
                  variant="danger"
                  message={error?.message ?? null}
                  setError={setError}
                />
                <h1 className="text-center">Login</h1>
                <div className="flex flex-col justify-center items-center ">
                  <CustomInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    error={isEmailError ? error?.message : undefined}
                  />
                  <CustomInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    error={isPasswordError ? error.message : undefined}
                  />
                  <div className="my-2">
                    <span className="text-sm">Dont have an account? </span>
                    <Link className="text-sm" to="/register">
                      Sign up
                    </Link>
                  </div>
                  <SubmitButton isSubmitting={formik.isSubmitting} />
                </div>
              </Form>
            </div>
            {/* <Button onClick={validateUser}>Validate</Button> */}
          </div>
        )}
      </Formik>
    </>
  );
};
