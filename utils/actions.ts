'use server'
import db from '@/utils/db';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const renderError = (error: unknown): { message: string } => {
	console.log(error);
	return {
	  message: error instanceof Error ? error.message : 'An error occurred',
	};
  };
  
  const getAuthUser = async () => {
	const user = await currentUser();
	if (!user) {
	  throw new Error('You must be logged in to access this route');
	}
	return user;
  };

export const fetchFeaturedProducts = async () => {
	const products = await db.product.findMany({
		where: {
			featured: true,
		},
	})
	return products;
}

export const fetchAllProducts = async ({ search = '' }:{search:string}) => {
	return db.product.findMany({
		where: {
			OR: [
				{title:{contains:search, mode:'insensitive'}},
				{author:{contains:search, mode:'insensitive'}},
			]
			
		},
		orderBy: {
			createdAt:'desc',
		}
	})
}


export const fetchSingleProduct = async (productId: string) => {
	const product = await db.product.findUnique({
	  where: {
		id: productId,
	  },
	});
	if (!product) {
	  redirect('/products');
	}
	return product;
  };

  export const createProductAction = async (
	prevState: Record<string, unknown>,
	formData: FormData
  ): Promise<{ message: string }> => {
	const user = await getAuthUser();
	
	try {
		const title = formData.get('title') as string
		const author = formData.get('author') as string
		const price = Number(formData.get('price') as string)
		const image = formData.get('image') as File;
		const description = formData.get('description') as string
		const featured = Boolean(formData.get('featured') as string)

		await db.product.create({
			data: {
			  title,
			  author,
			  price,
			  image: '/images/product-1.jpg',
			  description,
			  featured,
			  clerkId: user.id,
			},
		  });

return{message:'product created'};
	} catch (error) {
		return renderError(error);
	}
  };