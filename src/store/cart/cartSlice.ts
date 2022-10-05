import { createSlice } from '@reduxjs/toolkit';

import { IVariant } from '../../interfaces';
import { RootState } from '..';
import { validateCart } from './cartRequests';

export interface ICartState {
  items: Partial<IVariant>[];
  total: number;
  loading: boolean;
  error: Record<string, unknown> | null;
  isValid: boolean;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as Partial<IVariant>[],
    total: 0,
    loading: false,
    error: null,
    isValid: false,
  } as ICartState,
  reducers: {
    addToCart(state, action) {
      const { item, quantity } = action.payload as {
        item: Partial<IVariant>;
        quantity: number;
      };
      const existItem = state.items.find((x) => x._id === item._id);
      if (existItem) {
        state.items = state.items.map((x) =>
          x._id === existItem._id
            ? { ...existItem, quantity: (existItem.quantity || 1) + quantity }
            : x,
        );
      } else {
        state.items = [...state.items, { ...item, quantity }];
      }
      state.total = state.items.reduce(
        (a, c) => a + (c.quantity || 1) * (c.price || 0),
        0,
      );
    },
    removeFromCart(state, action) {
      const item = action.payload as Partial<IVariant>;
      const existItem = state.items.find((x) => x._id === item._id);
      if (existItem) {
        state.items = state.items.map((x) =>
          x._id === existItem._id
            ? { ...existItem, quantity: (existItem.quantity || 1) - 1 }
            : x,
        );
      }
      state.items = state.items.filter((x) => x.quantity && x.quantity > 0);
      state.total = state.items.reduce(
        (a, c) => a + (c.quantity || 1) * (c.price || 0),
        0,
      );
    },
    removeItemFromCart(state, action) {
      const item = action.payload as Partial<IVariant>;
      state.items = state.items.filter((x) => x._id !== item._id);
      state.total = state.items.reduce(
        (a, c) => a + (c.quantity || 1) * (c.price || 0),
        0,
      );
    },
    setQuantity(state, action) {
      const { _id, quantity } = action.payload as { _id: string; quantity: number };
      const existItem = state.items.find((x) => x._id === _id);
      if (existItem) {
        state.items = state.items.map((x) =>
          x._id === existItem._id ? { ...existItem, quantity: quantity } : x,
        );
      }
      state.items = state.items.filter((x) => x.quantity && x.quantity > 0);
      state.total = state.items.reduce(
        (a, c) => a + (c.quantity || 1) * (c.price || 0),
        0,
      );
    },
    resetCart(state) {
      state.items = [];
      state.total = 0;
    },
    resetCartStatus(state) {
      state.error = null;
      state.isValid = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(validateCart.fulfilled, (state) => {
        state.loading = false;
        state.isValid = true;
      })
      .addCase(validateCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action;
      });
  },
});

export const selectItems = (state: RootState) => state.cart.items;
export const selectTotal = (state: RootState) => state.cart.total;
export const selectLoading = (state: RootState) => state.cart.loading;
export const selectError = (state: RootState) => state.cart.error;
export const selectIsValid = (state: RootState) => state.cart.isValid;
export const selectTotalProducts = (state: RootState) =>
  state.cart.items.reduce((a, c) => a + (c.quantity || 1), 0);

export const {
  addToCart,
  removeFromCart,
  removeItemFromCart,
  resetCart,
  resetCartStatus,
  setQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
