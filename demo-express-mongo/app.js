/*const express = require('express')
const app = express()
const products_routes = require('./routes/products.js')

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

app.use(express.json())
app.use('/api/products', products_routes)*/

const express = require('express')
const mongoose = require('mongoose')
const app = express()

const products_routes = require('./routes/products.js')

//Envoi le contenu du fichier .env dans l'object process.env
require('dotenv').config()

//Utilise le MONGO_URL pour créer un connection avec votre base de donnée
//Si la connection est réussit alors lancer le serveur NodeJS sinon afficher l'erreur.
mongoose.connect(process.env.MONGO_URI)
    .then((result) => app.listen(5000))
    .catch((err) => console.log(Error))

app.use(express.json())
app.use('/api/products', products_routes)