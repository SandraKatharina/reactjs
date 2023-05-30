import MenuNav from "./MenuNav";

function MenuAsideShow() {
  return (
    <aside id="aside" className="">
      <header id="asideHeader">
        <div id="menu">
          <p>menu</p>
        </div>
        <button id="buttonHideMenu" className="menuButton">
          <svg
            viewBox="0 0 24 24"
            width="42"
            height="42"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1 text-neutral-950  hover:text-fuchsia-500"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </header>
      <MenuNav />
    </aside>
  );
}

export default MenuAsideShow;
