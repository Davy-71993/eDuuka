
import Container from "@/components/Container";
import ItemsList from "@/components/parts/ItemsList";
import { Button } from "@/components/ui/button";
import { Products } from "@/lib/dami-api";
import { MapPin, MessageCircle, PhoneCall, Video } from "lucide-react";
import Image from "next/image";

type Props = {
  params: any
}

export default function ItemPage({ params }: Props) {
  const products = Products
  const { itemId } = params
  const product = products[0]
  return (
    <Container>
      <div className='grid grid-cols-6'>
        <div className="col-span-6 sm:col-span-2">
          <Image 
            src={product?.image} 
            height={100} width={1000} 
            className="w-full h-auto"
            alt="Product Image" />
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3 sm:pl-10 mt-5 sm:mt-0">
          <h4 className="text-2xl font-bold">{ product?.title }</h4>
          <p className="text-base">{ product?.description }</p>
          <h4 className="text-4xl font-bold my-3">$ { product?.price }</h4>
          <p className="border p-3 text-center my-5">
            Market price  $ 
            <span className="ml-10">{ product?.price - 10} - { product?.price + 10 }</span>
          </p>
          <div className="bg-primary-foreground p-5 flex flex-col sm:flex-row">
            <Image src='/images/gfgh.png' alt="Seller Image" width={100} height={10}
              className="w-full h-auto max-w-[200px] max-h-[200px] self-center"  />
            <div className="pl-3 w-full px-10">
              <h4 className="text-lg font-bold text-center">Top Phone Seller</h4>
              <p className="mt-5">Best deals in smart phones, laotops and computer accessories</p>
              <p className="my-5 flex space-x-5"><span><PhoneCall/></span><span>+256777921033</span></p>
              <p className="my-5 flex space-x-5"><span><MessageCircle/></span><span>+256777921033</span></p>
              <div className="flex space-x-5">
                <Button variant={'outline'} className="rounded flex space-x-5 line-clamp-1"><Video /><span className="line-clamp-1">Call now!</span></Button>
                <Button variant={'outline'} className="rounded flex space-x-5 line-clamp-1"><MapPin /><span className="line-clamp-1">Find on map!</span></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 mt-5 border-r p-5 w-full lg:col-span-1"></div>
        <div className="col-span-6 py-5 border-t border-b min-h-[20vh] mt-5 rounded">
          <h2 className="text-2xl">More about this item</h2>
          <div className="flex flex-wrap py-5">
            {
              [2,3,4,5,6,7,8,9,10].map((w,i) => (
                <div className="p-3 m-2" key={i}>
                  <p className="text-sm">Condition</p>
                  <p className="font-bold">Pre-owned</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-span-6 mt-5">
        <h2 className="text-2xl">More of similar items</h2>
            <ItemsList products={products} />
        </div>
      </div>
    </Container>
  )
}