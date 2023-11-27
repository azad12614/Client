import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar max-w-screen bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
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
              className="text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <details close="true">
                  <summary>Product</summary>
                  <ul>
                    <li>
                      <Link to={"/add-product"}>Add Product</Link>
                    </li>
                    <li>
                      <Link to={"/manage-product"}>Manage Product</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to={"/contact-us"}>Contact US</Link>
              </li>
              <li>
                <Link to={"/add-review"}>Add Review</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li className="z-[1]">
              <details close="true">
                <summary>Product</summary>
                <ul className="w-max">
                  <li>
                    <Link to={"/add-product"}>Add Product</Link>
                  </li>
                  <li>
                    <Link to={"/manage-product"}>Manage Product</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact US</Link>
            </li>
            <li>
              <Link to={"/add-review"}>Add Review</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown bg-dark text-white">
          <label tabIndex={0} className="btn m-1">
            Theme
            <svg
              width="12px"
              height="12px"
              className="h-2 w-2 fill-current opacity-60 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Default"
                value="default"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Retro"
                value="retro"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Cyberpunk"
                value="cyberpunk"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Valentine"
                value="valentine"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Aqua"
                value="aqua"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
