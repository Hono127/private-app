'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabaseClient';
import Wrapper from '../components/templates/Wrapper';
import Heading1 from '../components/atoms/Heading/Heading1';
import InputBox from '../components/molecules/InputBox';
import LabelHead from '../components/atoms/LabelHead/LabelHead';
import Input from '../components/atoms/Input/Input';
import PrimaryButton from '../components/atoms/Button/PrimaryButton';
import ErrorText from '../components/atoms/Text/ErrorText';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      setError('会員登録に失敗しました。' + error.message);
    } else {
      router.push('/login');
    }
  };

  return (
    <Wrapper>
      <Heading1>会員登録</Heading1>
      {error && <ErrorText>{error}</ErrorText>}
      <form onSubmit={handleSignup} className='flex flex-col gap-3'>
        <InputBox>
          <LabelHead>ユーザー名</LabelHead>
          <Input
            type='text'
            placeholder='ユーザー名を入力'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <LabelHead>メールアドレス</LabelHead>
          <Input
            type='email'
            placeholder='メールアドレスを入力'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <LabelHead>パスワード</LabelHead>
          <Input
            type='password'
            placeholder='パスワードを入力'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>
        <PrimaryButton type='submit'>会員登録</PrimaryButton>
      </form>
    </Wrapper>
  );
};

export default Signup;
