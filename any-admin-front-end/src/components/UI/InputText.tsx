import React from 'react';
import Text from '../typography/Text';

interface InputTextProps {
  label?: string;
  type: string;
  placeholder: string;
  register: any;
  error?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  type,
  placeholder,
  register,
  error,
  name,
  onChange,
}) => {
  return (
    <>
      {label && <label className="block text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        {...register(name)}
        onChange={onChange}
      />
      {error && <Text style="error">{error}</Text>}
    </>
  );
};

export default InputText;
