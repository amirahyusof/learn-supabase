import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import imageBook from '@/app/asset/login-image.png'

const MainPage = async () => {
  const { userId } = auth()
  if(userId){
    redirect('/dashboard')
  }
  return (
    <section className='relative w-full min-h-screen lg:grid lg:grid-cols-2 overflow-hidden bg-[#FEFAE0]'>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-opacity-60 bg-black lg:relative lg:bg-transparent lg:p-0'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-white md:text-gray-700 mb-6'>
          Book Collection Tracker
        </h1>
        
        <div className='mx-auto flex lg:text-[#FF9494]'>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button className='text-gray-600 w-[200px] bg-[#FFD1D1] hover:bg-[#FF9494]' asChild>
              <Link href={'/sign-in'}>
                Login
              </Link>
            </Button>
            <Button className='text-gray-600 w-[200px] bg-[#FFD1D1] hover:bg-[#FF9494]'asChild>
              <Link href={'/sign-up'}>
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className='lg:block'>
        <Image
          src={imageBook}
          width={450}
          height={350}
          alt="illustration of book"
          loading="lazy"
          className="h-screen w-full object-cover"
        />
      </div>
    </section>
  )
}

export default MainPage