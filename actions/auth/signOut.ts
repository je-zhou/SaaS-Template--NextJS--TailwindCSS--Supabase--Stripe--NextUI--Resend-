"use server" 

import { createClient } from "@/libs/clients/supabase/server";
import { redirect } from "next/navigation";

export const signOut = async () => {
  "use server"
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/login");
};
