import { useField } from 'formik';
import { FC } from 'react';

interface ICustomFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  id?: string;
}
export const TextInput: FC<ICustomFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="input-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className="text-input"
        {...field}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? (
        <div className="error" style={{ color: 'red' }}>
          {meta.error}
        </div>
      ) : null}
    </>
  );
};
