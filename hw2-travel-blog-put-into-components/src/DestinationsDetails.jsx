import { Route } from "wouter";

function DestinationsDetails({ temperature, destinations }) {
  return (
    <div>
      <div>
        <Route path={"/destination/" + destination.id}>
          {destinations.map(() => (
            <img src={`${destination.detailImageSrc}`} alt="" />
          ))}
        </Route>
      </div>
      <Route path="/destination/:cityId">
        {(params) => {
          return <h1>This is more info about {params.city}</h1>;
        }}
      </Route>
      <h1>The current temperature in Paris is: {temperature}</h1>
    </div>
  );
}
export default DestinationsDetails;
