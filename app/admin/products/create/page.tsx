
import { Button } from '@/components/ui/button';
import { faker } from '@faker-js/faker';
import FormInput from '@/components/form/FormInput';

const createProductAction = async (formData: FormData) => {
  'use server';
  const name = formData.get('name') as string;
  console.log(name);
};

function CreateProductPage() {
const name = faker.book.title();
//   const author = faker.book.author();
//   const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
        <form action={createProductAction}>
          <div className='mb-2'>
			<FormInput type='text' name='name' label='product name' defaultValue={name}/>
      
          </div>
          <Button type='submit' size='lg'>
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
export default CreateProductPage;