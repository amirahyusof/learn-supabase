import React from 'react'
import Link from 'next/link';
import {
  BookKey,
  BookText,
  Home,
  LibraryBig,
} from 'lucide-react';

const NavBar = () => {
  return (
  <section className="md:w-72 bg-[#FFD1D1] md:border-r hidden md:flex flex-col">
    <div className="flex-1 overflow-y-auto">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        <Link href="/dashboard" className="text-lg flex items-center gap-3 text-gray-600 rounded-lg px-3 py-2 transition-all hover:text-primary hover:bg-pink-600">
          <Home className="h-4 w-4" />
            Main
        </Link>
        <Link href="/dashboard/all-books" className="text-lg flex items-center gap-3 rounded-lg px-3 py-2  text-gray-500 text-primary transition-all hover:text-primary hover:bg-pink-600">
          <BookText className="h-4 w-4" />
            All Book
        </Link>
        <Link href="/dashboard/categories" className="text-lg flex items-center gap-3 rounded-lg px-3 py-2  text-gray-500 text-primary transition-all hover:text-primary hover:bg-pink-600">
          <LibraryBig className="h-4 w-4" />
            Categories
        </Link>
        <Link href="/dashboard/add-book" className="text-lg flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-500 text-primary transition-all hover:text-primary hover:bg-pink-600">
          <BookKey className="h-4 w-4" />
            Add Book
        </Link>
      </nav>
    </div>
  </section>
  )
}

export default NavBar