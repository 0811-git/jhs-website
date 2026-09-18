export default function SectionTitle({ en, cn, id }) {
  return (
    <header className="section-title" id={id}>
      <h2 className="section-title__en">{en}</h2>
      {cn && <span className="section-title__cn">{cn}</span>}
    </header>
  );
}