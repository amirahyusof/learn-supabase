import React from 'react'
import { Card } from "@/components/ui/card"
import { 
  Tabs,
  TabsList, 
  TabsContent,
  TabsTrigger 
} from '@/components/ui/tabs'
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
    <main className='w-full h-screen bg-[#FFF5E4] mx-auto justify-center'>
      <h1 className='text-3xl text-center p-5 text-slate-500'> Book Collection Tracker </h1>
      {/* <SearchTool /> */}

      <div className='mx-auto justify-between px-4 lg:w-[900px] mt-10'>
        <Tabs defaultValue="book">
          <TabsList className="grid w-full grid-cols-3 text-black">
            <TabsTrigger value="all" className='bg-[#FFE3E1]'>All Books</TabsTrigger>
            <TabsTrigger value="categories" className='bg-[#FFE3E1]'>Categories</TabsTrigger>
            <TabsTrigger value="add" className='bg-[#FFE3E1]'>Add New Book</TabsTrigger>
          </TabsList>
        

          <TabsContent value='all'>
            <Card className='mt-4 bg-[#FFD1D1] border-white '>
              <BookDataTable 
                columns={columns} 
                data = {data} 
              />
            </Card>
          </TabsContent>

          <TabsContent value='categories'>
            <Card className='mt-4 bg-[#FFD1D1] border-white '>
              <Categories />
            </Card>
          </TabsContent>

          <TabsContent value='add'>
            <Card className="bg-[#FFD1D1] mt-4 border-white">
              <AddBook />
            </Card>
          </TabsContent>

          
        </Tabs>
      </div>
    </main>
  )
}

export default MainPage