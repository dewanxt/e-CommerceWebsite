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

      let exist = state.Cart.find((item) => item.id == action.payload.id)
      if(!exist){
        state.Cart = [...state.Cart, action.payload]
        localStorage.setItem("Cart", JSON.stringify(state.Cart))
      }
    },
    removeReducer: (state,action) => {

      state.Cart = state.Cart.filter((item) => item.id !== action.payload)
        localStorage.setItem("Cart", JSON.stringify(state.Cart))
      
    },
  }
})

// Action creators are generated for each case reducer function
export const { ProductReducer, CartReducer, removeReducer } = ProductSlice.actions

export default ProductSlice.reducer 