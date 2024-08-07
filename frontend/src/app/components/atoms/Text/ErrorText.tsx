import React, { PropsWithChildren } from 'react';

const ErrorText = ({ children }: PropsWithChildren) => {
  return <p className='text-red-500'>{children}</p>;
};

export default ErrorText;
