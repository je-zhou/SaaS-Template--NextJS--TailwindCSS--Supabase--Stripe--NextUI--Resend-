import React from 'react'
import { SignupForm } from './sign-up-form'
import { headers } from 'next/headers';

export default function SignUpPage() {
  const origin = headers().get("origin") ?? "";

  return (
    <div className='h-screen flex items-center justify-center'>
      <SignupForm origin={origin}/>
    </div>
  )
}
