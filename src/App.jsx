import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ContactUS from "./pages/ContactUS/ContactUS";
import AddProduct from "./pages/AddProduct/AddProduct";
import ViewProduct from "./pages/ViewProduct/ViewProduct";
import ManageProduct from "./pages/ManageProduct/ManageProduct";
import ProductDetails from "./pages/Details/ProductDetails";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import AddMember from "./pages/AddMember/AddMember";
import ViewMember from "./pages/ViewMember/ViewMember";
import ManageMember from "./pages/ManageMember/ManageMember";
import MemberDetails from "./pages/Details/MemberDetails";
import UpdateMember from "./pages/UpdateMember/UpdateMember";
import AddReview from "./pages/AddReview/AddReview";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add-product",
      element: <AddProduct />,
    },
    {
      path: "/view-product",
      element: <ViewProduct/>,
      loader: function () {
        return fetch("http://localhost:3000/all-products");
      },
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
      path: "/view-member",
      element: <ViewMember/>,
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
        return fetch(`http://localhost:3000/member/${params.id}`);
      },
    },
    {
      path: "/contact-us",
      element: <ContactUS />,
    },
    {
      path: "/add-review",
      element: <AddReview />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
