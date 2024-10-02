import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import {
  BookKey,
  BookText,
  Home,
  LibraryBig,
} from 'lucide-react';

export default function Header(){
  return(
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-[#FFD1D1] px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline" className="shrink-0 md:hidden">
              Menu
            </Button>
        </SheetTrigger>
        <SheetContent side="top" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-light">
            <Link href="/dashboard" className="mx-[-0.65rem] flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <Home className="h-4 w-4" />
                Main
            </Link>
            <Link href="/dashboard/all-books" className="mx-[-0.65rem] flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
              <BookText className="h-4 w-4" />
                All Book
            </Link>
            <Link href="/dashboard/categories" className="mx-[-0.65rem] flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
              <LibraryBig className="h-4 w-4" />
                Categories
            </Link>
            <Link href="/dashboard/add-book" className="mx-[-0.65rem] flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
              <BookKey className="h-4 w-4" />
                Add Book
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="w-full flex-1">
        <h1>My Book</h1>
      </div>

      <Button variant="secondary" className="rounded-full">
        <UserButton />
      </Button>

    </header>
  )
}