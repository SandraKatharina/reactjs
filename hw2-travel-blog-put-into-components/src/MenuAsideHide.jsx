import MenuNav from "./MenuNav";

function MenuAsideHide() {
  return (
    <aside id="aside" className="hidden">
      <header id="asideHeader">
        <div id="menu">
          <p>menu</p>
        </div>
        <button id="buttonHideMenu" className="menuButton">
          {/* <img
            className="w-42 h-42 text-neutral-950  hover:text-fuchsia-500"
            src="/x.svg"
            alt=""
          /> */}
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </header>
      <MenuNav />
    </aside>
  );
}

export default MenuAsideHide;
