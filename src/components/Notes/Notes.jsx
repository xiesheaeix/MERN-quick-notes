import NoteCard from "../NoteCard/NoteCard";

export default function Notes({notes}) {

  return (
    <>
      <div> {notes.length ? notes.map((note, idx) => <div key={idx}><NoteCard note={note} idx={idx}/> </div>) : "No Notes to show"} </div>
    </>
  );
}