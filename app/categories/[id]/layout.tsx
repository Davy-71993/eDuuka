import Container from '@/components/Container';
import FadingLine from '@/components/parts/FadingLine';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <FadingLine/>
      <div className="grid lg:grid-cols-5 gap-5 w-full">
        <div className="hidden lg:block lg:col-span-1">
          <div className="border-r w-full h-full max-h-screen">
            <h1 className="text-base font-bold">More Filters</h1>
          </div>
        </div>
        <div className="lg:col-span-4">
          { children }
        </div>
      </div>
    </Container>
  );
};

export default Layout;
