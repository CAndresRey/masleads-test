import Button from '@/modules/CommonComponents/Button/Button';
import { OnSaleProps } from '@/modules/Home/components/OnSale/OnSale';
import Slider from '../Slider/Slider';

export type ProductProps = Omit<OnSaleProps, 'imageSrc'> & {
  images: string[];
  onClickaddToCart: (arg0: number) => void;
};
// Componente Product
const Product = ({
  images,
  currentPrice,
  id,
  onClickProduct,
  onClickaddToCart,
  productTitle,
}: ProductProps) => {
  const handleClickProduct = (
    id: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const target = event.target as HTMLElement;
    if (event && target && !target.closest('button')) {
      onClickProduct(id);
    }
  };

  return (
    <div className='bg-theme-50 p-4 rounded-lg shadow-md mt-2 flex cursor-pointer'>
      <div className='w-36'>
        <Slider images={images} price={currentPrice.toString()} size={'400px'} />
      </div>
      <div
        className='w-full ml-4 space-y-4'
        onClick={(event) => handleClickProduct(id, event)}
      >
        <h2 className='text-xl font-bold text-theme-500'>{productTitle}</h2>
        <Button
          theme='primary'
          onClick={() => onClickaddToCart(id)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
