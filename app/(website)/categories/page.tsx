
import React from 'react'
import { Button } from '@/components/ui/button'
import { 
  BookA, 
  BookType, 
  Brain, 
  CircleCheck, 
  Clapperboard, 
  Gem, 
  GraduationCap, 
  Heart, 
  LibraryBig, 
  Scroll, Search, 
  SquareActivity 
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { BookDataTable } from '@/components/data-table/data-table';
import { ColumnCategories, dataBook } from '@/components/data-table/column-categories';

async function getData(): Promise<dataBook[]> {
  return [
    {
      id:"001",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald", 
      genre: "Fiction", 
    },
    {
      id:"002",
      title: "Atomic Habits",
      author: "James Clear", 
      genre: "Self-help", 
    },
    {
      id:"003",
      title: "1984",
      author: "George Orwell", 
      genre: "Dystopian", 
    },
  ]
}

async function Categories(){
  const data = await getData();

  return (
    <main>
      <div className='m-4 relative flex-1 md:grow-0'>
        <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
        <Input
          type="search"
          placeholder="Search Categories.."
          className="w-full rounded-lg bg-white pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>

      <div className='m-2 mb-4'>
        <ul className='ml-6 sm:ml-2 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 gap-2 content-center'>
          <li>
            <Button className='hover:bg-[#FFF5E4]'>
              <BookType className='w-4 h-4 right-2' />
                Fiction
            </Button>
          </li>
          <li>
            <Button className='hover:bg-[#FFF5E4]'>
              <BookA className='w-4 h-4' />
              Non-Fiction
            </Button>
          </li>
          <li>
            <Button className='hover:bg-[#FFF5E4]'>
              <Brain className='w-4 h-4' />
              Sci-Fi
            </Button>
          </li>
          <li>
            <Button className='hover:bg-[#FFF5E4]'>
              <Clapperboard className='w-4 h-4' />
              Classics
            </Button>
          </li>
          <li>
            <Button className='hover:bg-[#FFF5E4]'>
              <GraduationCap className='w-4 h-4' />
              Educational
            </Button>
          </li>
          <li>
            <Button className='hover:bg-[#FFF5E4]'>
              <CircleCheck className='w-4 h-4' />
                Religious
            </Button>
          </li>
          <li>
            <Button className='hover:bg-[#FFF5E4]'>
              <SquareActivity className='h-4 w-4' />
                Health
            </Button>
          </li>
          <li>
            <Button className='hover:bg-[#FFF5E4]'>
              <Gem className='h-4 w-4' />
                Business
              </Button>
          </li>
          <li>
            <Button className='hover:bg-[#FFF5E4]'>
              <Heart className="h-4 w-4" />
                Romance
            </Button>
          </li>
          <li>
            <Button className='hover:bg-[#FFF5E4]'>
            <Scroll className='h-4 w-4' />
                History
            </Button>
          </li>
          <li>
            <Button className='hover:bg-[#FFF5E4]'>
              <LibraryBig className='h-4 w-4' />
                Biography
            </Button>
          </li>
        </ul>
      </div>

      <BookDataTable 
        columns={ColumnCategories}
        data={data}
      />
      
    </main>
  )
}

export default Categories