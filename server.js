const express = require('express');

const app = express();

app.use(express.static('public'));

const PORT = 8080;

const dummyData = [
	{
		name: "person A",
		city: "Kobe",
	},
	{
		name: "person B",
		city: "Kyoto",
	},
	{
		name: "person C",
		city: "Tokyo",
	},
	{name: "person D",
		city: "不明"
	}
];

app.get('/data', (req, res) => {
	res.send(JSON.stringify(dummyData));
});

app.listen(PORT, () => {
	console.log(`listening on port:${PORT}`);
});
