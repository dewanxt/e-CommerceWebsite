import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./rootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      // { path: "about", Component: About },
    ],
  },
]);