import React from 'react'
import { Card } from "@/components/ui/card"
import { 
  TabsList, 
  TabsTrigger 
} from '@/components/tabs-links'
import Categories from '../categories/page'
import AddBook from '../add-book/page'
import { columns, dataBook } from '@/components/data-table/column'
import { BookDataTable } from '@/components/data-table/data-table'


async function getData(): Promise<dataBook[]> {
  return [
    {
      id:"001",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald", 
      genre: "Fiction", 
      readingStatus: "finished",
    },
    {
      id:"002",
      title: "Atomic Habits",
      author: "James Clear", 
      genre: "Self-help", 
      readingStatus: "want to read",
    },
    {
      id:"003",
      title: "1984",
      author: "George Orwell", 
      genre: "Dystopian", 
      readingStatus: "reading",
    },
  ]
}

async function MainPage(){
  const data = await getData()

  return (
    <main className='w-full h-screen bg-[#FFD1D1] mx-auto justify-center'>
      <h1 className='text-3xl text-center p-5 text-slate-500'> Book Collection Tracker </h1>
      {/* <SearchTool /> */}

      <div className='mx-auto justify-between px-4 lg:w-[900px] mt-10'>
        <div>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger href="/main/all-books" >All Books</TabsTrigger>
            <TabsTrigger href="/main/categories">Categories</TabsTrigger>
            <TabsTrigger href="/main/add-book">Add New Book</TabsTrigger>
          </TabsList>
        </div>

          <Card className='mt-4'>
            <BookDataTable 
              columns={columns} 
              data = {data} 
            />
          </Card>
      </div>
    </main>
  )
}

export default MainPage