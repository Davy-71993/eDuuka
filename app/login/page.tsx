import React from 'react';
import Form from './form';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


const Page = async() => {
  const supabase = createClient(cookies())
  const { data } = await supabase.auth.getUser()
  if(data.user){
    return redirect('/')
  }
  return (
    <div className='w-full flex justify-center items-center'>
      <Form />
    </div>
  );
};

export default Page;
