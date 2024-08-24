'use client';

import React, { FC } from 'react';
import Wrapper from '../components/templates/Wrapper';
import Heading2 from '../components/atoms/Heading/Heading2';
import Heading1 from '../components/atoms/Heading/Heading1';
import LineCharts from '../components/organisms/LineCharts';
import ContentsBox from '../components/molecules/ContentsBox';

const Progress: FC = () => {
  const recentMeals = [
    { id: 1, name: '朝食', calories: 300 },
    { id: 2, name: '昼食', calories: 600 },
    { id: 3, name: '夕食', calories: 700 },
  ];

  return (
    <Wrapper>
      <Heading1>進捗報告画面</Heading1>
      {/* 体重グラフの表示 */}
      <ContentsBox>
        <Heading2>体重の推移</Heading2>
        <LineCharts />
      </ContentsBox>
      {/* 最近の食事一覧 */}
      <ContentsBox>
        <Heading2>最近の食事</Heading2>
        <ul className='mt-2 space-y-2'>
          {recentMeals.map((meal) => (
            <li key={meal.id} className='bg-gray-700 p-3 rounded-md'>
              <div className='text-white'>{meal.name}</div>
              <div className='text-gray-400'>カロリー: {meal.calories} kcal</div>
            </li>
          ))}
        </ul>
      </ContentsBox>
      {/* 目標達成状況 */}
      <ContentsBox>
        <Heading2>目標達成状況</Heading2>
        <div className='bg-gray-800 p-4 rounded-md mt-2'>
          <p className='text-white'>現在の体重: 69 kg</p>
          <p className='text-white'>目標体重: 65 kg</p>
          <p className='text-white'>残り期間: 30 日</p>
        </div>
      </ContentsBox>
    </Wrapper>
  );
};

export default Progress;
