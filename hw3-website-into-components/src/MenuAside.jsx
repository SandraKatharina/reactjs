import MenuItems from "./MenuItems";

function MenuAside() {
  return (
    <aside class="w-1/4 h-full border-slate-400 border-r p-4">
      <ul class="flex flex-col gap-2 font-semibold">
        <li>
          <a class="text-slate-700 hover:text-slate-900" href="#">
            Home
          </a>
        </li>
        <li>
          <a class="text-slate-700 hover:text-slate-900" href="#">
            About
          </a>
        </li>
        <li>
          <a class="text-slate-700 hover:text-slate-900" href="#">
            Inbox
          </a>
        </li>
        <li>
          <a class="text-slate-700 hover:text-slate-900" href="#">
            Trash
          </a>
        </li>
        {/* <MenuItems url={"http://localhost:5173/"} name={Home}></MenuItems>
        <MenuItems url={"http://localhost:5173/"} name={About}></MenuItems>
        <MenuItems url={"http://localhost:5173/"} name={Inbox}></MenuItems>
        <MenuItems url={"http://localhost:5173/"} name={Trash}></MenuItems> */}
      </ul>
    </aside>
  );
}

export default MenuAside;
