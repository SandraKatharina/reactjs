function DestinationsContainer() {
  const destinations = [
    {
      imageSrc:
        "http://127.0.0.1:5500/travel-blog/img/marocco-marrakech-boucharouite-closeup.jpg",
      // detailImageSrc:
      //   "http://127.0.0.1:5500/travel-blog/img/marocco-marrakech-boucharouite-window.jpg",
      titel: "–– most beautiful traditional way of Upcycling",
      location: "Marrakech",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi porro cumque necessitatibus consectetur quaeratb landitiis est odio recusandae nam deserunt omnis quisquam dolorum adlabore nisi molestias, eum soluta.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi porro cumque necessitatibus consectetur quaeratb landitiis est odio recusandae nam deserunt omnis quisquam dolorum adlabore nisi molestias, eum soluta.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi porro cumque necessitatibus consectetur quaeratb landitiis est odio recusandae nam deserunt omnis quisquam dolorum adlabore nisi molestias, eum soluta.",
      country: "Marocco",
      date: "march 2018",
    },
    {
      imageSrc:
        "http://127.0.0.1:5500/travel-blog/img/france-paris-deco-off-bistro-detail.jpg",
      // detailImageSrc:
      //   "http://127.0.0.1:5500/travel-blog/img/france-paris-deco-off-fornasetti.jpg",
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
      {destinations.map(
        (destination) => `
      <div className="destination" data-city="${destinations.location}">
        <a href="http://127.0.0.1:5500/travel-blog/index.html#destinationDetails">
          <img src="${destination.imageSrc}" />
        </a>
        <a href="http://127.0.0.1:5500/travel-blog/index.html#destinationDetails">
          <h1>${destination.location}</h1>
        </a>
        <p class="country">
          <a>${destination.country}</a>
        </p>
        <p class="date">${destination.date}</p>
      </div>
      `
      )}
    </div>
  );
}

export default DestinationsContainer;
