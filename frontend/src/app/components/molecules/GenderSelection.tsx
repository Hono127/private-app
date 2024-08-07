import React, { FC } from 'react';
import InputBox from './InputBox';
import LabelHead from '../atoms/LabelHead/LabelHead';

type Props = {
  gender: string;
  setGender: (gender: string) => void;
};

const GenderSelection: FC<Props> = ({ gender, setGender }) => {
  return (
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
  );
};

export default GenderSelection;
