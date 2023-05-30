import ButtonDestinationsDetail from "./ButtonDestinationsDetail";

function DestinationsContainer() {
  const destinations = [
    {
      id: 1,
      imageSrc: "/img/marocco-marrakech-boucharouite-closeup.jpg",

      detailImageSrc: "/img/marocco-marrakech-boucharouite-window.jpg",
      titel: "–– most beautiful traditional way of Upcycling",
      location: "Marrakech",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi porro cumque necessitatibus consectetur quaeratb landitiis est odio recusandae nam deserunt omnis quisquam dolorum adlabore nisi molestias, eum soluta.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi porro cumque necessitatibus consectetur quaeratb landitiis est odio recusandae nam deserunt omnis quisquam dolorum adlabore nisi molestias, eum soluta.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi porro cumque necessitatibus consectetur quaeratb landitiis est odio recusandae nam deserunt omnis quisquam dolorum adlabore nisi molestias, eum soluta.",
      country: "Marocco",
      date: "march 2018",
    },
    {
      id: 2,
      imageSrc: "/img/france-paris-deco-off-bistro-detail.jpg",
      detailImageSrc: "/img/france-paris-deco-off-fornasetti.jpg",
      titel: "–– colorful patters at Paris Deco Off",
      location: "Paris",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi porro cumque necessitatibus consectetur quaeratb landitiis est odio recusandae nam deserunt omnis quisquam dolorum adlabore nisi molestias, eum soluta.",
      country: "France",
      date: "january 2019",
    },
  ];

  return (
    <div className="destinationContainer">
      {destinations.map((destination) => (
        <div
          className="destination height-470 width-350px"
          key={destination.id}
          datacity={`${destinations.location}`}
        >
          <a href="http://127.0.0.1:5500/travel-blog/index.html#destinationDetails">
            <img src={`${destination.imageSrc}`} />
          </a>
          <a href="http://127.0.0.1:5500/travel-blog/index.html#destinationDetails">
            <h1>{`${destination.location}`}</h1>
          </a>
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
