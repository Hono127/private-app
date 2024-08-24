'use client'
import { supabase } from '@/app/lib/supabaseClient';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
  };

  return (
    <div className='relative block md:hidden' >
      <button
        className='flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none'
        onClick={toggleMenu}
      >
        <span
          className={`block w-full h-1 rounded-md bg-white transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}
        ></span>
        <span
          className={`block w-full h-1 rounded-md bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          className={`block w-full h-1 rounded-md bg-white transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}
        ></span>
      </button>
      {isOpen && (
        <div className='absolute top-16 right-0 mt-2 w-48 bg-slate-400 rounded-md shadow-lg z-10'>
          <nav className='flex flex-col p-4 space-y-2'>
            {user && (
              <a href="/foods" className="hover:underline block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">食品データベース</a>
            )}
            {user && (
              <a href="/meal/new" className="hover:underline block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">食事記録</a>
            )}
            {user && (
              <a href="/goals" className="hover:underline block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">目標設定</a>
            )}
            {user && (
              <a href="/progress" className="hover:underline block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">進捗報告</a>
            )}
            {user && (
              <a href="/settings" className="hover:underline block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">設定</a>
            )}
            {user && (
              <a
                href='#'
                className='block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md'
                onClick={handleLogout}
              >
                ログアウト
              </a>
            )}
            {!user && (
              <a
                href='#'
                className='block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md'
                onClick={() => navigateTo('/login')}
              >
                ログイン
              </a>
            )}
            {!user && (
              <a
                href='#'
                className='block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md'
                onClick={() => navigateTo('/signup')}
              >
                会員登録
              </a>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
