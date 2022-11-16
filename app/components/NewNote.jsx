import styles from "./NewNote.css";

const NewNote = () => {
  return (
    <form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          required
        ></textarea>
      </p>
      <p>
        <div className="form-actions">
          <button>Add note</button>
        </div>
      </p>
    </form>
  );
};

export default NewNote;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
