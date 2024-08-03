// src/app/goals/page.tsx
'use client';

import React, { useState } from 'react';
import Wrapper from '../components/templates/Wrapper';
import Heading1 from '../components/atoms/Heading/Heading1';
import PrimaryButton from '../components/atoms/Button/PrimaryButton';
import Input from '../components/atoms/Input/Input';
import LabelHead from '../components/atoms/LabelHead/LabelHead';
import InputBox from '../components/molecules/InputBox';
import Form from '../components/organisms/Form';

const Goals: React.FC = () => {
  const [currentWeight, setCurrentWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 目標データを送信するロジックを追加
  };

  return (
    <Wrapper>
      <Heading1>目標設定画面</Heading1>

      <Form onSubmit={handleSubmit}>
        <InputBox>
          <LabelHead>現在の体重</LabelHead>
          <Input
            type='number'
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <LabelHead>目標体重</LabelHead>
          <Input
            type='number'
            value={targetWeight}
            onChange={(e) => setTargetWeight(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <LabelHead>目標達成期間 (日)</LabelHead>
          <Input
            type='number'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </InputBox>
        <PrimaryButton>保存</PrimaryButton>
      </Form>

    </Wrapper>
  );
};

export default Goals;
