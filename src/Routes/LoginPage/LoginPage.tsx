import { useNavigate, useParams } from 'react-router';
import { Formik } from 'formik';
import { CustomInput } from '../../Components/FormComponents/Inputs/CustomInput';
import { useState } from 'react';
import { ErrorMessage } from '../../Components/ErrorMessages/ErrorMessage';
import { UserForm } from './UserForm';
import { serverUrl } from '../../Server/serverUrl';
import { FormErrorType } from '../../Types/errorTypes';
import { UserType } from '../../Types/types';
import { useStore } from '../../Store/useStore';
import { loginValidationSchema } from '../../Schemas/formSchemas';

type LoginFormValues = {
  email: string;
  password: string;
};

export const LoginPage: React.FC = () => {
  const { registeredEmail } = useParams();
  const addUser = useStore((state) => state.userState.addUser);
  const [error, setError] = useState<FormErrorType | null>(null);
  const navigate = useNavigate();

  const initialValues = { email: registeredEmail || 'test@testmail.com', password: '12345' };

  const handleSubmit = async (values: LoginFormValues, setSubmitting: (isSubmitting: boolean) => void) => {
    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    };

    try {
      const response = await fetch(`${serverUrl}/auth/login`, requestOptions);
      if (!response.ok) {
        const data: FormErrorType = await response.json();
        setError({ type: data.type, message: data.message });
        setSubmitting(false);
        return;
      }

      const data = await response.json();

      const user: UserType = data.user;
      addUser(user);
      setSubmitting(false);
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        setSubmitting(false);
        setError({ type: 'network', message: error.message });
        return;
      }

      console.error('An unexpected error occurred:', error);
      setError({ type: 'network', message: 'Error connecting to server' });
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}>
        {(formik) => (
          <UserForm formik={formik}>
            <ErrorMessage display={error?.type === 'network'} variant="error" message={error?.message ?? null} setError={setError} />
            <CustomInput name="email" type="email" placeholder="Email" error={error?.type === 'email' ? error?.message : null} />
            <CustomInput name="password" type="password" placeholder="Password" error={error?.type === 'password' ? error.message : null} />
          </UserForm>
        )}
      </Formik>
    </>
  );
};
