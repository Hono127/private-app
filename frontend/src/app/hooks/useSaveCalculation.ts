import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

type CalculationResult = {
  user_id: string;
  bmr: number;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export const useSaveCaluculation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveCaluculation = async (calculation: CalculationResult) => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from('calculations')
      .insert([
        {
          user_id: calculation.user_id,
          bmr: calculation.bmr,
          calories: calculation.calories,
          protein: calculation.protein,
          fat: calculation.fat,
          carbs: calculation.carbs,
        },
      ]);
    setLoading(false);
    if (error) {
      setError(error.message);
      return null
    }

    return data
  };
  return { saveCaluculation, loading, error }
}
