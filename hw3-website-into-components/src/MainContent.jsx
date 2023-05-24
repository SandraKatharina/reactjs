function MainContent({ name, counter }) {
  return (
    <article class="p-4">
      <p>{`Hello ${name || "Visitor"}`},</p>
      <br />

      {counter > 0
        ? `You have ${
            counter || 0
          } unread messages. Please go to your inbox to read them.`
        : `You have no new messages.`}
    </article>
  );
}

export default MainContent;
