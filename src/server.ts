import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT

//middlewares
app.use(express.urlencoded({ extended: false}))
app.use(express.json());

type userModel = {
  name: string,
  isAdmin: boolean
}

//teste
const userList = [
  {
    name: 'well',
    isAdmin: true
  },
  {
    name: 'duda',
    isAdmin: false
  }
]




// routes
app.get('/ping', (req, res) => {res.send('PONG!')})

app.get('/users', (req, res) => {res.send(userList)})

app.post('/users', (req, res) => {
  const user: userModel = {
    name: req.body.name,
    isAdmin: req.body.isAdmin
  }

  if(user){userList.push(user)}
  return res.json(userList)
})

// app.delete('/users/:id', (req, res) => {

// })

app.listen(PORT, ()=> console.log(`App is running in port ${PORT}`))