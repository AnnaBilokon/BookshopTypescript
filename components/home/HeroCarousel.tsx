import Image from 'next/image'
import React from 'react'
import image from '../../app/images/hero_new.png'

export default function HeroCarousel() {
  return (
	<div>
	  <Image src={image} alt='hero_image'  width={800} height={1000} sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' priority className='rounded w-full object-contain transform group-hover:scale-110 transition-transform duration-500'/>
	</div>
  )
}
