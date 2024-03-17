
import { QuoteIcon } from 'lucide-react';
import React from 'react';

interface EmptyListProps {
    listName?: string
}

const EmptyList: React.FC<EmptyListProps> = ({ listName="data" }) => {
  return (
    <div className='w-full h-[50vh] flex justify-center items-center'>
      <div className="w-fit text-muted-foreground flex flex-col gap-5 items-center">
        <QuoteIcon size={50}/>
        <p className="text-2xl font-thin">
            No { " "+ listName + " " } was found... 
        </p>
      </div>
    </div>
  );
};

export default EmptyList;
