function MainContent({ name, counter }) {
  return (
    <article class="p-4">
      <p>{`Hello ${name || "Visitor"}`},</p>
      <br />

      {counter > 0 ? (
        <>
          <p>{`You have ${counter || 0} unread messages.`}</p>
          <p>Please go to your inbox to read them.</p>
        </>
      ) : (
        <p>You have no new messages.</p>
      )}
    </article>
  );
}

export default MainContent;
