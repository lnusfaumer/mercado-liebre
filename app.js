const express = require ('express')
const app = express()
const path = require('path')


app.get('/', function (req, res) {
    let file = path.resolve('views/index.html')
    res.sendFile(file)
})

app.get('*', function(req, res) {
	if (req.url.endsWith('css')) {
	    let file = path.resolve('public' + req.url);
	    return res.sendFile(file)
	}

	let image = ['jpg', 'jpeg', 'gif', 'png', 'svg'];
	let ext = req.url.split('.')[1];
	if (image.includes(ext)) {
	    let file = path.resolve('public' + req.url);
	    return res.sendFile(file);
	}

})
app.listen(3000);