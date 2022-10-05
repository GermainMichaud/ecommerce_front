import { createAsyncThunk } from '@reduxjs/toolkit';

import { IVariant } from '../../interfaces';
import api from '../../utils/api';

const validateCart = createAsyncThunk<{}, { items: Partial<IVariant>[] }>(
  'validate/cart',
  async (items) => {
    const response = await api.post('/carts/validate', items);
    return response.data;
  },
  {
    serializeError(x) {
      if (x.response.data) {
        return x.response.data;
      }
      return x;
    },
  },
);

export { validateCart };
