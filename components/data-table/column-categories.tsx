"use client"

import { ColumnDef } from "@tanstack/react-table";
import { ViewButton, EditButton } from "../action-button";

//for placeholder data
export type dataBook = {
  id: string
  title: string
  author: string
  genre: string
}

export const ColumnCategories: ColumnDef<dataBook>[] = [
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
        <div className="flex justify-between gap-4 sm:gap-2 md:gap-0">
          <EditButton />
          <ViewButton />
        </div>
      )
    }

  },
  

]