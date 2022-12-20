import { redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getStoredNotes, storeNotes } from "data/notes";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import NoteList, { links as noteListLinks } from "~/components/NoteList";

const NotesPage = () => {
  const notes = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
};

export default NotesPage;

export async function loader() {
  const notes = await getStoredNotes();
  return notes;
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  // alternative to the above line:
  // const noteData = {
  //   title: formData.get("title"),
  //   content: formData.get("content"),
  // }

  if (noteData.title.trim().length < 5) {
    return { message: "Invalid title, must be at least 5 characters long" };
  }

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect("/notes");
}

export function ErrorBoundary({ error }) {
  return (
    <main className="error">
      <h1>An error related to your notes occured!</h1>
      <p>{error.message}</p>
      <p>
        Back to <Link to="/">safety</Link>
      </p>
    </main>
  );
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}
