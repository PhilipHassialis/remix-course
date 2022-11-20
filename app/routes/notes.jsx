import { redirect } from "@remix-run/node";
import { getStoredNotes, storeNotes } from "data/notes";
import NewNote, { links as newNoteStyles } from "~/components/NewNote";

const NotesPage = () => {
  return (
    <main>
      <NewNote />
    </main>
  );
};

export default NotesPage;

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.entries(formData);
  // alternative to the above line:
  // const noteData = {
  //   title: formData.get("title"),
  //   content: formData.get("content"),
  // }
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect("/notes");
}

export function links() {
  return [...newNoteStyles()];
}
