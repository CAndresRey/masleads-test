import  products  from '@/api/products.json';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Category = {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };

const useHome = () => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState<Category[]>([]);


  useEffect(() => {
    const uniqueCategories = products.reduce((acc: Category[], product) => {
      if (!acc.some((category) => category.name === product.category.name)) {
        acc.push(product.category);
      }
      return acc;
    }, []);

    setCategories(uniqueCategories);
  }, []);

    const getrandomProduct = () => {
        const randomIndex = Math.floor(Math.random() * products.length);
        return products[randomIndex];
    };

    const onClickProduct = (id: number) => {
        navigate(`/shop/${id}`);
    };

    const onClickCategory = (id: number) => {
        navigate(`/shop?filter=${id}`);
      };


    return {
        getrandomProduct,
        onClickProduct,
        onClickCategory,
        categories,
    };

}
export default useHome;