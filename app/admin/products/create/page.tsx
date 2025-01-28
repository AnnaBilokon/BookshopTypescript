
import { faker } from '@faker-js/faker';
import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import { createProductAction } from '@/utils/actions';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CheckboxInput from '@/components/form/CheckBoxInput';
import { SubmitButton } from '@/components/form/Buttons';

function CreateProductPage() {
const title = faker.book.title();
  const author = faker.book.author();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
	  <FormContainer action={createProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <FormInput
              type='text'
              name='name'
              label='title'
              defaultValue={title}
            />
            <FormInput
              type='text'
              name='author'
              label='author'
              defaultValue={author}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name='description'
            labelText='product description'
            defaultValue={description}
          />
          <div className='mt-6'>
            <CheckboxInput name='featured' label='featured' />
          </div>

          <SubmitButton text='Create Product' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProductPage;