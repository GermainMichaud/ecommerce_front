import { Navigate, useMatch } from '@tanstack/react-location';
import { FC, useEffect, useState } from 'react';

import CartIcon from '../components/icons/CartIcon';
import Spin from '../components/Spin';
import { Button } from '../components/ui/common/Button';
import { Input } from '../components/ui/form/Input';
import { Select, SelectOption } from '../components/ui/form/Select';
import {
  ProductColorInput,
  ProductColorLabel,
  ProductColors,
  ProductCTA,
  ProductDescription,
  ProductDetails,
  ProductGalleryImgs,
  ProductImages,
  ProductMainImg,
  ProductName,
  ProductNearOutOfStock,
  ProductPrice,
  ProductQuantity,
  ProductSizes,
  ProductWrapper,
} from '../components/ui/ProductDetails';
import { EmptyObject, IVariant } from '../interfaces';
import { LocationGenerics } from '../routes';
import { addToCart } from '../store/cart/cartSlice';
import { useAppDispatch } from '../store/hooks';
import { useGetProductBySlugQuery } from '../store/products/productsHook';
import { formatPrice } from '../utils';

const ProductPage: FC<EmptyObject> = () => {
  const {
    params: { slug },
  } = useMatch<LocationGenerics>();
  const dispatch = useAppDispatch();
  const [selectedVariant, setSelectedVariant] = useState<IVariant | null>(null);
  const { isLoading, error, data: product } = useGetProductBySlugQuery(slug);
  const [selectedColor, setSelectedColor] = useState<string>(
    selectedVariant?.color?._id || '',
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    selectedVariant?.size?._id || '',
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string>(
    selectedVariant?.image || '',
  );

  useEffect(() => {
    if (product) {
      const defaultVariant =
        product.variants && product.variants.find((v) => v.isDefault);
      setSelectedVariant(defaultVariant || null);
      setSelectedColor(defaultVariant?.color?._id || '');
      setSelectedSize(defaultVariant?.size?._id || '');
    }
  }, [product]);

  useEffect(() => {
    setSelectedVariant(() => {
      const variant =
        (product?.variants &&
          product?.variants.find(
            (variant) =>
              variant.color._id === selectedColor && variant.size._id === selectedSize,
          )) ||
        null;
      if (variant && variant.image) {
        setSelectedImage(variant.image);
      }
      return variant;
    });
  }, [selectedColor, selectedSize, product]);

  const addToCartHandler = () => {
    const {
      _id,
      image,
      name,
      price,
      product: productId,
      sku,
    } = selectedVariant as IVariant;
    const item = {
      _id,
      image,
      name,
      price,
      productId,
      sku,
      sellerId: product?.seller?._id,
    };
    dispatch(addToCart({ item, quantity }));
  };

  if (error && error.status && error.status === 404) {
    return <Navigate to="/404" />;
  }

  return isLoading || !product || !selectedVariant ? (
    <Spin full />
  ) : (
    <ProductWrapper>
      <ProductImages>
        <ProductMainImg src={selectedImage} alt={product.name} />
        <ProductGalleryImgs>
          {product.images?.map((image) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              src={image}
              alt={product.name}
              key={image}
              className={selectedImage === image ? 'selected' : ''}
              onClick={() => {
                if (selectedImage !== image) {
                  setSelectedImage(image);
                }
              }}
            />
          ))}
        </ProductGalleryImgs>
      </ProductImages>
      <ProductDetails>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>
          {selectedVariant.description || product.description}
        </ProductDescription>
        <ProductPrice>
          Price:{' '}
          {formatPrice(
            selectedVariant.price,
            navigator.language,
            (product.seller?.currency as string) || 'EUR',
          )}
        </ProductPrice>
        <ProductColors>
          Couleur: {` `}
          {product.colors
            .reduce((acc, cur) => {
              // Fix a bug when seeding data...
              if (acc.find((color) => color._id === cur._id)) {
                return acc;
              }
              return [...acc, cur];
            }, [])
            .map((color) => (
              <ProductColorLabel
                key={color._id}
                color={color.code}
                className={selectedColor === color._id ? 'checked' : ''}
              >
                <ProductColorInput
                  type="radio"
                  name="color"
                  value={color._id}
                  checked={selectedColor === color._id}
                  onChange={(e) => setSelectedColor(e.target.value)}
                />
                <span></span>
              </ProductColorLabel>
            ))}
        </ProductColors>
        <ProductSizes>
          Taille:{' '}
          <Select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            {product.sizes
              .reduce((acc, cur) => {
                // Fix a bug when seeding data...
                if (acc.find((size) => size._id === cur._id)) {
                  return acc;
                }
                return [...acc, cur];
              }, [])
              .map((size) => (
                <SelectOption key={size._id} value={size._id}>
                  {size.name}
                </SelectOption>
              ))}
          </Select>
        </ProductSizes>
        <ProductQuantity>
          Quantité:
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
            min={1}
          />
        </ProductQuantity>
        {selectedVariant.quantity <= 10 && (
          <ProductNearOutOfStock>Faible stock</ProductNearOutOfStock>
        )}
        <ProductCTA>
          <Button bgColor="#399fb6" color="#fff" onClick={addToCartHandler}>
            Ajouter au panier <CartIcon color="#fff" size={'15'} />
          </Button>
        </ProductCTA>
      </ProductDetails>
    </ProductWrapper>
  );
};

export default ProductPage;
