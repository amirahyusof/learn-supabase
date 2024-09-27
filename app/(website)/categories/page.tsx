import { Button } from '@/components/ui/button'
import { BookA, BookType, Brain, CircleCheck, Clapperboard, Gem, GraduationCap, Heart, LibraryBig, Scroll, SquareActivity } from 'lucide-react'
import React from 'react'

const Categories = () => {
  return (
    <main>
      <div className='m-4'>
        Search Categories
      </div>

      <div className='mb-4'>
        <ul className='ml-2 grid grid-cols-5 md:grid-cols-6 gap-2 content-center'>
          <li>
            <Button>
              <BookType className='w-4 h-4' />
                Fiction
            </Button>
          </li>
          <li>
            <Button>
              <BookA className='w-4 h-4' />
              Non-Fiction
            </Button>
          </li>
          <li>
            <Button>
              <Brain className='w-4 h-4' />
              Sci-Fi
            </Button>
          </li>
          <li>
            <Button>
              <Clapperboard className='w-4 h-4' />
              Classics
            </Button>
          </li>
          <li>
            <Button>
              <GraduationCap className='w-4 h-4' />
              Educational
            </Button>
          </li>
          <li>
            <Button>
              <CircleCheck className='w-4 h-4' />
                Religious
            </Button>
          </li>
          <li>
            <Button>
              <SquareActivity className='h-4 w-4' />
                Health
            </Button>
          </li>
          <li>
            <Button>
              <Gem className='h-4 w-4' />
                Business
              </Button>
          </li>
          <li>
            <Button>
              <Heart className="h-4 w-4" />
                Romance
            </Button>
          </li>
          <li>
            <Button>
            <Scroll className='h-4 w-4' />
                History
            </Button>
          </li>
          <li>
            <Button>
              <LibraryBig className='h-4 w-4' />
                Biography
            </Button>
          </li>
        </ul>
      </div>
      
    </main>
  )
}

export default Categories