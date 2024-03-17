import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/types';
import EmptyList from './EmptyList';

interface ItemsListProps {
    products?: Product[]
}

const ItemsList: React.FC<ItemsListProps> = ({ products = [] }) => {
    
    if(products.length === 0){
        return (<EmptyList />)
    }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {   products.length &&
            products.map((item, index) => (
                // Product card
                <ProductCard item={item}  key={index}/>
            ))
        }
    </div>
  );
};

export default ItemsList;
