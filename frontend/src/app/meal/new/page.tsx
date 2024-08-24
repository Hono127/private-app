'use client';
import PrimaryButton from '@/app/components/atoms/Button/PrimaryButton';
import Heading1 from '@/app/components/atoms/Heading/Heading1';
import Input from '@/app/components/atoms/Input/Input';
import LabelHead from '@/app/components/atoms/LabelHead/LabelHead';
import InputBox from '@/app/components/molecules/InputBox';
import Form from '@/app/components/organisms/Form';
import Wrapper from '@/app/components/templates/Wrapper';
import React, { useState } from 'react';

const NewMeals = () => {
  // 食事入力画面
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [carbs, setCarbs] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 食事のデータを送信するロジックを追加
  };
  return (
    <Wrapper>
      <Heading1>食事入力画面</Heading1>
      <Form onSubmit={handleSubmit}>
        <InputBox>
          <LabelHead>食事の名前</LabelHead>
          <Input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </InputBox>
        <InputBox>
          <LabelHead>カロリー</LabelHead>
          <Input
            type='number'
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <LabelHead>タンパク質</LabelHead>
          <Input
            type='number'
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <LabelHead>脂質</LabelHead>
          <Input type='number' value={fat} onChange={(e) => setFat(e.target.value)} />
        </InputBox>
        <InputBox>
          <LabelHead>炭水化物</LabelHead>
          <Input type='number' value={carbs} onChange={(e) => setCarbs(e.target.value)} />
        </InputBox>
        <PrimaryButton>保存</PrimaryButton>
      </Form>
    </Wrapper>
  );
};

export default NewMeals;
