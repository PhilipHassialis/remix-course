import {
  Form,
  useActionData,
  useTransition as useNavigation,
} from "@remix-run/react";
import styles from "./NewNote.css";

const NewNote = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post" id="note-form">
      {data?.message && <p className="error">{data.message}</p>}
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
          <button disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add note"}
          </button>
        </div>
      </p>
    </Form>
  );
};

export default NewNote;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
