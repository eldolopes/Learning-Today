const app = require('./app')

const port = process.env.PORT || 3333
app.listen(port, () => console.log(`Server on-line: http://localhost:${port}`))