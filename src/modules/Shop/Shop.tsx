import Product, { ProductProps } from './components/Product/Product';

export type ShopProps = {
  products: ProductProps[];
};
const Shop = ({ products }: ShopProps) => {
  return (
    <div className='mt-20 h-full w-full flex'>
      <aside className='flex flex-col items-center w-96 h-full'>
        <h1 className='text-3xl font-bold text-theme-500'>Categories</h1>
        <ul className='flex flex-col items-center space-y-2'>
          <li className='text-lg text-theme-500 hover:text-theme-400 cursor-pointer'>
            Category 1
          </li>
          <li className='text-lg text-theme-500 hover:text-theme-400 cursor-pointer'>
            Category 2
          </li>
          <li className='text-lg text-theme-500 hover:text-theme-400 cursor-pointer'>
            Category 3
          </li>
          <li className='text-lg text-theme-500 hover:text-theme-400 cursor-pointer'>
            Category 4
          </li>
        </ul>
      </aside>
      <section className='flex flex-col items-center w-full'>
        <div>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
