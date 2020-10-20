const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.listen(3000, function (){
    console.log('Server funcionando na porta 3000')
})

app.get('/', (req, res) => {
    res.render ('index.ejs')
})

app.set('view engine', 'ejs')

app.post('/show', (req, res) => {
    console.log(req.body)
})

/*app.post('\show', function(req, res){
    console.log(req.body)
})*/

app.use (bodyParser.urlencoded({extended: true}))