import Container from '@/components/Container';
import Filters from '@/components/Filters';
import FadingLine from '@/components/parts/FadingLine';
import ItemsList from '@/components/parts/ItemsList';
import { Products } from '@/lib/dami-api';
import React from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  return (
    <Container>
      <p className="text-sm text-muted-foreground">
        { Products.length + " " } search results
      </p>
      <FadingLine/>
      <div className="grid lg:grid-cols-5 gap-5">
        <div className="hidden lg:block lg:col-span-1">
          <div className="w-full h-full max-h-screen">
            <Filters/>
          </div>
        </div>
        <div className="col-span-5 lg:col-span-4">
          <ItemsList products={Products} />
        </div>
      </div>
    </Container>
  );
};

export default Page;
