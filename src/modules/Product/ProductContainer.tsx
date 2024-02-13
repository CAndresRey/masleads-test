import Layout from '../CommonComponents/Layout/Layout';
import Product from './Product';
import products from '@/api/products.json';
import { useParams } from 'react-router-dom';

const ProductContainer = () => {
  const { id } = useParams();
  const productId = Number(id);

  const productToShow = products.find((p) => p.id === productId);
  return (
    <Layout>
      {productToShow && (
        <Product
          description={productToShow?.description}
          images={productToShow?.images}
          title={productToShow?.title}
          price={productToShow?.price}
        />
      )}
    </Layout>
  );
};

export default ProductContainer;
