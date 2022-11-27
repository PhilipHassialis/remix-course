import { redirect } from "@remix-run/node";
import { getStoredNotes, storeNotes } from "data/notes";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import NoteList, { links as noteListLinks } from "~/components/NoteList";

const NotesPage = () => {
  return (
    <main>
      <NewNote />
      <NoteList />
    </main>
  );
};

export default NotesPage;

export function loader() {}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
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
  return [...newNoteLinks(), ...noteListLinks()];
}
