import { Link } from "wouter";
import ButtonDestinationsDetail from "./ButtonDestinationsDetail";

function DestinationsContainer({ destinations }) {
  return (
    <div className="destinationContainer">
      {destinations.map((destination) => (
        <div
          className="destination height-470 width-350px"
          key={destination.id}
          datacity={`${destinations.location}`}
        >
          <Link href={"/destination/" + destination.id}>
            <img src={`${destination.imageSrc}`} />
            <h1>{`${destination.location}`}</h1>
          </Link>
          <div className="flex flex-row">
            <p className="line-clamp-2 text-sm">
              {`${destination.description}`}{" "}
            </p>
            <ButtonDestinationsDetail></ButtonDestinationsDetail>
          </div>

          <p className="country">
            <a>{`${destination.country}`}</a>
          </p>
          <p className="date">{`${destination.date}`}</p>
          {/* <hr className="divide-y divide-solid divide-neutral-950"></hr> */}
        </div>
      ))}
    </div>
  );
}

export default DestinationsContainer;
