import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

const SignInPage = () => {
  return (
    <section className='h-screen w-full flex justify-center items-center'>
      <SignIn appearance={{variables:{colorPrimary:'#95C11F'}}}/>
    </section>
  )
}

export default SignInPage