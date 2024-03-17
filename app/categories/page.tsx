import Container from '@/components/Container';
import CategoryCard from '@/components/parts/CategoryCard';
import FadingLine from '@/components/parts/FadingLine';
import { Categories } from '@/lib/dami-api';
import React from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  return (
    <Container>
        <p className="text-sm text-muted-foreground">Shop by Category</p>
        <FadingLine />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                Categories.map((item, index) => (
                // Category card
                <CategoryCard item={item} key={index} />
                ))
            }
        </div>
    </Container>
  );
};

export default Page;
