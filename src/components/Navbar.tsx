import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Roboto_Slab, Roboto_Mono } from "next/font/google";

const robotoSlab = Roboto_Slab({
  weight: '400',
  subsets: ['latin']
})

const robotoMono = Roboto_Mono({
  weight: '400',
  subsets: ['latin']
})

const Navbar = () => {
  return (
    <nav className={`${robotoMono.className} text-[18px] topbar`}>
      <Link href={'/'}>
      <Image src={'/CC Black.png'} alt='CC Logo' width={100} height={100} />
      </Link>
      <Link href={'/'} >Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/climate-change'}>Climate Change</Link>
      <Link href={'/rules'}>Rules and Regulations</Link>
      <UserButton />
    </nav>
  )
}

export default Navbar