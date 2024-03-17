
import Container from "@/components/Container";
import SearchBar from "@/components/parts/SearchBar";
import CategoryCard from "@/components/parts/CategoryCard";
import { Categories, Products } from "@/lib/dami-api";
import ProductCard from "@/components/parts/ProductCard";
import FadingLine from "@/components/parts/FadingLine";
import { Suspense } from "react";
import { HScroll } from "@/components/parts/HScroll";
import Link from "next/link";
import ItemsList from "@/components/parts/ItemsList";

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
          <Link href="/categories" className="text-2xl my-5 hover:underline">Popular Categories:</Link>
          <FadingLine/>
          <HScroll />
        </div>
        <div className="my-5">
          <Link href="/view" className="text-2xl my-5 hover:underline">Top Selling Items:</Link>
          <FadingLine/>
          <ItemsList products={Products} />
        </div>
      </Container>
    </>
  );
}
