import { supabase } from '@/lib/supabaseClient';
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
    <div className='relative'>
      <button
        className='absolute top-6 right-3 flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none'
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
        <div className='absolute top-16 right-0 mt-2 w-48 bg-slate-400 rounded-md shadow-lg'>
          <ul className='flex flex-col p-4 space-y-2'>
            <li>
              <a
                href='#'
                className='block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md'
                onClick={() => navigateTo('/settings')}
              >
                ユーザー設定
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md'
                onClick={handleLogout}
              >
                ログアウト
              </a>
            </li>
            {!user && (
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md'
                  onClick={() => navigateTo('/login')}
                >
                  ログイン
                </a>
              </li>
            )}
            {!user && (
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md'
                  onClick={() => navigateTo('/signup')}
                >
                  会員登録
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
