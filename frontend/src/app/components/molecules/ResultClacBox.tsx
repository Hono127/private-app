import React, { PropsWithChildren } from 'react';

type Props = {
  units: string;
};

const ResultClacBox = ({ children, units }: PropsWithChildren<Props>) => {
  return (
    <div className='flex items-center gap-2'>
      <span className='flex items-center w-32 px-3 py-2 h-12 bg-gray-800 text-white border border-gray-600 rounded-md'>
        {children}
      </span>
      <span>{units}</span>
    </div>
  );
};

export default ResultClacBox;
