import express from 'express';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(path.resolve(), './dist')));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.resolve(), 'dist', 'index.html'));
});

app.listen(PORT, () => {
	console.log('Start');
});