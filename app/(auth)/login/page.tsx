import BackButton from "@/components/ui/back-button";
import { LogInForm } from "./log-in-form";
import { getSignedInUser } from "@/actions/auth/getSignedInUser";
import { redirect } from "next/navigation";

export default async function Login(){
  const user = await getSignedInUser()

  if (user) {
    return redirect("/protected");
  }

  return (
    <div className='min-h-[90vh] flex items-center justify-center px-4'>
      <div className="w-fit space-y-2 flex flex-col items-end">
        <BackButton/>
        <LogInForm/>
      </div>
    </div>
  );
}
