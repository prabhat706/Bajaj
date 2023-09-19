import express from 'express'
import bfhlRoute from "./route/bfhl.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/bfhl',bfhlRoute)

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})