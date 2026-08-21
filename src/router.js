import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./RootLayout";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "productDetails/:id", Component: ProductDetails },
      { path: "Cart", Component: Cart },
      { path: "WishList", Component: WishList }

    ],
  },
]);