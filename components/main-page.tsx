import React from 'react'
import { Card } from "@/components/ui/card"
import { 
  Tabs,
  TabsList, 
  TabsContent,
  TabsTrigger 
} from '@/components/ui/tabs'
import Categories from '@/app/(overview)/dashboard/categories/page'
import AddBook from '@/app/(overview)/dashboard/add-book/page'
import { columns, dataBook } from '@/components/data-table/column'
import { BookDataTable } from '@/components/data-table/data-table'



async function MainPage({ data }:{ data :dataBook[] }){
 
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
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