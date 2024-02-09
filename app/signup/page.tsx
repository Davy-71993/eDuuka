import React from 'react';
import Form from './form';

interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <Form />
    </div>
  );
};

export default Page;
