// Write your code here
const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <>
      <li>
        <h1>{title}</h1>
        <p>{note}</p>
      </li>
    </>
  )
}
export default NoteItem
