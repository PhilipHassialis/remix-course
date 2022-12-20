import { Link } from "@remix-run/react";
import styles from "~/styles/note-details.css";

const NoteDetailsPage = () => {
  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to="/notes">Back to all Notes</Link>
        </nav>
        <h1>Note title</h1>
      </header>
      <p id="note-details-content">Note conntent</p>
    </main>
  );
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default NoteDetailsPage;
