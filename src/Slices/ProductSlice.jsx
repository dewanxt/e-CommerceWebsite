import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'Products',
  initialState: {
    value: [],
    Cart: []
    
  },
  reducers: {
    ProductReducer: (state, action) => {
      state.value = action.payload
    },
    CartReducer: (state, action) => {
      state.Cart = [...state.Cart, action.payload]
      
    }
  }
})

// Action creators are generated for each case reducer function
export const { ProductReducer, CartReducer } = ProductSlice.actions

export default ProductSlice.reducer