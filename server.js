const express = require('express')

const server = express()

// MIDDLEWARE
server.use(express.static('public')) // lets you link directly to static files in 'public' folder
server.use(express.urlencoded({ extended: true })) // lets you take things from browser entries

//
server.get('/name-dog', (req, res) => {
  res.sendFile(__dirname + '/dog-name.html')
})

// Post the user's new dog name
server.post('/name-dog', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

module.exports = server

Arr.map((banana) => {
  return banana++
})
