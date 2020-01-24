import express from 'express';
import bodyParser from 'body-parser';
//helps to connect to local db
import  { MongoClient } from 'mongodb';



const app = express();

app.use(bodyParser.json());

app.get('/api/articles/:name', async (req, res) => {
    try {
        const articleName = req.params.name;
        //default port is 27017
        const client = await MongoClient.connect ( 'mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');

        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
        client.close();
    } catch  (error) {
        res.status(500).json({ message: 'Internal error', error });
        //500 internal error
    }
});

app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;

    articlesInfo[articleName].upvotes += 1;
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} - upvote`)
});

// app.get('/hello', (req, res)  => res.send('hello!'));
// app.get('/hello/:name', (req, res) => res.send(`Hello from ${req.params.name}`));
// app.post('/hello', (req, res) => res.send(`Hello to ${req.body.name}`));


app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;
    articlesInfo[articleName].comments.push({username, text});
    res.status(200).send(articlesInfo[articleName]);
});
app.listen(8000, ()=> console.log('Listening on the port 8000'))

//install nodemon
//see package.json 
//backend prompt npm start