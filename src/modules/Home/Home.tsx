import Categories from './components/Categories/Categories';
import OnSale from './components/OnSale/OnSale';
import useHome from './hooks/useHome';

const Home = () => {
  const { getrandomProduct, onClickProduct, categories, onClickCategory } =
    useHome();
  const { id, images, title, price } = getrandomProduct();
  return (
    <div className='mt-16 h-full '>
      <div>
        <section className='news pt-4'>
          <img
            src='https://http2.mlstatic.com/D_NQ_680077-MLA73837229121_012024-OO.webp'
            alt='banner'
            className='object-contain object-center aspect-auto w-full'
          />
        </section>
        <section className='flex h-fit w-full gap-6 ml-4'>
          <div className='products pt-4 min-w-96'>
            <h1 className='text-3xl font-bold text-theme-500'>
              Products On Sale
            </h1>
            <OnSale
              id={id}
              imageSrc={images[0]}
              productTitle={title}
              currentPrice={price}
              onClickProduct={onClickProduct}
            />
          </div>
          <div className='onsale space-y-4 pt-4 w-fit'>
            <h1 className='text-3xl font-bold text-theme-500'>Categories</h1>
            <Categories
              categories={categories}
              onClickCategory={onClickCategory}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
