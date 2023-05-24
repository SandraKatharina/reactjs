import MenuItem from "./MenuItem";

function MenuAside({ counter, setCounter }) {
  const menuPoints = ["Home", "About", "Inbox", "Outbox", "Trash"];

  const handleClickUp = () => {
    setCounter(counter + 1);
  };
  const handleClickDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <aside class="w-1/4 h-full border-slate-400 border-r p-4">
      <ul class="flex flex-col gap-2 font-semibold">
        {menuPoints.map((menuPoint) => (
          <MenuItem url={"http://localhost:5173/"} name={menuPoint} />
        ))}
        {/* <MenuItems url={"http://localhost:5173/"} name={"Home"}></MenuItems>
        <MenuItems url={"http://localhost:5173/"} name={"About"}></MenuItems>
        <MenuItems url={"http://localhost:5173/"} name={"Inbox"}></MenuItems>
        <MenuItems url={"http://localhost:5173/"} name={"Trash"}></MenuItems> */}
      </ul>
      <button onClick={handleClickUp}>+</button>
      <button onClick={handleClickDown}>-</button>
    </aside>
  );
}

export default MenuAside;
