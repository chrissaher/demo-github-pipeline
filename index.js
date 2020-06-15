const express = require('express')
const app = express()
const port = 3000


app.use(express.static(__dirname, {'index': ['index.html', 'login.html']}))


app.get('/calculate', (req, res)=> {
  n1 = parseInt(req.query.n1)
  n2 = parseInt(req.query.n2)
  n3 = n1 + n2
  res.send({'res': n3})
})

app.listen(port, () => {
  console.log(`listening on port: http://localhost:${port}`)
})
