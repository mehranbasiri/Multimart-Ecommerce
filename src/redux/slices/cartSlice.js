import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartitems: [],
  totalAmount: 0,
  totalQuantiy: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartitems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantiy++;

      if (!existingItem) {
        state.cartitems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartitems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
    
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;