import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'Products',
  initialState: {
    value: [],
    Cart: localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [] 
    
  },
  reducers: {
    ProductReducer: (state, action) => {
      state.value = action.payload
    },
    CartReducer: (state, action) => {
      state.Cart = [...state.Cart, action.payload]
      localStorage.setItem("Cart", JSON.stringify(state.Cart))
    }
  }
})

// Action creators are generated for each case reducer function
export const { ProductReducer, CartReducer } = ProductSlice.actions

export default ProductSlice.reducer