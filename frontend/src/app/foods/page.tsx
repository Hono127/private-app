'use client';

import React, { useState } from 'react';
import Wrapper from '../components/templates/Wrapper';
import PrimaryButton from '../components/atoms/Button/PrimaryButton';
import Heading1 from '../components/atoms/Heading/Heading1';
import Input from '../components/atoms/Input/Input';

const Foods: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    // 検索ロジックを追加
    setResults(['食品1', '食品2', '食品3']);
  };

  return (
    <Wrapper>
      <Heading1>食品データベース検索画面</Heading1>
      <Input
        type='text'
        placeholder='食品を検索'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <PrimaryButton onClick={handleSearch}>検索</PrimaryButton>
      <ul className='mt-4 space-y-2'>
        {results.map((result, index) => (
          <li key={index} className='px-3 py-2 bg-gray-700 rounded-md'>
            {result}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Foods;
