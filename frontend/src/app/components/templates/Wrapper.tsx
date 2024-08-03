import React, { PropsWithChildren } from 'react';

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className='max-w-5xl pt-10 pb-0 px-6 w-full mx-auto flex flex-col gap-6'>
      {children}
    </div>
  );
};

export default Wrapper;
