import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import Main from "./pages/main/main";
import TrackOrder from "./pages/track/track-order";
import Blog from "./pages/blog/blog";
import AboutUs from "./pages/about/about-us";
import ContactUs from "./pages/contact/contact-us";
import Shop from "./pages/shop/shop";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Wishlist from "./pages/wishlist/wishlist";
import Product from "./pages/product/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/track-order",
        element: <TrackOrder />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/product/:target",
        element: <Product />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
