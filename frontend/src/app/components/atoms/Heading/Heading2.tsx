import React, { PropsWithChildren } from 'react';

const Heading2 = ({ children }: PropsWithChildren) => {
  return <h2 className='text-xl font-semibold'>{children}</h2>;
};

export default Heading2;
