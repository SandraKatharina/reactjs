function MenuAside() {
  return (
    <aside id="aside" className="hidden">
      <header id="asideHeader">
        <div id="menu">
          <p>menu</p>
        </div>
        <button id="buttonHideMenu" className="menuButton">
          <i className="size-18" data-feather="x"></i>
        </button>
      </header>
      <nav>
        <ul id="asideMenu">
          <li>
            <a href="http://127.0.0.1:5500/travel-blog/index.html">home</a>
          </li>
          <li>
            <a href="http://127.0.0.1:5500/travel-blog/about.html">about</a>
          </li>
          <li>
            <a href="http://127.0.0.1:5500/travel-blog/index.html#h1Form">
              add
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default MenuAside;
