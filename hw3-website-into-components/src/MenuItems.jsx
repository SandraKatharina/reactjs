function MenuItems({ name, url }) {
  return (
    <li>
      <a class="text-slate-700 hover:text-slate-900" href={url}>
        {name}
      </a>
    </li>
  );
}

export default MenuItems;
