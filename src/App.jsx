import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ContactUS from "./pages/ContactUS/ContactUS";
import AddProduct from "./pages/AddProduct/AddProduct";
import ManageProduct from "./pages/ManageProduct/ManageProduct";
import AddReview from "./pages/AddReview/AddReview";
import ProductDetails from "./pages/Details/ProductDetails";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: function () {
        return fetch("http://localhost:3000/all-products");
      },
    },
    {
      path: "/contact-us",
      element: <ContactUS />,
    },
    {
      path: "/add-product",
      element: <AddProduct />,
    },
    {
      path: "/manage-product",
      element: <ManageProduct />,
      loader: function () {
        return fetch("http://localhost:3000/all-products");
      },
    },
    {
      path: "/add-review",
      element: <AddReview />,
    },
    {
      path: "/product/:id",
      element: <ProductDetails></ProductDetails>,
      loader: function ({params}) {
        return fetch(`http://localhost:3000/product/${params.id}`);
      },
    },
    {
      path: "/update/:id",
      element: <UpdateProduct></UpdateProduct>,
      loader: function ({params}) {
        return fetch(`http://localhost:3000/product/${params.id}`);
      },
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
