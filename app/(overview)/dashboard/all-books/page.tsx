
import React from 'react'
import MainPage from '@/components/main-page'
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

export default async function AllBook(){
  const data = await getData();
  
  return(
    <div>
      <MainPage 
        data={data}
      />
    </div>
  )
}