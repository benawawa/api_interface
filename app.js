var express = require('express');
var fetch = require('node-fetch');
var args = process.argv.slice(2);

var app = express();

let port = 5000;
var baseUrl = args[0];
if(baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(0, -1);
    console.log(baseUrl);
}

app.get('/:category', async (req, res) => { handle(req.params.category, null, null, res); });
app.get('/:category/:id', async (req, res) => { handle(req.params.category, req.params.id, null, res); });
app.get('/:category/:id/:identifier', async (req, res) => { handle(req.params.category, req.params.id, req.params.identifier, res); });

app.post('/api-url', async (req, res) => {
        baseUrl = req.body.baseUrl;
        if(baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }
        res.status(200);
})

handle = async (category, id, identifier, res) => {
    let url = '';
    if(identifier === null && id === null) {
        url = url.concat(baseUrl, '/', category);
    } else if (identifier === null) {
        url = url.concat(baseUrl, '/', category, '/', id);
    } else {
        url = url.concat(baseUrl, '/', category, '/', id, '/', identifier);
    }
    fetch(url)
    .then(response => response.json())
    .then(data => {
        res.send({ data });
    })
    .catch(e => {
        console.log(e);
        res.send('there was a boo-boo, my guy');
    });
}

app.listen(port, function() {
    console.log(`we listening on ${port} out here`);
});

