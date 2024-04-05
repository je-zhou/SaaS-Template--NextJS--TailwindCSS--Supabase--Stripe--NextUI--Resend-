import React from 'react'
import { SignupForm } from './sign-up-form'
import { headers } from 'next/headers';
import BackButton from '@/components/ui/back-button';

export default function SignUpPage() {
  const origin = headers().get("origin") ?? "";

  return (
    <div className='h-screen flex flex-col items-end space-y-2  justify-center'>
      <BackButton/>
      <SignupForm origin={origin}/>
    </div>
  )
}
