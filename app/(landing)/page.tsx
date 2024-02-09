
import Container from "@/components/Container";
import SearchBar from "@/components/parts/SearchBar";
import CategoryCard from "@/components/parts/CategoryCard";
import { Categories, Products } from "@/lib/dami-api";
import ProductCard from "@/components/parts/ProductCard";
import FadingLine from "@/components/parts/FadingLine";
import { Suspense } from "react";
import { HScroll } from "@/components/parts/HScroll";

export default async function Index() {
  
  return (
    <>
      <div className="bg-blue-700 -mt-4">
        <Container>
        <div className="animate-in w-full aspect-[2/1] md:aspect-[3/1] lg:aspect-[4/1] flex flex-col overflow-hidden">
          <div className="w-full pt-16 flex justify-center items-center mb-5">
            <Suspense><SearchBar className="-mt-10 py-2"  /></Suspense>
          </div>
          <h1 className="text-4xl md:text-6xl text-background font-bold text-center">Buy and Sell,</h1>
          <h1 className="text-center text-xl sm:text-2xl md:text-2xl text-background">Faster Smarter and Saffer</h1>
        </div>
        </Container>
      </div>
      <Container>
        <div className="my-5">
          <h1 className="text-2xl my-5">Popular Categories:</h1>
          <FadingLine/>
          <HScroll />
        </div>
        <div className="my-5">
          <h1 className="text-2xl my-5">Top Selling Items:</h1>
          <FadingLine/>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {
              Products.map((item, index) => (
                // Product card
                <ProductCard item={item}  key={index}/>
              ))
            }
          </div>
        </div>
      </Container>
    </>
  );
}
