import NewNote, { links as newNoteStyles } from "~/components/NewNote";

const NotesPage = () => {
  return (
    <main>
      <NewNote />
    </main>
  );
};

export default NotesPage;

export function action() {}

export function links() {
  return [...newNoteStyles()];
}
