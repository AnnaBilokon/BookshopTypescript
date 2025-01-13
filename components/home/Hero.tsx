import React from 'react'
import HeroCarousel from './HeroCarousel'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
	<section className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
	  <div>
<h1 className='max-w-2xl font-semibold text-4xl tracking-tight sm:text-6xl'>
	What Will You Read Next?
</h1>
<p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
Your journey begins here. Explore to find your new favorite book
</p>
<Button asChild size='lg' className='mt-10 text-lg w-56 hover:text-black'>
	<Link href='/products'>Explore</Link>
	</Button>	  
	</div>
	  <HeroCarousel/>
	</section>
  )
}
