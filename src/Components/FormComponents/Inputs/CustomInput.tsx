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
  id?: string;
}

const ErrorText: React.FC<{ error: string | undefined; touched: boolean }> = ({
  error,
  touched
}) => {
  if (!error || !touched) {
    return null;
  }

  return <div className="mt-2 text-lg text-red-500">{error}</div>;
};

export const CustomInput: React.FC<CustomInputProps & { error?: string | undefined }> = ({
  error,
  children,
  ...props
}) => {
  //**Dont remove field from hook array as it needs to be in correct order! Field?.name prevents ts no unused var error in build**
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta] = useField(props);
  field?.name;

  const errorBorder = (meta.touched && meta.error) || error ? 'border-red-500' : null;
  return (
    <>
      <Field
        className={`input input-bordered w-full max-w-xs bg-black text-lg text-white ${errorBorder} mt-4 border-4`}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        inputMode={props.inputMode}
        as={props.as}>
        {children}
      </Field>
      <div className="w-full text-center">
        <ErrorText error={meta.error || error} touched={meta.touched} />
      </div>
    </>
  );
};
