import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar mx-auto max-w-7xl bg-[#982176]">
        <div className="navbar-start ml-5">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-[#fed7aa]">
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
                      <Link to={"/manage-member"}>Manage Member</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="font-bold">
                <Link to={"/contact-us"}>Contact US</Link>
              </li>
              <li className="font-bold" >
                <Link to={"/add-review"}>Add Review</Link>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost text-xl text-[#fed7aa] bg-[#3E001F] hover:bg-transparent border-0 rounded-full">3A</div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#fed7aa]">
            <li className="font-bold">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="z-[1]">
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="group flex mr-1 font-bold">
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
                    <Link to={"/manage-product"}>Manage Product</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="z-[1]">
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="group flex mr-1 font-bold">
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
        <div className="dropdown bg-[#982176] text-[#fed7aa]">
          <label tabIndex={0} className="btn text-white bg-[#3E001F] hover:bg-transparent border-0 mr-5">
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
            className="dropdown-content text-white bg-[#3E001F] z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
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
