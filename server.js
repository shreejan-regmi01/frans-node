const express = require('express')
const ejsLayout = require('express-ejs-layouts')

const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('layout', 'layouts/user-layout')
//app.set('admin-layout', 'layouts/admin-layout')

app.use(ejsLayout)
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {title: 'Home', mainClass: 'home'})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About', mainClass: 'home'})
})

app.get('/faq', (req, res) => {
    res.render('faq', {title: 'FAQs', mainClass: 'home'})
})

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact', mainClass: 'home'})
})

app.get('/furnitures', (req, res) => {
    res.render('furnitures', {title: 'Furnitures', mainClass: 'admin'})
})

app.listen(PORT, console.log(`listening on port ${PORT}`))