import { createClient } from "@/utils/supabase/server";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { redirect } from "next/navigation";

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
        // className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        <Button>
          Login
        </Button>
      </Link>
  );
}
