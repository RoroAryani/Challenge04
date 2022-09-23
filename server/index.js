// console.log("Implement servermu disini yak 😝!");

const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 8000;
const {readFile} = require('fs').promises

const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, '../public'); 
app.use(express.static(PUBLIC_DIRECTORY))

app.get('/', async (req, res) => {
res.send(await readFile('./public/index.html', 'utf-8'))
})

app.get('/cari', async (req, res) => {
res.send(await readFile('./public/carimobil.html', 'utf-8'))
})

app.get('\.css$', async (req, res) => {
    res.send(await readFile('./public/css', 'utf-8'))
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});