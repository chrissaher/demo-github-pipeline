const express = require('express')
const app = express()


app.use(express.static(__dirname, {'index': ['index.html', 'login.html']}))


app.get('/calculate', (req, res)=> {
  n1 = parseInt(req.query.n1)
  n2 = parseInt(req.query.n2)
  n3 = n1 + n2
  res.send({'res': n3})
})

app.set('port', (process.env.PORT || 8889));

app.listen(app.get('port'), () => {
  port = app.get('port')
  console.log(`Node app is running on port: ${port}`)
})
