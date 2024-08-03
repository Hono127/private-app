import React, { PropsWithChildren } from 'react'

type Props = {
  onSubmit: (e: React.FormEvent) => void;
}

const Form = ({ onSubmit, children }: PropsWithChildren<Props>) => {
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-3'>{children}</form>
  )
}

export default Form