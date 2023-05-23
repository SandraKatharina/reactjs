function Greeter({ name, age }) {
  //   let greeting = "";

  //   if (age >= 16) {
  //     greeting = "Hello you are an adult";
  //   } else {
  //     greeting = "Hello you are not an adult";
  //   }

  return (
    <h1>
      {age >= 16
        ? `Hello ${name || "Joe Doe"} you are an adult`
        : `Hello ${name || "Joe Doe"} you are not an adult`}
    </h1>
  );
}

export default Greeter;
