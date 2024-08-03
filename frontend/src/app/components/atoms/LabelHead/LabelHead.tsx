import React, { PropsWithChildren } from 'react';

const LabelHead = ({ children }: PropsWithChildren) => {
  return <label className='block text-sm font-medium'>{children}</label>;
};

export default LabelHead;
