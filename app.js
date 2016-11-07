'use strict'

const express = require('express')
const path = require('path')
const app = express()

app.set('port', (process.env.PORT || 5000))


app.use(express.static(path.join(__dirname, "public")))

const server = app.listen(app.get('port'), () => {
    let port = server.address().port
    console.log(`listening on port: ${port}`)
})