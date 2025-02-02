import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import { fetchSingleProduct } from '@/utils/actions';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/single-product/AddToCard';
import ProductRating from '@/components/single-product/ProductRating';

  


  type Params = Promise<{ id: string }>

async function SingleProductPage({ params }: { params: Params }) {
  const product = await fetchSingleProduct((await params).id);
  const { title, image, author, description, price } = product;
  const kronosAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={product.title} />
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
   
        <div className='flex items-center justify-center relative'>
          <Image
            src={image}
            alt={title}
			width={360}
			height={420}
            sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
            priority
            className='rounded-md object-cover'
          />
        </div>
        
        <div>
          <div className='flex gap-x-8 items-center'>
            <h1 className='capitalize text-3xl font-bold'>{title}</h1>
            <FavoriteToggleButton  />
          </div>
          <ProductRating />
          <h4 className='text-xl mt-2'>{author}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded-md'>
            {kronosAmount}
          </p>
          <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
          <AddToCart />
        </div>
      </div>
    </section>
  );
}
export default SingleProductPage;