// express and other dependencies
const express = require('express');
const app = express();
const PORT = 3500;

// middleware
const bodyParser = require('body-parser');
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json())

// routes
app.get('/', (req, res) => {
	if (err) {
		console.log(err);
	}

	res.sendStatus(200);
});

app.listen(PORT, (res, req) => {
	console.log("connected to server");
});