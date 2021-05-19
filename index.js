const express = require('express');

const app = new express();


app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(5000, () => {
    console.log('App is listening on port 5000');
})