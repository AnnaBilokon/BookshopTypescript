import React from 'react'
import { Button } from '../ui/button'
import logo from '../../public/Logo.svg'
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
	<Button size='lg' variant="ghost" className='dark:bg-primary dark:pt-2' asChild>
	  <Link href='/'>
	  <Image src={logo} alt="logo" />
	  </Link>
	</Button>
  )
}
