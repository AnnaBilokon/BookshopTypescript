import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { LucideShoppingCart } from 'lucide-react'

export default function CartButton() {
	const numItemsInCart = 9
  return (
	<Button asChild variant='outline' size='icon' className='flex p-3 justify-center items-center relative'>
		<Link href='/cart'>
		<LucideShoppingCart/>
		<span className='absolute -top-3 -right-3 bg-primary rounded-full h-6 w-6 flex justify-center items-center text-white'>
			{numItemsInCart}
		</span>
		</Link>
	</Button>
  )
}
