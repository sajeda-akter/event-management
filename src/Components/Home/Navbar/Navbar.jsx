import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then(() => {
      toast("Successfully logout");
    });
  };
  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>

      {user ? (
        <>
          <li>
            {" "}
            <button onClick={handleLogout} className="text-[16px]">
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleToOpen = () => {
    document.getElementById("navmenu").classList.remove("hidden");
    const menu = document.querySelectorAll("li");
    for (const li of menu) {
      li.addEventListener("click", () => {
        document.getElementById("navmenu").classList.add("hidden");
      });
    }
  };

  return (
    <div className="flex lg:justify-around  h-20 justify-between p-4 bg-slate-200 sticky top-0 z-50 ">
      <div className="flex justify-between item-center gap-3">
        <img
          src={"https://i.ibb.co/9W2YPb5/logo1.jpg"}
          className="w-12 h-12 rounded-full"
          alt=""
        />
        <div>
          <h1 className="lg:text-2xl font-bold text-red-500 uppercase">
            Butterfly
          </h1>
          <p className="tracking-widest ">Wings</p>
        </div>
      </div>
      <nav className="lg:flex  hidden md:flex">
        <ul className="flex space-x-6">{menuItems}</ul>{" "}
      </nav>

      <nav className="flex-col ">
        <svg
          id="open"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8  ml-28 lg:hidden md:hidden"
          onClick={handleToOpen}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <ul
          className=" mt-6   px-2 py-4 shadow bg-base-200 rounded-box w-40 hidden "
          id="navmenu"
        >
          {menuItems}
          {user && (
            <div className=" flex items-center gap-4">
              <p className="font-bold">{user.displayName}</p>
              <img
                className="lg:w-12 lg:h-12 w-8 h-8 rounded-full border-2 border-indigo-800"
                src={user.photoURL?user.photoURL:"https://i.ibb.co/Q8zMwbP/users.png"}
                alt=""
              />
            </div>
          )}
        </ul>
      </nav>
      {user && (
        <div className=" lg:flex items-center gap-4 hidden">
          <p className="font-bold">{user.displayName}</p>
          <img
            className="lg:w-12 lg:h-12 w-8 h-8 rounded-full border-2 border-indigo-800"
            src={user.photoURL?user.photoURL:"https://i.ibb.co/Q8zMwbP/users.png"}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
