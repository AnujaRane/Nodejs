const express = require('express');
require('./config');

const Products = require('./product');

const app = express();
app.use(express.json());

// search api
app.get("/search/:key", async(req, resp) => {
    console.log(req.params.key);
    
    let data = await Products.find(
        // use regex
        {
            "$or": [
                {"name": {$regex: req.params.key}},
                {"brand": {$regex: req.params.key}}
            ]
        }
    );
    resp.send(data)
});

app.listen(5000);