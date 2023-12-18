import { Field, useField } from 'formik';
import { ReactNode } from 'react';

type InputMode = 'email' | 'search' | 'tel' | 'text' | 'url' | 'none' | 'numeric' | 'decimal';

interface CustomInputProps {
  name: string;
  type?: string;
  as?: string;
  placeholder?: string;
  inputMode?: InputMode;
  children?: ReactNode;
  // error?: string | null;
  id?: string;
}

const ErrorText: React.FC<{ error: string | undefined; touched: boolean }> = ({
  error,
  touched
}) => {
  if (!error || !touched) {
    return null;
  }

  return <div className="text-lg text-red-500 mt-2">{error}</div>;
};

export const CustomInput: React.FC<CustomInputProps & { error?: string | undefined }> = ({
  error,
  children,
  ...props
}) => {
  //**Dont remove field from hook array as it needs to be in correct order!**
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta] = useField(props);

  const errorBorder = (meta.touched && meta.error) || error ? 'border-red-500' : null;
  return (
    <>
      <Field
        className={`input input-bordered w-full max-w-xs text-lg bg-black text-white ${errorBorder} border-4 mt-4`}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        inputMode={props.inputMode}
        as={props.as}>
        {children}
      </Field>
      <ErrorText error={meta.error || error} touched={meta.touched} />
    </>
  );
};
