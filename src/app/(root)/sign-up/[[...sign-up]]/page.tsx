import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <section className='h-screen w-full flex justify-center items-center'>
      <SignUp appearance={{variables:{colorPrimary:'#95C11F'}}} />
    </section>
  )
}

export default page