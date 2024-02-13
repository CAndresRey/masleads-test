import Slider from '../Shop/components/Slider/Slider';

export type ProductProps = {
  images: string[];
  title: string;
  description: string;
  price: number;
};

const Product = ({ description, images, price, title }: ProductProps) => {
  return (
    <div className='mt-20 w-full rounded overflow-hidden shadow-lg flex'>
      <Slider images={images} price={String(price)} size='800px' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
    </div>
  );
};

export default Product;
