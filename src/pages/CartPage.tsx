import { FC } from 'react';

import Cart from '../components/Cart';
import { EmptyObject } from '../interfaces';

const CartPage: FC<EmptyObject> = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
