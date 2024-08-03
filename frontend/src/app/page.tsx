import React from 'react';
import Wrapper from './components/templates/Wrapper';
import Heading1 from './components/atoms/Heading/Heading1';

const Home = () => {
  // ホーム画面
  return (
    <Wrapper>
      <Heading1>ホーム画面</Heading1>
      <p>ユーザーの概要、ナビゲーションメニュー、最近の活動のサマリーを表示します。</p>
    </Wrapper>
  );
};

export default Home;
