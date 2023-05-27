function ContentHome({ counter, username }) {
  return (
    <article className="p-4 w-full bg-sky-500 text-neutral-50">
      <p>{`Hello ${username || "Visitor"}`},</p>
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

export default ContentHome;
