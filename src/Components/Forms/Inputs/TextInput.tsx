import { useField } from 'formik';

interface ICustomFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  id?: string;
}

const ErrorText: React.FC<{ error: string | undefined; touched: boolean }> = ({
  error,
  touched
}) => {
  if (!error || !touched) {
    return null;
  }

  return (
    <div className="error" style={{ color: 'red' }}>
      {error}
    </div>
  );
};

export const TextInput: React.FC<ICustomFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const errorClass = meta.touched && meta.error ? '-error' : '';

  return (
    <>
      <label className="input-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className={`text-input${errorClass}`}
        {...field}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
      <ErrorText error={meta.error} touched={meta.touched} />
    </>
  );
};
