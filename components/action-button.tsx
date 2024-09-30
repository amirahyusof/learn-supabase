import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export function EditButton(){
  return(
    <Link href={""}>
      <span className='hover:text-pink-300'>Edit</span>
    </Link>
  )
}

export function ViewButton(){
  return(
    <Link href="">
      <span className='hover:text-pink-300'>View</span>
    </Link>
  )
}

export function DeleteButton(){
  return(
    <Button variant="destructive">
      Delete
    </Button>
  )
}