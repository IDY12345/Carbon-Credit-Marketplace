import React from 'react'
import { currentUser } from '@clerk/nextjs'
import { fetchUser } from '@/lib/actions/user.actions'
import {redirect} from 'next/navigation'
import AccountProfile from '@/components/shared/AccountProfile'

const onBoarding = async() => {

  const user=await currentUser();
  if(!user) return null;

  const userInfo=await fetchUser(user.id);

  if(userInfo?.onboarded) redirect('/');

  const userData={
    id:user?.id,
    objectId:userInfo?._id,
    mail:user?.emailAddresses[0].emailAddress || userInfo?.company.companyEmail || "",
    username: userInfo ? userInfo?.username : user?.username,
    name: userInfo ? userInfo?.company.name : user?.firstName || "",
    bio: userInfo ? userInfo?.company.bio : "",
    image: userInfo ? userInfo?.image : user?.imageUrl,
    cin:userInfo?userInfo?.company.cin : "",
    establishment:userInfo?userInfo?.company.establishment : "",
    contact:userInfo?userInfo?.company.contact : "",
    ownerContact:userInfo?userInfo?.ownerDetails.ownerContact : "",
    firstname:userInfo?userInfo?.ownerDetails.firstname : "",
    lastName:userInfo?userInfo?.ownerDetails.lastName : "",
    dob:userInfo?userInfo?.ownerDetails.dob : "",
    email:userInfo?userInfo?.ownerDetails.email : "",
    ownerBio:userInfo?userInfo?.ownerDetails.ownerBio : "",
    linkedin:userInfo?userInfo?.company.linkedin : "",
    instagram:userInfo?userInfo?.company.instagram : "",
    twitter:userInfo?userInfo?.company.twitter : "",
    website:userInfo?userInfo?.company.website : "",    
  }

  return (
    <section className='min-h-screen'>
      <div className='head-text text-left'>onBoarding</div>
      <p className='mt-3 text-base-regular text-light-2'>
        Complete your profile now to freely trade your carbon credits.
      </p>
      <section className='mt-9 bg-dark-2 p-10'>
        <AccountProfile
          user={userData}
          btnTitle="Continue"
        />
      </section>
    </section>
  )
}

export default onBoarding