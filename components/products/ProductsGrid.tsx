import React from 'react'
import { Product } from '@prisma/client'
import Link  from 'next/link'
import  Image  from 'next/image'
import { Card, CardContent} from '../ui/card'
import { formatCurrency } from '@/utils/format'
import FavoriteToggleButton from './FavoriteToggleButton'


export default function ProductsGrid({products}:{products:Product[]}) {
  return (
  <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4'> {
	products.map((product)=>{
		const {title, price, image} = product
		const productId = product.id
		const dollarAmout = formatCurrency(price)
	
		return <article key ={productId} className='group relative'>
			<Link href={`/products/${productId}`}
			>
				<Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
					<CardContent className='p-4'>
						<div className='relative h-64 md:h-74 rounded overflow-hidden'>
							<Image src={image} alt={title} fill sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' priority className='rounded w-full object-contain transform group-hover:scale-110 transition-transform duration-500'/>
						</div>
						<div className='mt-4 text-center'>
<h2 className='text-lg capitalize'>{title}</h2>
<p className='text-muted-foreground mt-2'>{dollarAmout}</p>
						</div>
					</CardContent>
				</Card>
			</Link>
			<div className='absolute top-7 right-4 z-5'>
				<FavoriteToggleButton/>
			</div>
		</article>
	})
	}</div>)
	

}
