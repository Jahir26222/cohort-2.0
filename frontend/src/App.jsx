
import Note from './components/Note'
import Nav from './components/Nav'
import { Route ,Routes } from 'react-router-dom'
import NoteCreate from './components/NoteCreate'
import UpdateNote from './components/UpdateNote'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<>  <Nav/> <Note/> </>} />
    <Route path='/create-note' element={<NoteCreate/>} />
    <Route path="/update/:id" element={<UpdateNote/>} />
   </Routes>
  )
}

export default App