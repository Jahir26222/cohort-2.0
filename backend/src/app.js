const express = require('express')
const  noteModel = require('./model/note.model')
const cors = require('cors')
const path = require('path')


const app = express();
app.use(express.static("./public")) 
app.use(express.json())
app.use(cors())




app.post('/api/notes' , async (req , res)=>{
    const {title , description} = req.body

    const createdNote = await noteModel.create({
        title,
        description
    })

    res.status(201).json({
        message : "Note Created successfully ✅" ,
        createdNote
    })
})

app.get('/api/notes', async (req , res)=>{
    const AllNote = await noteModel.find()

    res.status(200).json({
        message : "All Notes Found ✅",
        AllNote
    })
})

app.put('/api/notes/:id' , async (req , res)=>{
    const {id} = req.params
    console.log(id)
    const {description , title} = req.body

    const updatedNote = await noteModel.findByIdAndUpdate(id , {title ,description})

    res.status(200).json({
        message : "Note Updated Successfully ✅",
        updatedNote
    })
})

app.delete('/api/notes/:id' , async (req ,res)=>{
    const {id} = req.params
    
    const deletedNote = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message : "Note Deleted Successfully ✅",
        deletedNote
    })
})

app.get('/api/notes/:id', async (req , res)=>{
    const {id} = req.params
   const note = await noteModel.findById(id)

   res.status(200).json({
    message:"Not found By Id ✅",
    note
   })
})

app.get('*name', (req , res)=>{
      res.sendFile(path.join(__dirname,"..","/public/index.html"))
})


module.exports = app