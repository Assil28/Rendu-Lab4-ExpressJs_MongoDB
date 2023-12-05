const express= require('express')

const app= express()

const port=5000

const products= require('./data.js')

const products_routes = require('./routes/products.js')

app.listen(port,()=>{
    console.log('serveu is listening on port 5000')
})

/*app.get('/api/products',(req,res)=>{
    res.json([
        { name: 'iPhone', price: 800 },
        { name: 'iPad', price: 650 },
        { name: 'iWatch', price: 750 }
    ])
})*/

/*Retourner tous les produits avec tous les attributs
app.get('/api/products',(req,res)=>{
    res.json(products)
})*/


/*Retourner tous les produits sans l'attribut prix
app.get('/api/products',(req,res)=>{
    const partial_products=products.map(product=>{
        return {id:product.id,name:product.name}
    })
    res.json(partial_products)
})*/

//Retourner un produit by id /api/products/1
/*app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)
    res.json(product)
})*/
/*
app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)

        if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})*/
/******* */

/*// http://localhost:5000/api/query/?name=iphone
app.get('/api/query', (req, res) => {
    const name = req.query.name.toLowerCase()
    const products_result = products.filter(product => product.name.toLowerCase().includes(name))

    if (products_result.length < 1) {
        return res.status(200).send('No products matched your search')
    }
    res.json(products_result)
})*/

//Partie3

/*const logger  = (req, res, next) => {
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    next()
}

app.use(logger) // execute your middleware for all requests

app.get('/about', (req, res) => {
    return res.send('About Page')
})*/

// url postman: http://localhost:5000/about?user=admin
/* bodyJson : {
    "user": "admin"
}*/
/*const auth  = (req, res, next) => {
    const user = req.query.user
    if (user === 'admin') {
        req.user = { name: 'admin', id: 1 }
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}

app.use(auth)

app.get('/about', (req, res) => {
    console.log(req.user)
    return res.send('About Page')
})*/

//Partie 4
/*app.use(express.json()) // parse json body content

app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})
//Read all: GET /api/products
app.get('/api/products', (req, res) => {
    res.json(products)
})

//Read: GET /api/product/1
app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)

    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})

//Delete: DELETE /api/products/1
app.use(express.json()) // parse json body content

app.delete('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
        if (index === -1) {
        return res.status(404).send('Product not found')
    }
    products.splice(index,1)
    res.status(200).json('Product deleted')
})*/

//PArtie5

app.use(express.json())
app.use('/api/products', products_routes)
