import express from "express"
import dotenv from "dotenv"
import { userRouter } from "./routes/user.js"

dotenv.config()

const app = express() 
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.use ('/user', userRouter)

app.set("port", process.env.PORT ?? PORT)

app.listen(app.get('port'), () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log('Press Ctrl+C to stop the server.')
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`Port: ${PORT}`)
  console.log('App is ready to receive requests.')
})

