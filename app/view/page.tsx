import Container from "@/components/Container"
import FadingLine from "@/components/parts/FadingLine"
import ProductCard from "@/components/parts/ProductCard"
import { Products } from "@/lib/dami-api"
import { Product } from "@/lib/types"

export default function ShopingPage() {
  const products: Product[] = Products 
  return (
    <Container>
      <h1 className="text-2xl mt-5">Browse through the top quality</h1>
      <FadingLine />
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5">
        {
          products.map((it, i) =>(
            <ProductCard item={it} key={i} />
          ))
        }
      </div>
    </Container>
  )
}