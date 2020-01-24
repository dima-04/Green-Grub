const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/express_backend', (req, res) => {
	res.send({ express: 'YOUR BACKEND IS CONNECTED TO REACT' })
});