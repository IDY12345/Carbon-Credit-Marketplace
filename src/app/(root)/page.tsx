import Image from "next/image";
import { Roboto_Slab , Roboto_Mono } from "next/font/google";
import Impact from "@/components/Impact";

const robotoSlab = Roboto_Slab({
  weight: '400',
  subsets: ['latin']
})

const robotoMono= Roboto_Mono({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  return (
    <section className='w-full min-h-screen'>
      <div className="w-full h-[1000px] bg-windmill1 bg-no-repeat bg-cover object-fill">
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row items-center justify-center">
            <Image src={'/CC.png'} width={169} height={163} alt="logo" className="pt-64"/>
          </div>
          <h1 className={`${robotoSlab.className} font-bold text-[70px] uppercase pt-8 text-white text-center`}>Carbon Credit Marketplace</h1>
          <h2 className={`${robotoSlab.className} font-bold text-[24px] text-[#B9B9B9] text-center`}>Building Bridges to a <span className="text-[#95C11F]">Greener</span>&nbsp; World</h2>
        </div>
      </div>
      <div className="w-full min-h-screen bg-primary">
        <div className="flex flex-row justify-between pt-48 px-20">
          <div className="flex flex-col">
            <h1 className={`${robotoMono.className} font-bold text-[64px] max-w-4xl`}>What are Carbon Credits?</h1>
            <p className={`${robotoMono.className} font-bold text-[24px] max-w-2xl pt-12`}>Carbon credits are a key component of efforts to mitigate climate change by reducing greenhouse gas emissions. The basic idea is to create a market-based mechanism where entities can buy and sell permits that allow them to emit a certain amount of carbon dioxide or its equivalent into the atmosphere.</p>
          </div>
          <div className="pt-20">
            <Image src={'/CC Black.png'} width={400} height={300} alt="logo" />
          </div>
        </div>
        <div className="">
          <h1 className={`${robotoMono.className} font-bold text-[64px] max-w-6xl px-12`}>Why a Marketplace for Carbon Credits is needed?</h1>
          <div className="py-20">
            <div className="flex flex-row justify-between">
              <div className="pt-24 px-20">
                <Image src={'/One.png'} width={240} height={199} alt="logo" className=""/>
              </div>
              <div className="flex flex-col max-w-4xl">
                <h1 className={`${robotoMono.className} font-bold text-[32px] text-[#95C11F]`}>Encouraging Emissions Reduction:</h1>
                <h2 className={`${robotoMono.className} font-bold text-[24px]`}>&nbsp; &nbsp;Carbon credits provide a financial incentive for companies and organizations to reduce their carbon footprint. By creating a market for these credits, entities that are able to reduce their emissions below their allocated limit can sell their excess credits to those who are struggling to meet their emission targets. This encourages emissions reductions where they are most cost-effective.</h2>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div className="flex flex-row justify-between">
            <div className="flex flex-col max-w-4xl px-12">
                <h1 className={`${robotoMono.className} font-bold text-[32px] text-[#95C11F]`}>Cost-Effective Compliance:</h1>
                <h2 className={`${robotoMono.className} font-bold text-[24px]`}>&nbsp; &nbsp;For some industries or regions, reducing emissions can be costly or technically challenging. Purchasing carbon credits offers them a cost-effective way to meet regulatory requirements or voluntary emission reduction goals without incurring huge expenses to upgrade equipment or processes.</h2>
              </div>
              <div className="pt-8 px-20">
                <Image src={'/Two.png'} width={240} height={199} alt="logo" className=""/>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div className="flex flex-row justify-between">
              <div className="pt-8 px-20">
                <Image src={'/Three.png'} width={240} height={199} alt="logo" className=""/>
              </div>
              <div className="flex flex-col max-w-4xl">
                <h1 className={`${robotoMono.className} font-bold text-[32px] text-[#95C11F]`}>Supporting Renewable Energy and Clean Technologies:</h1>
                <h2 className={`${robotoMono.className} font-bold text-[24px]`}>&nbsp; &nbsp;Revenue generated from the sale of carbon credits can be used to fund renewable energy projects, reforestation efforts, or other initiatives that further reduce greenhouse gas emissions or enhance carbon sequestration. This creates additional incentives for investment in clean technologies and sustainable practices.</h2>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div className="flex flex-row justify-between">
            <div className="flex flex-col max-w-4xl px-12">
                <h1 className={`${robotoMono.className} font-bold text-[32px] text-[#95C11F]`}>Global Coordination:</h1>
                <h2 className={`${robotoMono.className} font-bold text-[24px]`}>&nbsp; &nbsp;The existence of a carbon credit marketplace encourages innovation and the development of new technologies aimed at reducing emissions. Companies have a financial incentive to invest in research and development to find more efficient ways of operating or cleaner energy sources to generate credits that can be sold on the market.</h2>
              </div>
              <div className="pt-8 px-20">
                <Image src={'/Four.png'} width={240} height={199} alt="logo" className=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Impact />
        </div>
      </div>
    </section>
  )
}
