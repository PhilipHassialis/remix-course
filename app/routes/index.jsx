import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta!</p>
      <p id="cta">
        <Link to="/notes">Try now!</Link>
      </p>
    </main>
  );
}
