import Link from "wouter";

function MenuItem({ name, url }) {
  return (
    <li>
      {
        <Link className="text-neutral-50 hover:text-slate-900" href={url}>
          {name}
        </Link>
      }
    </li>
  );
}

export default MenuItem;
