import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./RootLayout";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "productDetails/:id", Component: ProductDetails },
      { path: "CartPage", Component: Cart }
    
    ],
  },
]);