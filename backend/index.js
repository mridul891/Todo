const express = require('express');
const { createTodo, updateTodo } = require('./types');

const app = express();
const port = 3000;
app.use(express.json());

app.get('/todo', (req, res) => {
    const createpayload = req.body;
    // this basically validates the data given by the user
    const parsedpayload = createTodo.safeParse(createpayload);
    if (!parsedpayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return;
    }


    // put this in the mongodb 


})

app.post('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {

    const updatedpayload = req.body;
    const parsedpayload = updateTodo.parse(updatedpayload);

    if (!parsedpayload.success) {
        res.status(411).json({
            msg: "You have provided the wrong input"
        })
        return;
    }
})
app.listen(port, () => {
    console.log(`The server is running at localhost :${port}`)
})