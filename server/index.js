const app = require('./services/app');
const port = 3000

// app.use('/', express.static('./build', {
//   index: "index.html"
// }))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))