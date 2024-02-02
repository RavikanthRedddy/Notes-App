// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {Heading} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState(true)
  const [note, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeNotes = event => {
    setNotes(event.target.value)
  }
  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4,
      title,
      note,
    }
    setTitle('')
    setNotes('')
    setStatus(false)
    setNotesList(prevState => [...prevState, newNote])
  }

  return (
    <>
      <div>
        <Heading>Notes</Heading>
        <form onSubmit={onAddNote}>
          <input
            type="text"
            onChange={onChangeTitle}
            value={title}
            placeholder="Title"
          />
          <textarea
            onChange={onChangeNotes}
            value={note}
            placeholder="Take a Note..."
          />
          <button type="submit">Add</button>
        </form>
        {status && (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <h1>No Notes Yet</h1>
            <p>Notes you add will appear here</p>
          </div>
        )}
        <ul>
          {notesList.map(eachNote => (
            <NoteItem noteDetails={eachNote} key={eachNote.id} />
          ))}
        </ul>
      </div>
    </>
  )
}
export default Notes
