
import BackButton from "@/components/ui/back-button";
import { LogInForm } from "./log-in-form";

export default function Login(){


  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="w-fit space-y-2 flex flex-col items-end">
        <BackButton/>
        <LogInForm/>
      </div>
      
    </div>
  );
}
