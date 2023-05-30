function NavHeader() {
  return (
    <header id="navigationHeader">
      <div>{/* <a href="">discover</a> */}</div>
      <button id="buttonShowMenu" className="menuButton">
        <svg
          viewBox="0 0 24 24"
          width="42"
          height="42"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="css-i6dzq1 text-neutral-950  hover:text-fuchsia-500"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        {/* <i className="size-18" data-feather="menu"></i> */}
      </button>
    </header>
  );
}

export default NavHeader;
