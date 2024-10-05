import MainPage from '@/components/main-page'
import React from 'react'
import { dataBook } from '@/components/data-table/column'

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

async function Page(){
  const data = await getData()
  
  return (
    <div className=''>
      <MainPage  
        data = {data}
      />
    </div>
  )
}

export default Page