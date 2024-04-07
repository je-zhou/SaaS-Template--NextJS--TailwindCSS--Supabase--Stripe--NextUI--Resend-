import React from 'react'
import { SignupForm } from './sign-up-form'
import { headers } from 'next/headers';
import BackButton from '@/components/ui/back-button';

export default function SignUpPage() {
  const origin = headers().get("origin") ?? "";

  return (
    <div className='min-h-[90vh] flex items-center justify-center px-4'>
      <div className="w-fit space-y-2 flex flex-col items-end">
        <BackButton/>
        <SignupForm origin={origin}/>
      </div>
    </div>
  )
}
