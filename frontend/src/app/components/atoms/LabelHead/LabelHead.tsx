import React, { PropsWithChildren } from 'react';

const LabelHead = ({ children }: PropsWithChildren) => {
  return <label className='block text-md font-bold'>{children}</label>;
};

export default LabelHead;
