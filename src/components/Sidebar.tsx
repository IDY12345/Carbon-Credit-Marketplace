import React from 'react'
import {sidebarLinks} from '../../constants/index'
import Link from 'next/link'
import { Roboto_Slab , Roboto_Mono } from "next/font/google";
import Impact from "@/components/Impact";

const robotoSlab = Roboto_Slab({
  weight: '400',
  subsets: ['latin']
})

const robotoMono= Roboto_Mono({
  weight: '600',
  subsets: ['latin']
})


const Sidebar = () => {
  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link)=>(
                <Link href={link.route} key={link.label} className={`${robotoMono.className} text-[22px] font-bold`}>{link.label}</Link>
        ))}

      </div>
    </section>
  )
}

export default Sidebar