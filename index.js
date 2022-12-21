const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express());



const uri = `mongodb+srv://${process.env.USER_KEY_DB}:${process.env.USER_PASS_DB}@cluster0.c8jqolf.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        const allCategoryCallaction = client.db('allQuizData').collection('category')
        app.get('/allcategory', async (req, res) => {
            const query = {};
            const result = await allCategoryCallaction.find(query).toArray();
            res.send(result)
        })



    }
    finally {

    }

}
run().catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('quiz assingment is runing')
});
app.listen(port, () => console.log("quiz assingment is runing port:", port))