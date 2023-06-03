import MenuItem from "./MenuItem";

function MenuAside({ username, setUsername }) {
  const menuPoints = [
    { target: "/home", caption: "HOME" },
    { target: "/about", caption: "ABOUT" },
    { target: "/inbox", caption: "INBOX" },
  ];

  return (
    <aside className="w-1/4 h-full bg-purple-700 p-4">
      <div className="mb-10">
        <label htmlFor="username" className="text-neutral-50">
          Login :{" "}
        </label>
        <input
          name="username"
          placeholder="MINNIE MOUSE"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          className=" w-40 rounded-m"
        />
      </div>
      <ul className="flex flex-col gap-2 font-semibold">
        {menuPoints.map((menuPoint) => (
          <MenuItem url={menuPoint.target} name={menuPoint.caption} />
        ))}
      </ul>
    </aside>
  );
}

export default MenuAside;
