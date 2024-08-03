import React, { PropsWithChildren } from 'react';

const Heading1 = ({ children }: PropsWithChildren) => {
  return <h1 className='text-2xl font-bold'>{children}</h1>;
};

export default Heading1;
