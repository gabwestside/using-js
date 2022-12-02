const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get( ( req, res ) => res.send('home') )
app.route('/about').get( ( req, res ) => res.send('about server') )

//middleware
app.use(express.json())

app.route('/').post( ( req, res ) =>  res.send(req.body))

app.use(express.json())

let author = "Gabriel Rodrigues"

app.route('/').get( ( req, res ) => res.send(author) )

app.route('/').put( ( req, res ) => {
  author = req.body
  res.send(author)
})

app.route('/:id').delete( (req,res) => {
  res.send(req.params.id)
})