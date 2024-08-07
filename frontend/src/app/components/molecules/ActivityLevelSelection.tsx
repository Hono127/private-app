import React, { FC } from 'react';
import InputBox from './InputBox';
import LabelHead from '../atoms/LabelHead/LabelHead';

type Props = {
  activityLevel: string;
  setActivityLevel: (activityLevel: string) => void;
};

const ActivityLevelSelection: FC<Props> = ({ activityLevel, setActivityLevel }) => {
  return (
    <InputBox>
      <LabelHead>アクティブ度</LabelHead>
      <select
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
        className='block w-full px-3 py-2 h-12 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-teal-500'
      >
        <option value='lazy'>通勤や軽い家事程度</option>
        <option value='slightlyLazy'>軽い運動やスポーツを週1-3回行う</option>
        <option value='normal'>中程度の運動やスポーツを週3-5回行う</option>
        <option value='slightlyActive'>激しい運動やスポーツを週6-7回行う</option>
        <option value='active'>非常に激しい運動やスポーツを毎日行う</option>
      </select>
    </InputBox>
  );
};

export default ActivityLevelSelection;
