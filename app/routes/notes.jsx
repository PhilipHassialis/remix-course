import NewNote, { links as newNoteStyles } from "~/components/newnote";

const NotesPage = () => {
  return (
    <main>
      <NewNote />
    </main>
  );
};

export default NotesPage;

export function links() {
  return [...newNoteStyles()];
}
