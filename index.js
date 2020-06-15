const express = require('express')
const app = express()
const port = 3000


app.use(express.static(__dirname, {'index': ['index.html', 'login.html']}))

//
// app.get('./', (req, res)=> {
//
// })

app.listen(port, () => {
  console.log(`listening on port: http://localhost:${port}`)
})
