function MenuItem({ name, url }) {
  return (
    <li>
      {
        <a className="text-neutral-50 hover:text-slate-900" href={url}>
          {name}
        </a>
      }
    </li>
  );
}

export default MenuItem;
