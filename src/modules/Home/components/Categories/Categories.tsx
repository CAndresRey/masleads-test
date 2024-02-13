export type Category = {
  categories: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  }[];
  onClickCategory: (arg0: number) => void;
};
const Categories = ({ categories, onClickCategory }: Category) => {
  return (
    <div className='flex flex-1 flex-wrap gap-6 w-full px-4'>
      {categories.map((category, index) => (
        <div key={index} onClick={() => onClickCategory(category.id)}>
          <div className='flex justify-center cursor-pointer'>
            <div className='flex rounded-lg shadow-lg bg-white max-w-sm bg-theme-50'>
              <picture>
                <img
                  src={category.image}
                  alt={category.name}
                  className='aspect-square object-cover rounded-l-lg w-24'
                  loading='lazy'
                  decoding='async'
                />
              </picture>
              <div className='p-6'>
                <h1 className='text-xl font-bold text-theme-500'>
                  {category.name}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
