import { useState } from "react";

function MessageCount({ counter }) {
  return (
    <>
      <span
        className={`absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 ${
          counter > 0 ? "bg-red-600" : "bg-cyan-600"
        } rounded-full`}
      >
        {counter}
      </span>
    </>
  );
}

export default MessageCount;
