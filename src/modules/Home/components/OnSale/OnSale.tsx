export type OnSaleProps = {
  id: number;
  imageSrc: string;
  productTitle: string;
  currentPrice: number;
  onClickProduct: (arg0: number) => void;
};

const OnSale = ({
  id,
  imageSrc,
  productTitle,
  currentPrice,
  onClickProduct,
}: OnSaleProps) => {
  return (
    <div
      className='bg-theme-50 rounded-lg shadow-md p-4 mt-4 cursor-pointer'
      onClick={() => onClickProduct(id)}
    >
      <div className='flex flex-col justify-center items-center gap-4'>
        <picture>
          <img
            loading='lazy'
            decoding='async'
            src={imageSrc}
            className='object-contain object-center w-64 h-64  aspect-square rounded-lg'
            alt=''
          />
        </picture>
        <div className='mt-4 w-full px-4'>
          <div className='rounded-full w-fit px-2 py-1.5 bg-theme-200 text-theme-500 text-xs font-bold'>
            Discount
          </div>
          <h1 className='text-xl font-bold text-theme-500'>{productTitle}</h1>
          <h2>${currentPrice}</h2>
        </div>
      </div>
    </div>
  );
};

export default OnSale;
