import React, { FC } from 'react';
import ContentsBox from '../molecules/ContentsBox';
import Heading2 from '../atoms/Heading/Heading2';
import InputBox from '../molecules/InputBox';
import ResultClacBox from '../molecules/ResultClacBox';
import LabelHead from '../atoms/LabelHead/LabelHead';

interface ResultDisplayProps {
  bmr: number;
  calories: number;
  macros: { protein: number; fat: number; carbs: number };
}

const ResultCalc: FC<ResultDisplayProps> = ({ bmr, calories, macros }) => {
  return (
    <ContentsBox>
      <Heading2>計算結果</Heading2>
      <div className='flex items-center gap-4 flex-wrap'>
        <InputBox>
          <LabelHead>基礎代謝 (BMR)</LabelHead>
          <ResultClacBox units='kcal/日'>{bmr.toFixed(1)}</ResultClacBox>
        </InputBox>
        <InputBox>
          <LabelHead>総摂取カロリー</LabelHead>
          <ResultClacBox units='kcal/日'>{calories.toFixed(1)}</ResultClacBox>
        </InputBox>
        <InputBox>
          <LabelHead>タンパク質</LabelHead>
          <ResultClacBox units='g/日'>{macros.protein.toFixed(1)}</ResultClacBox>
        </InputBox>
        <InputBox>
          <LabelHead>脂質</LabelHead>
          <ResultClacBox units='g/日'>{macros.fat.toFixed(1)}</ResultClacBox>
        </InputBox>
        <InputBox>
          <LabelHead>炭水化物</LabelHead>
          <ResultClacBox units='g/日'>{macros.carbs.toFixed(1)}</ResultClacBox>
        </InputBox>
      </div>
    </ContentsBox>
  );
};

export default ResultCalc;
