import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ContactUS from "./pages/ContactUS/ContactUS";
import AddProduct from "./pages/AddProduct/AddProduct";
import AddMember from "./pages/AddMember/AddMember";
import ManageProduct from "./pages/ManageProduct/ManageProduct";
import ManageMember from "./pages/ManageMember/ManageMember";
import AddReview from "./pages/AddReview/AddReview";
import ProductDetails from "./pages/Details/ProductDetails";
import MemberDetails from "./pages/Details/MemberDetails";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import UpdateMember from "./pages/UpdateMember/UpdateMember";

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
    },
    {
      path: "/add-member",
      element: <AddMember/>,
    },
    {
      path: "/manage-member",
      element: <ManageMember />,
      loader: function () {
        return fetch("http://localhost:3000/all-members");
      },
    },
    {
      path: "/member/:id",
      element: <MemberDetails></MemberDetails>,
      loader: function ({params}) {
        return fetch(`http://localhost:3000/member/${params.id}`);
      },
    },
    {
      path: "/update-member/:id",
      element: <UpdateMember></UpdateMember>,
      loader: function ({params}) {
        return fetch(`http://localhost:3000/Member/${params.id}`);
      },
    },
    {
      path: "/add-review",
      element: <AddReview />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
