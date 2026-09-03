import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./RootLayout";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import NotFound from "./pages/404NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: Contact },
      { path: "shop", Component: Shop },
      { path: "productDetails/:id", Component: ProductDetails },
      { path: "Cart", Component: Cart },
      { path: "Checkout", Component: Checkout },
      { path: "WishList", Component: WishList },
      { path: "Login", Component: Login },
      { path: "signup", Component: SignUp },
      { path: "account", Component: Account },
      
      // 2. Add the catch-all route at the VERY BOTTOM
      { path: "*", Component: NotFound } 
    ],
  },
]);