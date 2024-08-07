import React, { FC } from 'react';
import InputBox from '../molecules/InputBox';
import LabelHead from '../atoms/LabelHead/LabelHead';
import Input from '../atoms/Input/Input';

type Props = {
  age: string;
  setAge: (age: string) => void;
};

const InputAge: FC<Props> = ({ age, setAge }) => {
  return (
    <InputBox>
      <LabelHead>年齢</LabelHead>
      <Input
        type='number'
        placeholder='年齢を入力'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </InputBox>
  );
};

export default InputAge;
