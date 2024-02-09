import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UserButton } from './UserButton'

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      <UserButton user={user} />
    </div>
  ) : (
    <div className="flex justify-between">
      <Link
        href="/signup"
        className="py-1 line-clamp-1 px-2 flex rounded-md no-underline hover:font-bold transition-all hover:underline"
      >
        Sign Up
      </Link>
      <div className="border-r border-btn-background max-h-4 mt-2.5 mx-1"></div>
      <Link
        href="/login"
        className="py-1 px-2 flex rounded-md no-underline hover:font-bold transition-all hover:underline"
      >
        Login
      </Link>
    </div>
  );
}
