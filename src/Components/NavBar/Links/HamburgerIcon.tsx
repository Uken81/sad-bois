export const HamburgerIcon = () => {
  return (
    <label
      htmlFor="nav-drawer"
      aria-label="open sidebar"
      className="btn btn-square btn-ghost text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-6 w-6 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </label>
  );
};
