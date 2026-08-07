import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'Products',
  initialState: {
    value: []
  },
  reducers: {
    ProductReducer: (state, action) => {
      state.value = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { ProductReducer } = ProductSlice.actions

export default ProductSlice.reducer