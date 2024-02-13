import products from '@/api/products.json';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
};

type ShoppingState = {
  products: Product[];
  cart: Product[];
};

const initialState: ShoppingState = {
  products: products.map((product) => ({
    ...product,
    image: product.images[0],
    category: product.category.name,
    quantity: 0,
  })),
  cart: [],
};

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<number>) {
      const product = products.find((product) => product.id === action.payload);
      if (product) {
        state.cart.push({
          ...product,
          image: product.images[0],
          quantity: 0,
          category: product.category.name,
        });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((product) => product.id !== action.payload);
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const index = state.cart.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        state.cart[index].quantity += 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity } = shoppingSlice.actions;
export default shoppingSlice.reducer;
