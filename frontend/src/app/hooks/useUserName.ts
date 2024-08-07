import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

const useUserName = () => {
  const searchParams = useSearchParams();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const userNameParam = searchParams.get('userName');
    if (userNameParam) {
      setUserName(userNameParam);
    } else {
      const getUserInfo = async () => {
        const { data } = await supabase.auth.getUser();
        if (data.user) {
          setUserName(data.user.user_metadata?.name || 'ゲスト');
        }
      };
      getUserInfo();
    }
  }, [searchParams]);

  return userName;
};

export default useUserName;
