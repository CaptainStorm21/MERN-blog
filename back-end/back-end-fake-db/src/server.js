import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
    'learn-react': {
        upvotes: 0,
        comments: [],
    },
    'learn-node': {
        upvotes: 0,
        comments: [],
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
        comments: [],
    },
}

const app = express();

app.use(bodyParser.json());

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