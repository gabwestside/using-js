const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get( ( req, res ) => res.send('home') )
app.route('/about').get( ( req, res ) => res.send('about server') )