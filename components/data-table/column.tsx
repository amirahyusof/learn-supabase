"use client"

import { ColumnDef } from "@tanstack/react-table";
import { DeleteButton, EditButton } from "../action-button";

//for placeholder data
export type dataBook = {
  id: string
  title: string
  author: string
  genre: string
  readingStatus: "want to read"| "reading" |"finished";
}

export const columns: ColumnDef<dataBook>[] = [
  {
    accessorKey: "readingStatus",
    header: "Status"
  },
  {
    accessorKey: "title",
    header: "Title"
  },
  {
    accessorKey: "author",
    header: "Author"
  },
  {
    accessorKey: "genre",
    header: "Genre"
  },
  {
    accessorKey: "Choices",
    header: "Choices",
    cell:({row}) => {
      return (
        <div className="flex mx-auto justify-between">
          <EditButton />
          <DeleteButton />
        </div>
      )
    }

  },
  

]