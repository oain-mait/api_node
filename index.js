import express from 'express';

const app = express();

app.use(express.json());

const genres = [
    {id: 1, name:"Action"},
    {id: 2, name:"Comedy"},
    {id: 3, name:"Thriller"}
];

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/genres', (req,res) => {
    const genre_arr = genres.map(g => g.name);
    res.send(genre_arr);
});

app.get('/api/genres/:id', (req,res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) {
        res.status(404).send("Invalid ID");
        return;
    }
    else res.send(genre.name);
});

app.post('/api/genres', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        // 400 Bad Request
        res.status(400).send("Name is required and should be larger than 2 characers.")
        return;
    }
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`))