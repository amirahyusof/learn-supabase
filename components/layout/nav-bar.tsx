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
        <Link href="/dashboard" className="text-lg flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
          <Home className="h-4 w-4" />
            Main
        </Link>
        <Link href="/dashboard/all-books" className="text-lg flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
          <BookText className="h-4 w-4" />
            All Book
        </Link>
        <Link href="/dashboard/categories" className="text-lg flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
          <LibraryBig className="h-4 w-4" />
            Categories
        </Link>
        <Link href="/dashboard/add-book" className="text-lg flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
          <BookKey className="h-4 w-4" />
            Add Book
        </Link>
      </nav>
    </div>
  </section>
  )
}

export default NavBar