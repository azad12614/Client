import { Link } from "react-router-dom";
import pic1 from "../images/logo.png";
function Navbar() {
  const logo = pic1;
  return (
    <>
      <div className="navbar mx-auto px-5 max-w-screen bg-[#982176]">
        <div className="navbar-start ml-5">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-[#fed7aa]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="text-[#fed7aa] menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-bold">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <details close="true">
                  <summary className="font-bold">Product</summary>
                  <ul>
                    <li>
                      <Link to={"/add-product"}>Add Product</Link>
                    </li>
                    <li>
                      <Link to={"/view-product"}>View Product</Link>
                    </li>
                    <li>
                      <Link to={"/manage-product"}>Manage Product</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details close="true">
                  <summary className="font-bold">Team</summary>
                  <ul>
                    <li>
                      <Link to={"/add-member"}>Add Member</Link>
                    </li>
                    <li>
                      <Link to={"/View-member"}>View Member</Link>
                    </li>
                    <li>
                      <Link to={"/manage-member"}>Manage Member</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="font-bold">
                <Link to={"/contact-us"}>Contact US</Link>
              </li>
              <li className="font-bold">
                <Link to={"/add-review"}>Add Review</Link>
              </li>
            </ul>
          </div>
          {/* <div className="btn btn-ghost text-xl text-[#fed7aa] bg-[#3E001F] hover:bg-transparent border-0 rounded-full">3A</div> */}
          <img src={`${logo}`} className="-m-4 w-16 rounded-lg" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#fed7aa]">
            <li className="font-bold">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="z-[1]">
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="group flex mr-1 font-bold"
                >
                  Product
                  <svg
                    className="fill-current h-5 w-5 pt-1 transform group-focus:-rotate-180
  transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <ul className="dropdown-content z-[1] menu bg-dark mt-2 rounded-box w-44 font-semibold">
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/add-product"}>Add Product</Link>
                  </li>
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/view-product"}>View Product</Link>
                  </li>
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/manage-product"}>Manage Product</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="z-[1]">
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="group flex mr-1 font-bold"
                >
                  Team
                  <svg
                    className="fill-current h-5 w-5 pt-1 transform group-focus:-rotate-180
  transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <ul className="dropdown-content z-[1] menu bg-dark mt-2 rounded-box w-44 font-semibold">
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/add-member"}>Add Member</Link>
                  </li>
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/view-member"}>View Member</Link>
                  </li>
                  <li className="rounded-sm p-1 hover:bg-gray-100">
                    <Link to={"/manage-member"}>Manage Member</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="font-bold">
              <Link to={"/contact-us"}>Contact US</Link>
            </li>
            <li className="font-bold">
              <Link to={"/add-review"}>Add Review</Link>
            </li>
          </ul>
        </div>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </>
  );
}

export default Navbar;
