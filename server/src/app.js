// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const morgan = require('morgan')

// const app = express()
// app.use(morgan('combined'))
// app.use(bodyParser.json())
// app.use(cors())

// app.get('/posts', (req, res) => {
//     res.send(
//         [{
//             title: "Hello World!",
//             description: "Hi there! How are you?"
//         }]
//     )
// })

// app.listen(process.env.PORT || 8081)

// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);