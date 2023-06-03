import ContentHome from "./ContentHome";

function MainContent({ counter, username, temperature }) {
  return (
    <div className="p-4 w-full bg-sky-500 text-neutral-50">
      <h1 className="text-xl text-bold">
        The current temperature in Paris is: {temperature}
      </h1>
      <ContentHome counter={counter} username={username} />
    </div>
  );
}

export default MainContent;
