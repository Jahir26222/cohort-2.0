import axios from 'axios'
import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const NoteCreate = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();

    await axios.post('http://localhost:8000/api/notes',{
      title : title,
      description : desc ,
    });

    setTitle("");
    setDesc("");

    navigate('/')
  }

  return (
    <div className='note-form'>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        
        />
        <input type="text"
        placeholder='Description'
        value={desc}
        onChange={(e)=> setDesc(e.target.value)}
        
        />

        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default NoteCreate