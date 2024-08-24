import React, { PropsWithChildren } from 'react';

type Props = {
  disabled?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
};

const PrimaryButton = ({
  children,
  disabled,
  onClick,
  type,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className='px-4 py-2 min-h-12 bg-teal-500 text-white font-semibold rounded-md transition-all hover:bg-teal-400 disabled:bg-slate-500 disabled:cursor-not-allowed disabled:pointer-events-none'
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
