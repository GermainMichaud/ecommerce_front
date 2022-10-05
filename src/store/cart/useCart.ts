import { useEffect } from 'react';

import { useAppSelector } from '../hooks';
import {
  selectError,
  selectIsValid,
  selectItems,
  selectLoading,
  selectTotal,
} from './cartSlice';

const useCart = () => {
  const items = useAppSelector(selectItems);
  const total = useAppSelector(selectTotal);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const isValid = useAppSelector(selectIsValid);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  return {
    items,
    total,
    isLoading,
    isValid,
    error,
  };
};

export default useCart;
