import React, { FC } from 'react';
import InputBox from '../molecules/InputBox';
import LabelHead from '../atoms/LabelHead/LabelHead';
import Input from '../atoms/Input/Input';

type Props = {
  weight: string;
  setWeight: (weight: string) => void;
};

const InputWeight: FC<Props> = ({ weight, setWeight }) => {
  return (
    <InputBox>
      <LabelHead>体重(kg)</LabelHead>
      <Input
        type='number'
        placeholder='体重を入力'
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
    </InputBox>
  );
};

export default InputWeight;
