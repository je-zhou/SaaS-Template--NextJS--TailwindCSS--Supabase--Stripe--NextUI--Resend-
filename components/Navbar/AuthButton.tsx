import { createClient } from "@/libs/clients/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <Button type="submit">
          Logout
        </Button>
      </form>
    </div>
  ) : (
      <Link
        href="/login"
      >
        <Button>
          Login
        </Button>
      </Link>
  );
}
