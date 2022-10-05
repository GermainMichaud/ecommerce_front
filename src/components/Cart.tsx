import { useNavigate } from '@tanstack/react-location';
import { FC, useEffect } from 'react';

import { EmptyObject } from '../interfaces';
import { validateCart } from '../store/cart/cartRequests';
import {
  addToCart,
  removeFromCart,
  removeItemFromCart,
  resetCartStatus,
} from '../store/cart/cartSlice';
import useCart from '../store/cart/useCart';
import { useAppDispatch } from '../store/hooks';
import { formatPrice } from '../utils';
import ButtonLoading from './ButtonLoading';
import Spin from './Spin';
import {
  CartCAT,
  CartEmpty,
  CartItem,
  CartItemError,
  CartItemImage,
  CartItemLeft,
  CartItemLeftDetails,
  CartItemName,
  CartItemPrice,
  CartItemQuantity,
  CartItemQuantityBtns,
  CartItemRight,
  CartItemTotal,
  CartList,
  CartTotal,
} from './ui/Cart';
import { Button, ButtonGhost, ButtonLink, ButtonRound } from './ui/common/Button';

const Cart: FC<EmptyObject> = () => {
  const navigate = useNavigate();
  const { items, total, isLoading, error, isValid } = useCart();
  const dispatch = useAppDispatch();

  const handleValidateCart = () => {
    void dispatch(
      validateCart({
        items,
      }),
    );
  };

  useEffect(() => {
    return () => {
      dispatch(resetCartStatus());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isValid) {
      navigate({
        to: '/cart/checkout',
        from: { pathname: 'cart' },
      });
    }
  }, [isValid, navigate]);

  return (
    <>
      {items.length ? (
        <>
          <CartList>
            {items.map((item) => (
              <CartItem
                key={item._id}
                className={error?.error && error.error[item._id] ? 'error' : ''}
              >
                <CartItemLeft>
                  <CartItemImage src={item.image} alt={item.name} />
                  <CartItemLeftDetails>
                    <CartItemName>{item.name}</CartItemName>
                    <CartItemQuantity>
                      <CartItemPrice>
                        {formatPrice(item.price as number, navigator.language, 'EUR')}
                      </CartItemPrice>
                      x{item.quantity}
                    </CartItemQuantity>
                  </CartItemLeftDetails>
                </CartItemLeft>
                <CartItemQuantityBtns>
                  <ButtonRound
                    size="25px"
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch(removeFromCart(item));
                      }
                    }}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </ButtonRound>
                  <ButtonRound
                    size="25px"
                    onClick={() => dispatch(addToCart({ item, quantity: 1 }))}
                  >
                    +
                  </ButtonRound>
                </CartItemQuantityBtns>
                <CartItemRight>
                  <CartItemTotal>
                    {formatPrice(item.quantity * item.price, navigator.language, 'EUR')}
                  </CartItemTotal>
                  <ButtonGhost
                    onClick={() => dispatch(removeItemFromCart(item))}
                    color="red"
                  >
                    Supprimer
                  </ButtonGhost>
                </CartItemRight>
                {error && error.error && error.error[item._id] && (
                  <CartItemError>{error.error[item._id]}</CartItemError>
                )}
              </CartItem>
            ))}
          </CartList>
          <CartTotal>Total: {formatPrice(total, navigator.language, 'EUR')}</CartTotal>
          <CartCAT>
            <ButtonLoading
              onClick={handleValidateCart}
              bgColor="#399fb6"
              color="#fff"
              size="150px"
              block
              text="Valider le panier"
              isLoading={isLoading}
            />
          </CartCAT>
        </>
      ) : (
        <CartEmpty>
          <p>Votre panier est vide</p>
          <ButtonLink
            to="/products"
            title="Page des produits"
            bgColor="#399fb6"
            color="#fff"
          >
            Ajouter des produits
          </ButtonLink>
        </CartEmpty>
      )}
    </>
  );
};

export default Cart;
