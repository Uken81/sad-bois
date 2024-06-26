import { useNavigate } from 'react-router';
import { Formik } from 'formik';
import { CustomInput } from '../../Components/FormComponents/Inputs/CustomInput';
import { useState } from 'react';
import { ErrorMessage } from '../../Components/ErrorMessages/ErrorMessage';
import { UserForm } from './UserForm';
import { serverUrl } from '../../Server/serverUrl';
import { FormErrorType } from '../../Types/errorTypes';
import { registrationValidationSchema } from '../../Schemas/formSchemas';

type RegisterFormValues = {
  email: string;
  username: string;
  password: string;
  confirmedPassword: string;
};

export const Register: React.FC = () => {
  const [error, setError] = useState<FormErrorType | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (values: RegisterFormValues, setSubmitting: (isSubmitting: boolean) => void) => {
    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    };

    try {
      const response = await fetch(`${serverUrl}/auth/register`, requestOptions);

      if (!response.ok) {
        const data: FormErrorType = await response.json();
        if (data.type === 'existing_email') {
          const registeredEmail = values.email;
          navigate(`/login/${registeredEmail}`);
        }
        console.log('data', data);
        setError({ type: data.type, message: data.message });
        setSubmitting(false);
        return;
      }
      setSubmitting(false);
      navigate('/');
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        setError({ type: 'network', message: 'Network error' });
        setSubmitting(false);
        return;
      }

      if (error instanceof Error) {
        console.error(error);
        setError({ type: 'network', message: 'Error connecting to server' });
        setSubmitting(false);
        return;
      }

      console.error('An unexpected error occurred:', error);
      setError({ type: 'network', message: 'An unexpected error occurred' });
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', username: '', password: '', confirmedPassword: '' }}
      validationSchema={registrationValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}>
      {(formik) => (
        <UserForm formik={formik}>
          <ErrorMessage display={error?.type === 'network'} variant="error" message={error?.message ?? null} setError={setError} />
          <CustomInput name="email" type="email" placeholder="Email" error={error?.type === 'email' ? error.message : null} />
          <CustomInput name="username" type="text" placeholder="Username" error={null} />
          <CustomInput name="password" type="password" placeholder="Password" error={error?.type === 'password' ? error.message : null} />
          <CustomInput
            name="confirmedPassword"
            type="password"
            placeholder="Confirm Password"
            error={error?.type === 'password' ? error.message : null}
          />
        </UserForm>
      )}
    </Formik>
  );
};
