export default function NoteCard({note, idx}) {
    return (
        <div key={idx}>{note.text} {note.createdAt.toLocaleString()}</div>
    );
}