import React, { PropsWithChildren } from 'react';

type Props = {
  disabled?: boolean;
  onClick?: () => void;
};

const PrimaryButton = ({ children, disabled, onClick }: PropsWithChildren<Props>) => {
  return (
    <button
      className='px-4 py-2 bg-teal-500 text-white font-semibold rounded-md transition-all hover:bg-teal-400'
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
