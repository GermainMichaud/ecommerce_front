import { Link } from '@tanstack/react-location';
import { FC } from 'react';

import { IProduct } from '../interfaces';
import { formatPrice } from '../utils';
import { Card, CardCTA, CardImage, CardTitle } from './ui/Card';

type ProductCardProps = {
  product: IProduct;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <CardImage src={product.image} alt={product.name} />
      <CardTitle to={`/products/${product.slug}`} title={product.name}>
        {product.name}
      </CardTitle>
      <CardCTA to={`/products/${product.slug}`} title={product.name}>
        à partir de{' '}
        {formatPrice(
          product.price_start,
          navigator.language,
          (product.seller?.currency as string) || 'EUR',
        )}
      </CardCTA>
    </Card>
  );
};

export default ProductCard;
