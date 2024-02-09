import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode,
    className?: string
}

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div className={clsx('w-full h-fit px-4 sm:px-8 md:px-16', props.className)}>
      { props.children }
    </div>
  );
};

export default Container;
