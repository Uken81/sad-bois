import { useNavigate } from 'react-router';

import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { TextInput } from '../../Components/Forms/Inputs/TextInput';
import { SubmitButton } from '../../Components/Forms/SubmitButton';
import './Login.scss';

interface FormValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const initialValues = { email: '', username: '', password: '', confirmPassword: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    username: Yup.string()
      .min(2, 'Must be 2 characters or more')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    password: Yup.string()
      .min(5, 'Must be at least 5 characters')
      .max(200, 'Must be 200 characters or less')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .max(200, 'Must be 200 characters or less')
      .required('Required')
  });

  const handleSubmit = (values: FormValues, setSubmitting: (isSubmitting: boolean) => void) => {
    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:2001/auth/register', requestOptions)
      .then((response) => {
        if (!response.ok) {
          console.log('res1: ', response);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('data: ', data);
        setSubmitting(false);
        navigate('/');
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}>
      {(formik) => (
        <Form>
          <div className="input-fields">
            <TextInput name="email" type="email" label="Email" />
            <TextInput name="username" type="text" label="Username" />
            <TextInput name="password" type="password" label="Password" />
            <TextInput name="confirmPassword" type="password" label="Confirm Password" />
            <SubmitButton isSubmitting={formik.isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
};
