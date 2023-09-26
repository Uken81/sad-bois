import { useNavigate } from 'react-router';

import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { TextInput } from '../../Components/Forms/Inputs/TextInput';
import { SubmitButton } from '../../Components/Forms/SubmitButton';
import './Login.scss';
import { Link } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(5, 'Must be at least 5 characters')
      .max(200, 'Must be 200 characters or less')
      .required('Required')
  });

  const handleSubmit = (
    values: LoginFormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    console.log('values', values);
    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:2001/auth/login', requestOptions)
      .then((response) => {
        if (!response.ok) {
          console.log('res1: ', response);
          //shouldnt below break flow??
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
    <>
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
              <TextInput name="password" type="password" label="Password" />
              <SubmitButton isSubmitting={formik.isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
      <Link to="/register">Register</Link>
    </>
  );
};
