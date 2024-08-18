'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';
import Wrapper from '../components/templates/Wrapper';
import Heading1 from '../components/atoms/Heading/Heading1';
import InputBox from '../components/molecules/InputBox';
import LabelHead from '../components/atoms/LabelHead/LabelHead';
import Input from '../components/atoms/Input/Input';
import PrimaryButton from '../components/atoms/Button/PrimaryButton';
import ErrorText from '../components/atoms/Text/ErrorText';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(
        'ログインに失敗しました。メールアドレスまたはパスワードが正しくありません。',
      );
    } else {
      const userName = data.user?.user_metadata?.name || 'ゲスト';
      console.log('Logged in user:', data.user);
      router.push(`/?userName=${encodeURIComponent(userName)}`);
    }
  };

  const transferSignup = () => {
    router.push('/signup');
  }

  return (
    <Wrapper>
      <Heading1>ログイン</Heading1>
      {error && <ErrorText>{error}</ErrorText>}
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
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
        <PrimaryButton type='submit'>ログイン</PrimaryButton>
        <Link href='/signup' className='underline hover:text-blue-600'>会員登録はこちら</Link>
      </form>
    </Wrapper>
  );
};

export default Login;
