import MessageCount from "./MessageCount";

function HeaderBar({ counter, setCounter, username }) {
  const handleClickUp = () => {
    setCounter(counter + 1);
  };
  const handleClickDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <header className="w-full bg-amber-500 h-16 flex items-center px-4 justify-between">
      <div className="text-xl font-bold">
        HAVE A GREAT DAY <span className="text-neutral-50"> {username}</span>
      </div>
      <div className="text-neutral-50">
        <button
          onClick={handleClickDown}
          className="w-10 bg-emerald-600 rounded-xl m-5"
        >
          -
        </button>
        <button
          onClick={handleClickUp}
          className="w-10 bg-fuchsia-600 rounded-xl m-5"
        >
          +
        </button>
      </div>

      <span className="relative inline-block">
        <svg
          className="w-6 h-6 text-neutral-50 fill-current"
          viewBox="0 0 20 20"
        >
          <path
            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>

        <MessageCount counter={counter}></MessageCount>
      </span>
    </header>
  );
}

export default HeaderBar;
