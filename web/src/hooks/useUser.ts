"use client";

import { createSupabaseClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    const supabase = createSupabaseClient();

    const getUser = async () => {
      setLoad(true);
      try {
        const { data, error } = await supabase.auth.getUser();
        setUser(data?.user);

        if (error) setUser(null);
      } finally {
        setLoad(false);
      }
    };

    getUser();
  }, []);

  return { user, load };
}
