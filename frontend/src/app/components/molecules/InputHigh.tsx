import React, { FC } from 'react';
import InputBox from '../molecules/InputBox';
import LabelHead from '../atoms/LabelHead/LabelHead';
import Input from '../atoms/Input/Input';

type Props = {
  height: string;
  setHeight: (height: string) => void;
};

const InputHigh: FC<Props> = ({ height, setHeight }) => {
  return (
    <InputBox>
      <LabelHead>身長(cm)</LabelHead>
      <Input
        type='number'
        placeholder='身長を入力'
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
    </InputBox>
  );
};

export default InputHigh;
