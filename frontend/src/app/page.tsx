'use client';

import React, { useEffect, useState } from 'react';
import Wrapper from './components/templates/Wrapper';
import ContentsBox from './components/molecules/ContentsBox';
import PrimaryButton from './components/atoms/Button/PrimaryButton';
import UserGreeting from './components/molecules/UserGreeting';
import useUserName from './hooks/useUserName';
import GenderSelection from './components/molecules/GenderSelection';
import ActivityLevelSelection from './components/molecules/ActivityLevelSelection';
import GoalSelection from './components/molecules/GoalSelection';
import InputHigh from './components/molecules/InputHigh';
import InputWeight from './components/molecules/InputWeight';
import InputAge from './components/molecules/InputAge';
import ResultCalc from './components/organisms/ResultDisplay';
import HumbergerMenu from './components/organisms/HumbergerMenu';

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
  const userName = useUserName();

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
      <HumbergerMenu />
      <UserGreeting userName={userName} />
      <ContentsBox>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          {/* 性別 */}
          <GenderSelection gender={gender} setGender={setGender} />
          {/* 身長 */}
          <InputHigh height={height} setHeight={setHeight} />
          {/* 体重 */}
          <InputWeight weight={weight} setWeight={setWeight} />
          {/* 年齢 */}
          <InputAge age={age} setAge={setAge} />
          {/* アクティブ度 */}
          <ActivityLevelSelection
            activityLevel={activityLevel}
            setActivityLevel={setActivityLevel}
          />
          {/* 目的 */}
          <GoalSelection goal={goal} setGoal={setGoal} />
          {/* 計算する */}
          <PrimaryButton type='submit' onClick={calcBMR} disabled={!isButtonValid}>
            計算する
          </PrimaryButton>
        </form>
        {/* 計算結果 */}
        <ResultCalc bmr={bmr} calories={calories} macros={macros} />
      </ContentsBox>
    </Wrapper>
  );
};

export default Home;
