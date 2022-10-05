import { FC, useEffect } from 'react';

import ProductCard from '../components/ProductCard';
import Spin from '../components/Spin';
import { CardGrid } from '../components/ui/Card';
import { Button } from '../components/ui/common/Button';
import { Wrapper } from '../components/ui/common/Wrapper';
import { Form } from '../components/ui/form/Form';
import { Input } from '../components/ui/form/Input';
import { EmptyObject } from '../interfaces';
import { useGetProductsQuery } from '../store/products/productsHook';

const ProductsPage: FC<EmptyObject> = () => {
  const { error, isLoading, data: products, refetch } = useGetProductsQuery();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      {error && <div>Something went wrong</div>}
      {isLoading && <Spin full />}
      <CardGrid>
        {Array.isArray(products) &&
          products.map((product) => <ProductCard key={product._id} product={product} />)}
      </CardGrid>
    </>
  );
};

export default ProductsPage;
