
import { Product } from '@/lib/types'
import { Locate, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  item: Product
}


export default function ProductCard({item}: Props) {
  return (
    <Link href={`/view/${ item.id }`} className="hover:border p-2 hover:text-foreground rounded-[10px] w-full bg-primary-foreground flex flex-col space-y-4">
        <Image 
          src={item.image} 
          width={300}
          height={400}
          alt='Product Image'
          className="aspect-[1/1] h-auto w-full object-cover" />
        <div className="p-3 flex flex-col text-base space-y-1">
            <h6>{ item.title }</h6>
            <h4 className='text-bold font-bold text-left'>$ { item.price }</h4>
            <p>{ item.description }</p>
            <p className='flex scale-x-2'><MapPin size={30} /><span className='pt-1'>{item.location }</span> </p>
        </div>
    </Link>
  )
}