
import BackButton from "@/components/ui/back-button";
import { LogInForm } from "./log-in-form";

export default function Login(){


  return (
    <div className='h-screen flex flex-col items-end space-y-2 justify-center'>
      <BackButton/>
      <LogInForm/>
    </div>
  );
}
