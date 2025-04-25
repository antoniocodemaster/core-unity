import React from 'react';
import Text from '../typography/Text';

interface InputTextAreaProps {
  label: string;
  placeholder: string;
  register: any; // Adjust the type according to your form library
  error?: string;
}

const InputTextArea: React.FC<InputTextAreaProps> = ({
  label,
  placeholder,
  register,
  error,
}) => {
  return (
    <>
      <label className="block text-gray-700">{label}</label>
      <textarea
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        {...register}
      />
      {error && <Text style="error">{error}</Text>}
    </>
  );
};

export default InputTextArea;
