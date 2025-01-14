import React from 'react'
import { Button } from '../ui/button';


export default function AddToCard({productId}:{productId:string}) {
  return (
<Button className='capitalize mt-8' size='lg'>
      add to cart
    </Button>
  )
}
