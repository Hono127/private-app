'use client';

import React, { useEffect, useState } from 'react';
import Wrapper from './components/templates/Wrapper';
import Heading1 from './components/atoms/Heading/Heading1';
import InputBox from './components/molecules/InputBox';
import LabelHead from './components/atoms/LabelHead/LabelHead';
import Input from './components/atoms/Input/Input';
import ContentsBox from './components/molecules/ContentsBox';
import PrimaryButton from './components/atoms/Button/PrimaryButton';
import Heading2 from './components/atoms/Heading/Heading2';
import ResultClacBox from './components/molecules/ResultClacBox';

const Home = () => {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('lazy');
  const [bmr, setBmr] = useState(0);
  const [goal, setGoal] = useState('reduce');
  const [calories, setCalories] = useState(0);
  const [macros, setMacros] = useState({ protein: 0, fat: 0, carbs: 0 });
  const [isButtonValid, setIsButtonValid] = useState(false);

  useEffect(() => {
    setIsButtonValid(height !== '' && weight !== '' && age !== '');
  }, [height, weight, age]);

  // 基礎代謝計算
  const calcBMR = () => {
    // 男性：((0.1238+(0.0481×体重kg)+(0.0234×身長cm)-(0.0138×年齢)-0.5473))×1000/4.186
    // 女性：((0.1238+(0.0481×体重kg)+(0.0234×身長cm)-(0.0138×年齢)-0.5473×2))×1000/4.186
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);
    let bmrValue;
    if (gender === 'male') {
      bmrValue =
        ((0.1238 + 0.0481 * w + 0.0234 * h - 0.0138 * a - 0.5473) * 1000) / 4.186;
    } else {
      bmrValue =
        ((0.1238 + 0.0481 * w + 0.0234 * h - 0.0138 * a - 0.5473 * 2) * 1000) / 4.186;
    }
    setBmr(Math.floor(bmrValue));
    return bmrValue;
  };

  // カロリー計算
  const calculateCalories = (bmrValue: number) => {
    // 活動係数
    let activityCoefficient;
    switch (activityLevel) {
      case 'lazy':
        activityCoefficient = 1.2;
        break;
      case 'slightlyLazy':
        activityCoefficient = 1.375;
        break;
      case 'normal':
        activityCoefficient = 1.55;
        break;
      case 'slightlyActive':
        activityCoefficient = 1.725;
        break;
      case 'active':
        activityCoefficient = 1.9;
        break;
      default:
        activityCoefficient = 1.2;
    }
    // 目的
    let goalFactor;
    switch (goal) {
      case 'lose':
        goalFactor = 0.8;
        break;
      case 'gain':
        goalFactor = 1.2;
        break;
      default:
        goalFactor = 1.0;
    }
    // 1日の消費カロリー
    const totalCalories = bmrValue * activityCoefficient * goalFactor;
    setCalories(totalCalories);
    return totalCalories;
  };

  // マクロ栄養計算
  const calculateMacros = (totalCalories: number, goal: string) => {
    let proteinRatio, fatRatio, carbRatio;
    // 目的に応じたPFCの比率
    switch (goal) {
      case 'lose':
        proteinRatio = 0.3;
        fatRatio = 0.25;
        carbRatio = 0.45;
        break;
      case 'gain':
        proteinRatio = 0.25;
        fatRatio = 0.2;
        carbRatio = 0.55;
        break;
      default: // 'maintain'
        proteinRatio = 0.2;
        fatRatio = 0.3;
        carbRatio = 0.5;
        break;
    }
    const protein = (totalCalories * proteinRatio) / 4;
    const fat = (totalCalories * fatRatio) / 9;
    const carbs = (totalCalories * carbRatio) / 4;
    setMacros({ protein, fat, carbs });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bmrValue = calcBMR();
    const totalCalories = calculateCalories(bmrValue);
    calculateMacros(totalCalories, goal);
  };

  // ホーム画面
  return (
    <Wrapper>
      <Heading1>ホーム画面</Heading1>
      <ContentsBox>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          {/* 性別 */}
          <InputBox>
            <LabelHead>性別</LabelHead>
            <div className='flex items-center gap-3'>
              <div className='w-32'>
                <input
                  type='radio'
                  id='male'
                  name='gender'
                  className='hidden peer'
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                <label
                  className='flex items-center justify-center p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300  peer-checked:bg-blue-400 peer-checked:border-transparent'
                  htmlFor='male'
                >
                  男性
                </label>
              </div>
              <div className='w-32'>
                <input
                  type='radio'
                  id='female'
                  name='gender'
                  className='hidden peer'
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                <label
                  className='flex items-center justify-center p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300  peer-checked:bg-red-400 peer-checked:border-transparent'
                  htmlFor='female'
                >
                  女性
                </label>
              </div>
            </div>
          </InputBox>
          {/* 身長 */}
          <InputBox>
            <LabelHead>身長(cm)</LabelHead>
            <Input
              type='number'
              placeholder='身長を入力'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </InputBox>
          {/* 体重 */}
          <InputBox>
            <LabelHead>体重(kg)</LabelHead>
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
          {/* アクティブ度 */}
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
          {/* 目的 */}
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
          {/* 計算する */}
          <PrimaryButton type='submit' onClick={calcBMR} disabled={!isButtonValid}>
            計算する
          </PrimaryButton>
        </form>
        {/* 計算結果 */}
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
      </ContentsBox>
    </Wrapper>
  );
};

export default Home;
