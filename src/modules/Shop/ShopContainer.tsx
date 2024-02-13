import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../CommonComponents/Layout/Layout';
import Shop from './Shop';
import products from '@/api/products.json';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/modules/Home/slices/shoppingSlice';
import { useDrawer } from '@/hooks/useDrawer';
import { useEffect, useState } from 'react';
const ShopContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setShowDrawer } = useDrawer();
  const location = useLocation();
  const [filter, setFilter] = useState<string | null>(null);
  const [search, setSearch] = useState<string | null>(null);


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setFilter(queryParams.get('filter'));
    setSearch(queryParams.get('search'));
  }, [location.search]);

  const onClickProduct = (id: number) => {
    navigate(`/shop/${id}`);
  };
  const onClickaddToCart = (id: number) => {
    setShowDrawer(true);
    dispatch(addToCart(id));
  };
  const filteredProducts = products
  .filter((product) => 
    (!filter || isNaN(Number(filter)) || product.category.id === Number(filter)) &&
    (!search || product.title.toLowerCase().includes(search.toLowerCase()))
  );

  const productsWithOnClick = filteredProducts.map((product) => ({
    images: product.images,
    currentPrice: product.price,
    id: product.id,
    productTitle: product.title,
    onClickaddToCart: () => onClickaddToCart(product.id),
    onClickProduct: () => onClickProduct(product.id),
  }));

  return (
    <Layout>
      <Shop products={productsWithOnClick} />
    </Layout>
  );
};

export default ShopContainer;
