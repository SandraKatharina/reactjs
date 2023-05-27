function NavHeader() {
  return (
    <header id="navigationHeader">
      <button id="buttonShowMenu" className="menuButton">
        {/* <svg
          viewBox="0 0 24 24"
          width="36"
          height="36"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="css-i6dzq1 text-neutral-950"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg> */}
        <i className="size-18" data-feather="menu"></i>
      </button>
    </header>
  );
}

export default NavHeader;
