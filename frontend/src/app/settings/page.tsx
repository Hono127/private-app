import React from 'react';
import Wrapper from '../components/templates/Wrapper';
import Heading1 from '../components/atoms/Heading/Heading1';
import InputBox from '../components/molecules/InputBox';
import ContentsBox from '../components/molecules/ContentsBox';
import LabelHead from '../components/atoms/LabelHead/LabelHead';

const Settings = () => {
  return (
    <Wrapper>
      <Heading1>ユーザー設定</Heading1>
      <ContentsBox>
        {/* ユーザー名の変更 */}
        <InputBox>
          <LabelHead>ユーザー名の変更</LabelHead>
        </InputBox>
        {/* パスワードの変更 */}
        {/* メールアドレスの変更 */}
        {/* アカウントの削除 */}
      </ContentsBox>
    </Wrapper>
  );
};

export default Settings;
