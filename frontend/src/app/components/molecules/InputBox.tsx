import React, { PropsWithChildren } from 'react';

const InputBox = ({ children }: PropsWithChildren) => {
  return <div className='flex flex-col gap-2'>{children}</div>;
};

export default InputBox;
