import { Field, useField } from 'formik';
import { ReactNode } from 'react';

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  as?: string;
  placeholder?: string;
  children?: ReactNode;
  // error?: string | null;
  id?: string;
}

export interface FormError {
  type: 'email' | 'password';
  message: string;
}

const ErrorText: React.FC<{ error?: string | undefined; touched: boolean }> = ({
  error,
  touched
}) => {
  if (!error || !touched) {
    return null;
  }

  return (
    <div className="error-text" style={{ color: 'red' }}>
      {error}
    </div>
  );
};

export const CustomInput: React.FC<CustomInputProps & { error?: string | undefined }> = ({
  label,
  error,
  children,
  ...props
}) => {
  //dont remove field from hook array as it needs to be in correct order!
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta] = useField(props);

  const errorClass = (meta.touched && meta.error) || error ? '-error' : '';

  return (
    <>
      <label className="input-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <Field
        className={`input${errorClass}`}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        as={props.as}>
        {children}
      </Field>
      <ErrorText error={meta.error || error} touched={meta.touched} />
    </>
  );
};
