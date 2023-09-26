import NavMenu from "./NavMenu";
const Header = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar flex flex-row-reverse md:flex-row justify-between items-center py-6 absolute">
          <div className="flex-none md:hidden">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div>
            <img
              src="./images/logo.png"
              alt="Donation Campaign Logo"
              width="180"
            />
          </div>
          <div className="flex-none hidden md:block">
            <NavMenu></NavMenu>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <NavMenu></NavMenu>
      </div>
    </div>
  );
};

export default Header;
