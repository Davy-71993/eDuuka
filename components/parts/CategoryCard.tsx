
import { Category } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  item: Category
}


export default function CategoryCard({item}: Props) {
  return (
    <Link href={`/c/${ item.id }`} className="hover:text-blue-700 min-w-20 rounded-[10px] h-full w-full bg-primary-foreground flex flex-col space-y-4">
        <Image src={item.image} width={1000} height={10} alt='Category Image' className={`h-3/4 w-full ${item.name ? 'rounded-t-[10px]' : 'rounded-[10px]'}`} />
        <h6 className='text-center text-sm line-clamp-1 pb-5'>{ item.name }</h6>
    </Link>
  )
}