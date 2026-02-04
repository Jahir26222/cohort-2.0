import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateNote = () => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const { id } = useParams()
   const navigate = useNavigate()

    useEffect(() => {
        const handleUpdate = async () => {


            const res = await axios.get(`https://cohort-2-0-scg1.onrender.com/api/notes/${id}`);
            // console.log(res.data.note)
            setTitle(res.data.note.title)
            setDesc(res.data.note.description)
        }

        handleUpdate()
    }, [id])


    /* Update the form*/ 

    const handleSubmite = async (e)=>{
        e.preventDefault();

        await axios.put(`https://cohort-2-0-scg1.onrender.com/api/notes/${id}`,{
            title : title,
            description : desc
        })

        navigate('/')
    }

    return (
        <div className='note-form'>
            <form onSubmit={handleSubmite}>
                <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}

                />
                <input type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}

                />

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default UpdateNote