import React from 'react';
import Text from '../typography/Text';

interface InputTextProps {
  label?: string;
  type: 'text' | 'email' | 'select' | 'password' | 'textarea';
  options?: { label: string; value: string }[];
  placeholder: string;
  register: any;
  error?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  type,
  placeholder,
  register,
  error,
  name,
  options = [],
  onChange,
}) => {
  return (
    <div className="mb-2">
      {label && <label className="block text-gray-700">{label}</label>}
      {type === 'email' ? (
        <input
          type="email"
          placeholder={placeholder}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          {...register(name)}
          {...(onChange ? { onChange } : {})}
        />
      ) : type === 'select' ? (
        <select
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          {...register(name)}
          {...(onChange ? { onChange } : {})}
        >
          <option value="">Selecciona una opción</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          rows={4}
          {...register(name)}
          {...(onChange ? { onChange } : {})}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          {...register(name)}
          {...(onChange ? { onChange } : {})}
        />
      )}
      {error && <Text style="error">{error}</Text>}
    </div>
  );
};

export default InputText;
