"use server";

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { title } from 'process';
import { z } from 'zod';



// if(!supabaseKey){
//   throw new Error ("Missing SUPABASE_KEY in environment variables")
// }
const supabase = createClient();
const FormSchema = z.object({
  id: z.string(),
  title: z.string(),
  genre: z.string(),
  author: z.string(),
  reading_status: z.enum(['reading', 'want to read', 'finished'], {
    invalid_type_error: 'Please select reading status.',
  }),
  date: z.string(),
});

const CreateBook = FormSchema.omit({
  id:true, 
  date:true
})

export type State = {
  errors?:{
    title?:string[];
    author?:string[];
    genre?:string[];
    reading_status?:string[]
  };
  message?:string | null;
  success?: boolean;
}

export async function createBook( prevState: State, formData: FormData){
  const validatedFields = CreateBook.safeParse({
    title: formData.get('title')?.toString() || '',
    genre: formData.get('genre')?.toString() || '',
    author: formData.get('author')?.toString() || '',
    reading_status: formData.get('status')?.toString() || ''
  });

  if (!validatedFields.success){
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to enter the book'
    }
  }

  console.log(validatedFields)

  const { data, error } = await supabase
  .from('books')
  .insert([
    {
      title: 'title',
      author: 'author',
      genre: 'genre',
      reading_status: 'status'
    }
  ])

  if (error){
    console.error("Error creating book list :", error);
    return { success: false, message: 'Failed to create book list'};
  }

  console.log(data);

  revalidatePath('/main');
  redirect('/main')
}