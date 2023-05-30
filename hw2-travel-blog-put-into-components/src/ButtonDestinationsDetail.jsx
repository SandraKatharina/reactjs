// import { useState } from "react";

function ButtonDestinationsDetail({ noDestDetails, showDestDetails }) {
  //   const [destinationsDetails, setDestinationsDetails] = useState();
  const showDestinationsDetail = () => {
    showDestDetails(noDestDetails);
  };

  return (
    <button onClick={showDestinationsDetail} className="text-xs m-auto">
      more
    </button>
  );
}
export default ButtonDestinationsDetail;
