import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <ul className="flex flex-col md:flex-row gap-6 md:gap-8 px-5 py-8 md:px-2 md:py-1 w-80 md:w-full min-h-full md:min-h-0 bg-base-200 md:bg-transparent">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active text-[#FF444A] underline"
                : "text-black"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active text-[#FF444A] underline "
                : "text-black"
            }
          >
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active text-[#FF444A] underline"
                : "text-black"
            }
          >
            Statistics
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;
