export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p>Pro-SCI Copyright © {year}</p>
      <p>Website by Pariah Projects</p>
    </footer>
  );
}
