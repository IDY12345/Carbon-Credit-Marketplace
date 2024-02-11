'use client'
import React from 'react'
import { Roboto_Slab, Roboto_Mono } from "next/font/google";

import {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel';

const robotoSlab = Roboto_Slab({
    weight: '400',
    subsets: ['latin']
})

const robotoMono = Roboto_Mono({
    weight: '400',
    subsets: ['latin']
})

const Impact = () => {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])


    return (
        <section className='pt-24 min-h-screen w-full'>
            <h1 className={`${robotoMono.className} font-bold text-[64px] max-w-4xl px-24`}>Impact of Carbon Credit Marketplace</h1>

            <div className='flex justify-center items-center flex-row'>
                <Carousel setApi={setApi}>
                    <CarouselContent>
                        <CarouselItem>
                            
                        </CarouselItem>
                        <CarouselItem>...</CarouselItem>
                        <CarouselItem>...</CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}

export default Impact