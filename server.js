const express = require('express')

const server = express()

// MIDDLEWARE
server.use(express.static('public')) // lets you link directly to static files in 'public' folder
server.use(express.urlencoded({ extended: true })) // lets you take things from browser entries

// Post the user's new dog name
server.post('/name-dog', (req, res) => {
  let dogName = req.body.dogName
  res.sendFile(__dirname + '/dog-name.html')
})

module.exports = server
