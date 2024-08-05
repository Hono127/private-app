'use client'

import React, { ChangeEvent, useState } from 'react';
import Wrapper from './components/templates/Wrapper';
import Heading1 from './components/atoms/Heading/Heading1';
import InputBox from './components/molecules/InputBox';
import LabelHead from './components/atoms/LabelHead/LabelHead';
import Input from './components/atoms/Input/Input';
import ContentsBox from './components/molecules/ContentsBox';
import PrimaryButton from './components/atoms/Button/PrimaryButton';

const Home = () => {
  const [gender, setGender] = useState('male')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [age, setAge] = useState('')
  const [bmr, setBmr] = useState(0)
  const [activeLevel, setActiveLevel] = useState('low')
  const [goal, setGoal] = useState('reduce')
  // 基礎代謝計算
  const calcBmr = () => {
    // 男性：((0.1238+(0.0481×体重kg)+(0.0234×身長cm)-(0.0138×年齢)-0.5473))×1000/4.186
    // 女性：((0.1238+(0.0481×体重kg)+(0.0234×身長cm)-(0.0138×年齢)-0.5473×2))×1000/4.186
    const h = parseFloat(height)
    const w = parseFloat(weight)
    const a = parseFloat(age)
    let bmrValue;
    if (gender === 'male') {
      bmrValue = ((0.1238 + (0.0481 * w) + (0.0234 * h) - (0.0138 * a) - 0.5473)) * 1000 / 4.186
    } else {
      bmrValue = ((0.1238 + (0.0481 * w) + (0.0234 * h) - (0.0138 * a) - 0.5473 * 2)) * 1000 / 4.186
    }
    setBmr(Math.floor(bmrValue))
    return bmrValue
  }
  // ホーム画面
  return (
    <Wrapper>
      <Heading1>ホーム画面</Heading1>
      <ContentsBox>
        {/* 性別 */}
        <InputBox>
          <LabelHead>性別</LabelHead>
          <div className='flex items-center gap-3'>
            <div className='w-40'>
              <input
                type="radio"
                id='male'
                name='gender'
                className='hidden peer'
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              <label
                className='flex items-center justify-center p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300  peer-checked:bg-blue-400 peer-checked:border-transparent'
                htmlFor='male'>
                男性
              </label>
            </div>
            <div className='w-40'>
              <input
                type="radio"
                id='female'
                name='gender'
                className='hidden peer'
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              <label
                className='flex items-center justify-center p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300  peer-checked:bg-red-400 peer-checked:border-transparent'
                htmlFor='female'>
                女性
              </label>
            </div>
          </div>
        </InputBox>
        {/* 身長 */}
        <InputBox>
          <LabelHead>身長</LabelHead>
          <Input
            type='number'
            placeholder='身長を入力'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </InputBox>
        {/* 体重 */}
        <InputBox>
          <LabelHead>体重</LabelHead>
          <Input
            type='number'
            placeholder='体重を入力'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </InputBox>
        {/* 年齢 */}
        <InputBox>
          <LabelHead>年齢</LabelHead>
          <Input
            type='number'
            placeholder='年齢を入力'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </InputBox>
        {/* 計算する */}
        <PrimaryButton onClick={calcBmr}>計算する</PrimaryButton>
        {/* 基礎代謝量 */}
        <InputBox>
          <LabelHead>基礎代謝量</LabelHead>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1 w-fit px-3 py-2 h-12 bg-gray-800 text-white border border-gray-600 rounded-md text-lg font-bold'>
              {bmr}
            </div>
            <span>kcal</span>
          </div>
        </InputBox>
        {/* アクティブ度 */}
        <InputBox>
          <LabelHead>アクティブ度</LabelHead>
          <div className='flex flex-col gap-3'>
            <div className='w-full'>
              <input
                type="radio"
                id='low'
                name='level'
                className='hidden peer'
                checked={activeLevel === 'low'}
                onChange={() => setActiveLevel('low')}
              />
              <label
                className='flex justify-center flex-col gap-2 p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300  peer-checked:bg-green-600 peer-checked:border-transparent'
                htmlFor='low'>
                <span className='font-bold'>低い</span>
                <span className='text-gray-200 text-sm'>座り仕事が多く、1日の運動は歩いたり階段を上ったりする程度</span>
              </label>
            </div>
            <div className='w-full'>
              <input
                type="radio"
                id='normal'
                name='level'
                className='hidden peer'
                checked={activeLevel === 'normal'}
                onChange={() => setActiveLevel('normal')}
              />
              <label
                className='flex justify-center flex-col gap-2 p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300  peer-checked:bg-yellow-500 peer-checked:border-transparent'
                htmlFor='normal'>
                <span className='font-bold'>普通</span>
                <span className='text-gray-200 text-sm'>立ち仕事や重労働が多く、比較的一日中動き回っている</span>
              </label>
            </div>
            <div className='w-full'>
              <input
                type="radio"
                id='high'
                name='level'
                className='hidden peer'
                checked={activeLevel === 'high'}
                onChange={() => setActiveLevel('high')}
              />
              <label
                className='flex justify-center flex-col gap-2 p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300  peer-checked:bg-orange-600 peer-checked:border-transparent'
                htmlFor='high'>
                <span className='font-bold'>高い</span>
                <span className='text-gray-200 text-sm'>立ち仕事や重労働が多く、加えてジムでのトレーニングや運動をしている</span>
              </label>
            </div>
          </div>
        </InputBox>
        {/* 目的 */}
        <InputBox>
          <LabelHead>目的</LabelHead>
          <div className='flex flex-col gap-3'>
            <div className='w-40'>
              <input
                type="radio"
                id='reduce'
                name='goal'
                className='hidden peer'
                checked={goal === 'reduce'}
                onChange={() => setGoal('reduce')}
              />
              <label
                className='flex justify-center gap-2 p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300  peer-checked:bg-green-600 peer-checked:border-transparent'
                htmlFor='reduce'>
                <span className='font-bold'>減量</span>
              </label>
            </div>
            <div className='w-40'>
              <input
                type="radio"
                id='maintain'
                name='goal'
                className='hidden peer'
                checked={goal === 'maintain'}
                onChange={() => setGoal('maintain')}
              />
              <label
                className='flex justify-center gap-2 p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300  peer-checked:bg-yellow-500 peer-checked:border-transparent'
                htmlFor='maintain'>
                <span className='font-bold'>維持</span>
              </label>
            </div>
            <div className='w-40'>
              <input
                type="radio"
                id='increase'
                name='goal'
                className='hidden peer'
                checked={goal === 'increase'}
                onChange={() => setGoal('increase')}
              />
              <label
                className='flex justify-center gap-2 p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300  peer-checked:bg-orange-600 peer-checked:border-transparent'
                htmlFor='increase'>
                <span className='font-bold'>増量</span>
              </label>
            </div>
          </div>
        </InputBox>
      </ContentsBox>

    </Wrapper>
  );
};

export default Home;
