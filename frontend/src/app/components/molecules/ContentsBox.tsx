import React, { PropsWithChildren } from 'react';

const ContentsBox = ({ children }: PropsWithChildren) => {
  return <div className='flex flex-col gap-3'>{children}</div>;
};

export default ContentsBox;
