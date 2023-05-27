function FormsSection() {
  return (
    <section>
      <form>
        <h1 id="h1Form" className="sectionDividerTitle">
          Add a new destination
        </h1>
        <input
          type="text"
          placeholder="Image Source"
          id="imageInput"
          className="inputField"
        />
        <br />
        <input
          type="text"
          placeholder="City"
          id="inputCity"
          className="inputField"
        />
        <br />
        <input
          type="text"
          placeholder="Title"
          id="inputTitle"
          className="inputField"
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          id="inputDescription"
          className="inputField"
        />
        <br />
        <input
          type="text"
          placeholder="Country"
          id="inputCountry"
          className="inputField"
        />
        <br />
        <input
          type="text"
          placeholder="Date"
          id="inputDate"
          className="inputField"
        />
        <br />
        <button
          type="button"
          inputype="reset"
          id="addButton"
          className="button"
        >
          ADD DESTINATION
        </button>
      </form>
      <form>
        <h1 id="h1Form" className="sectionDividerTitle">
          Delete a destination
        </h1>
        <p id="imageInput" className="inputField">
          delete the last destination added
        </p>

        <br />

        <button type="button" id="deleteButton" className="button">
          DELETE DESTINATION
        </button>
      </form>
    </section>
  );
}

export default FormsSection;
