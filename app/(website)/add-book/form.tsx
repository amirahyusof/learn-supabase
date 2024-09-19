"use client";

import { ListBook } from "@/lib/definitions";
import { 
  BookCheck, 
  BookHeart, 
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createBook, State } from "@/lib/action-book";
import { useFormState } from "react-dom";


export default function BookForm (){
  const initialState: State = { message: null, errors: {}}  
  const [state, formAction] = useFormState(createBook, initialState);
   
  return(
    <main className="mx-auto w-[600px] md:w-[800px] justify-center h-screen mt-10 text-black">
      <form action={formAction}>
        <div className="rounded-md bg-red-300 p-4 md:p-6">

          {/*Title */}
          <div className="mb-4">
            <label>
              Title
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input 
                id="title"
                name="title"
                type="string"
                placeholder="Title of Book"
                className="bg-slate-100 peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-red-950"
                />
              </div>
            </div>
          </div>

          {/*Author */}
          <div className="mb-4">
            <label>
              Author
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input 
                id="author"
                name="author"
                type="string"
                placeholder="Author of Book"
                className="bg-slate-100 peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-red-950"
                />
              </div>
            </div>
          </div>

          {/*Genre */}
          <div className="mb-4">
            <label>
              Genre
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input 
                id="genre"
                name="genre"
                type="string"
                placeholder="Genre of Book"
                className="bg-slate-100 peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-red-950"
                />
              </div>
            </div>
          </div>

          {/*Reading status */}
          <fieldset>
          <legend>
            Set the reading status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                 id="want"
                 name="status"
                 type="radio"
                 value="want"
                 className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="want"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Want to read <BookHeart className="h-4 w-4" />
                </label>
              </div>

              <div className="flex items-center">
                <input
                 id="reading"
                 name="status"
                 type="radio"
                 value="reading"
                 className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="new"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Reading <BookOpen className="h-4 w-4" />
                </label>
              </div>

              <div className="flex items-center">
                <input
                 id="finished"
                 name="status"
                 type="radio"
                 value="finished"
                 className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="new"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Completed <BookCheck className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        </div>
       

        <div className="mt-6 flex justify-end gap-4">
        <Link
            href="/main"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-red-300"
          >
            Cancel
          </Link> 
          
          <Button type="submit">
            Add Book
          </Button>
          
        </div>
      </form>

    </main>
  )
}