import React from 'react';

type Props = {
  type: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({ type, value, onChange, placeholder }: Props) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-teal-500'
    />
  );
};

export default Input;
