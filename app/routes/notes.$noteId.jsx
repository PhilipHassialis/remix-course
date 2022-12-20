import { Link, useLoaderData } from "@remix-run/react";
import { getStoredNotes } from "data/notes";
import styles from "~/styles/note-details.css";

const NoteDetailsPage = () => {
  const note = useLoaderData();

  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to="/notes">Back to all Notes</Link>
        </nav>
        <h1>{note.title}</h1>
      </header>
      <p id="note-details-content">{note.content}</p>
    </main>
  );
};

export const loader = async ({ params }) => {
  const notes = await getStoredNotes();
  const selectedNote = notes.find((note) => note.id === params.noteId);
  return selectedNote;
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default NoteDetailsPage;