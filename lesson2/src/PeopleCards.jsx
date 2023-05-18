function PeopleCard({ name, city, color, children }) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{city}</h2>
      <p className={color}>{children}</p>
    </>
  );
}

export default PeopleCard;
