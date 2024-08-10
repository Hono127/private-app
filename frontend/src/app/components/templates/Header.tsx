"use client"

import React, { useEffect, useState } from 'react'
import HumbergerMenu from '@/app/components/organisms/HumbergerMenu';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

const Header = () => {

  const [user, setUser] = useState<User | null>(null)
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
  };
  return (
    <header className="bg-gray-800 text-white max-w-full p-6">
      <div className="max-w-5xl w-full mx-auto flex justify-between ">
        <div className='flex justify-between w-full'>
          <a href="/" className="flex items-center justify-end text-2xl font-bold whitespace-nowrap">Fitness-App</a>
        </div>
        <nav className=" md:flex gap-4 items-center justify-end w-full hidden">
          <a href="/foods" className="hover:underline whitespace-nowrap">食品データベース</a>
          <a href="/meal/new" className="hover:underline whitespace-nowrap">食事記録</a>
          <a href="/goals" className="hover:underline whitespace-nowrap">目標設定</a>
          <a href="/progress" className="hover:underline whitespace-nowrap">進捗報告</a>
          <a href="/settings" className="hover:underline whitespace-nowrap">設定</a>
          {user && (
            <a
              href='#'
              className='hover:underline whitespace-nowrap'
              onClick={handleLogout}
            >
              ログアウト
            </a>
          )}
          {!user && (
            <a
              href='#'
              className='hover:underline whitespace-nowrap'
              onClick={() => navigateTo('/login')}
            >
              ログイン
            </a>
          )}
          {!user && (
            <a
              href='#'
              className='hover:underline whitespace-nowrap'
              onClick={() => navigateTo('/signup')}
            >
              会員登録
            </a>
          )}
        </nav>
        <HumbergerMenu />
      </div>

    </header >
  )
}

export default Header