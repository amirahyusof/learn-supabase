import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export function EditButton(){
  return(
    <Link href={""}>
      Edit
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