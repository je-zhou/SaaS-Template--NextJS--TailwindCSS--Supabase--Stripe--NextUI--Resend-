import { Button, Html } from '@react-email/components';
import * as React from 'react';

interface SignUpEmailProps {
  email: string;
}


export default function SignUpEmail({email}: SignUpEmailProps) {
  return (
    <Html lang="en">
      <div>{email}</div>
      <Button>Click me</Button>
    </Html>
  )
}
