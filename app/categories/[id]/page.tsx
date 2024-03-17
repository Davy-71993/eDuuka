
import Container from "@/components/Container"
import ItemsList from "@/components/parts/ItemsList"
import { Products } from "@/lib/dami-api"

export default function ShopingPage() {
  
  return (
      <ItemsList products={Products} />
  )
}