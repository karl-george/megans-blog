'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

interface pageProps {}

function page({}: pageProps) {
  const form = useForm();

  return (
    <div className='container flex flex-col text-primary h-[77vh] text-center mt-14 items-center max-w-xl'>
      <h1 className='text-5xl mb-14'>Contact Me</h1>
      <Form {...form}>
        {/* Name */}
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='flex gap-2 flex-col w-full mb-12'>
              <FormLabel className='text-primary text-lg'>Name</FormLabel>
              <FormControl>
                <Input type='text' className='max-w-xl mx-auto' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email */}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='flex gap-1 flex-col w-full mb-12'>
              <FormLabel className='text-primary text-lg'>Email</FormLabel>
              <FormControl>
                <Input type='text' className='max-w-xl mx-auto' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Message */}
        <FormField
          control={form.control}
          name='desc'
          render={({ field }) => (
            <FormItem className='flex gap-1 flex-col w-full mb-12'>
              <FormLabel className='text-primary text-lg'>Message</FormLabel>
              <FormControl>
                <Textarea className='max-w-xl mx-auto' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Button */}
        {/* Don't want emails from this project so keep disabled */}
        <button
          className='py-4 px-8 bg-secondary text-primary cursor-pointer disabled:cursor-not-allowed self-end'
          disabled
        >
          Submit
        </button>
      </Form>
    </div>
  );
}

export default page;
