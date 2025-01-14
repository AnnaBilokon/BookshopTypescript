import React from 'react'
import {FaHeart} from 'react-icons/fa'
import { Button } from '../ui/button'


// {productId}:{productId:string}
export default function FavoriteToggleButton() {
  return (
<Button size='icon' variant='outline' className='p-2 cursor-pointer bg-slate-100'>
	<FaHeart/>
</Button>
  )
}
