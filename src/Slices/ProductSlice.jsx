import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'Products',
  initialState: {
    value: [],
    Cart: localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [],
    WishList: localStorage.getItem("WishList") ? JSON.parse(localStorage.getItem("WishList")) : []
  },
  reducers: {
    ProductReducer: (state, action) => {
      state.value = action.payload
    },
    CartReducer: (state, action) => {
      let exist = state.Cart.find((item) => item.id == action.payload.id)
      if (!exist) {
        state.Cart = [...state.Cart, { ...action.payload, quantity: 1 }]
        localStorage.setItem("Cart", JSON.stringify(state.Cart))
      }
    },
    removeReducer: (state, action) => {
      state.Cart = state.Cart.filter((item) => item.id !== action.payload)
      localStorage.setItem("Cart", JSON.stringify(state.Cart))
    },
    removeWishListReducer: (state, action) => {
      state.WishList = state.WishList.filter((item) => item.id !== action.payload)
      localStorage.setItem("WishList", JSON.stringify(state.WishList))
    },
    wishListReducer: (state, action) => {
      let exist = state.WishList.find((item) => item.id == action.payload.id)
      if (!exist) {
        state.WishList = [...state.WishList, action.payload]
        localStorage.setItem("WishList", JSON.stringify(state.WishList))
      }
    },
    incrementQuantity: (state, action) => {
      state.Cart = state.Cart.map((item) => 
        item.id === action.payload 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
      localStorage.setItem("Cart", JSON.stringify(state.Cart))
    },
    decrementQuantity: (state, action) => {
      state.Cart = state.Cart.map((item) => 
        item.id === action.payload 
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } 
          : item
      )
      localStorage.setItem("Cart", JSON.stringify(state.Cart))
    }
  }
})

export const { ProductReducer, CartReducer, removeReducer, removeWishListReducer, wishListReducer, incrementQuantity, decrementQuantity } = ProductSlice.actions

export default ProductSlice.reducer