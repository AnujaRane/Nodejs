const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');

const app = express();

app.use(express.json());

// get (read) method
app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data)
});

// post (insert) method
app.post('/', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    resp.send(result);
});

// put (update) method
app.put('/:name', async(req, resp) => {
    let data = await dbConnect();
    let result = data.updateOne(
        {name:"m ui"}, //condition
        {$set: req.params} //value
    );
    resp.send({result: "Updated"});
});

// delete method
app.delete('/:id', async (req, resp) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result);
});

app.listen(5000);