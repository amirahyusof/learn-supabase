import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Home = () => {
  return (
    <main>
      <div className='p-4'>
        <h1 className='text-2xl lg:text-4xl font-bold'>Home</h1>
        <p className='text-lg lg:text-2xl'>Your Own Dream</p>
        <Card className='p-2 mt-2'>
          <CardTitle>Total Book Read</CardTitle>
          <CardContent className='text-end text-5xl'>
            100
          </CardContent>
        </Card>
      </div>

      <div className='p-4 mt-6'>
        <h1 className='text-2xl lg:text-4xl font-medium'>My Treasure Book</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4'>
          <Card>
            <CardHeader>
              <CardTitle>The Great Gatsby</CardTitle>
              <CardDescription className='text-end'>
                F. Scott Fitzgerald
              </CardDescription>
            </CardHeader>
            <CardContent>
              Summary of book
            </CardContent>
            <CardFooter className='text-sm'>
              Finished
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The Great Gatsby</CardTitle>
              <CardDescription className='text-end'>
                F. Scott Fitzgerald
              </CardDescription>
            </CardHeader>
            <CardContent>
              Summary of book
            </CardContent>
            <CardFooter className='text-sm'>
              Finished
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}

export default Home