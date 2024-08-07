import React, { FC } from 'react';
import InputBox from './InputBox';
import LabelHead from '../atoms/LabelHead/LabelHead';

type Props = {
  goal: string;
  setGoal: (goal: string) => void;
};

const GoalSelection: FC<Props> = ({ goal, setGoal }) => {
  return (
    <InputBox>
      <LabelHead>目的</LabelHead>
      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className='block w-full px-3 py-2 h-12 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-teal-500'
      >
        <option value='lose'>減量</option>
        <option value='maintain'>維持</option>
        <option value='gain'>増量</option>
      </select>
    </InputBox>
  );
};

export default GoalSelection;
