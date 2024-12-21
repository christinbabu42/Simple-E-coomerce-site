import { createSlice } from '@reduxjs/toolkit';

// Initial state for products
const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    // Action to add a product to the store
    addProduct: (state, action) => {
      state.push(action.payload); // Adds new product to the list
    },
    // Action to edit an existing product
    editProduct: (state, action) => {
      const { id, name, price } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.price = price;
      }
    },
  },
});

export const { addProduct, editProduct } = productsSlice.actions;
export default productsSlice.reducer;
