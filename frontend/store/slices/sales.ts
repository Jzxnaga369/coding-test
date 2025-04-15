import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Sale {
  id: number;
  product: string;
  quantity: number;
}

interface SalesState {
  sales: Sale[];
  loading: boolean;
  error: string | null;
}

const initialState: SalesState = {
  sales: [],
  loading: false,
  error: null,
};

export const fetchSales = createAsyncThunk<Sale[], void, { rejectValue: string }>(
  'sales/fetchSales',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8000/api/sales');
      if (!response.ok) {
        return rejectWithValue('Failed to fetch sales');
      }
      const data = await response.json();
      return data.sales || [];
    } catch (error) {
      return rejectWithValue('Error fetching sales');
    }
  }
);

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSales.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSales.fulfilled, (state, action) => {
        state.loading = false;
        state.sales = action.payload;
      })
      .addCase(fetchSales.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export default salesSlice.reducer;