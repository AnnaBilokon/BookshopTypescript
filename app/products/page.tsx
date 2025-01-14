import ProductsContainer from '@/components/products/ProductsContainer';

type SearchParams = Promise<{ layout?: string; search?: string}>

async function ProductsPage(props: {
	
	searchParams: SearchParams
  }
) {
const searchParams = await props.searchParams
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
export default ProductsPage;