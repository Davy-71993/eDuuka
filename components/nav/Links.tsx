import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import React from 'react';

interface LinksProps {}

const Links: React.FC<LinksProps> = async(props) => {
    const supabase = createClient(cookies())
    const { data } = await supabase.auth.getUser()
    if(!data.user){
        return null
    }
  return (
    <div className=' hidden sm:flex gap-5'>
        
    </div>
  );
};

export default Links;
