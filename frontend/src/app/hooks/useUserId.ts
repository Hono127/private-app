import { supabase } from "@/app/lib/supabaseClient";

const UseUserId = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error('ユーザー情報の取得に失敗しました', error);
    return null;
  }

  return user?.id || null;
};

export default UseUserId;