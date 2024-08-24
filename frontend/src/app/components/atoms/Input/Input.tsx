import React from 'react';

type Props = {
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({ type, value, onChange, placeholder }: Props) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='block w-full px-3 py-2 h-12 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-teal-500'
    />
  );
};

export default Input;
