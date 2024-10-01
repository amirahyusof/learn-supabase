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
    redirect('/main')
  }
  return (
    <section className='relative w-full border lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-opacity-60 bg-black lg:relative lg:bg-transparent lg:p-0'>
        <div className='mx-auto grid w-[350px] gap-6 text-white lg:text-gray-700'>
          <h1 className='text-3xl font-extrabold sm:text-xl'>Book Collection Tracker</h1>
          <div className='grid gap-2 text-center'>
            <Button>
              <Link href={'/sign-in'}>
                Login
              </Link>
            </Button>
            <Button>
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
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}

export default MainPage