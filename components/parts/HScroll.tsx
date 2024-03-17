
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Categories } from "@/lib/dami-api"
import CategoryCard from "./CategoryCard"

export function HScroll() {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {Categories.map((ct) => (
          <CategoryCard key={ct.id} item={ct} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
