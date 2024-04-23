const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');

const app = express();
const port = 3000;
app.use(express.json());

// For adding the todo in the database
app.post('/todo', async (req, res) => {
    try {
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
        await todo.create({
            title: createpayload.title,
            description: createpayload.description
        })

        res.json({
            msg: "Todo Created"
        })
    } catch (error) {
        res.json({
            msg: "Todo is not Created"
        })
    }
})

//Retriving all the todos from the database

app.get('/todos', async (req, res) => {
    //  returns all the todo 
    const todos = await todo.find();
    console.log(todos); //it always return the promise therefore we require an async await
})



//Update the todos
app.put('/completed', async (req, res) => {

    const updatedpayload = req.body;
    const parsedpayload = updateTodo.parse(updatedpayload);

    if (!parsedpayload.success) {
        res.status(411).json({
            msg: "You have provided the wrong input"
        })
        return;
    }
    await todo.update({
        // konsi id jisme update karna hai 
        _id: req.body.id,
    }, {
        // Which field needed to be update
        completed: true
    })
    res.json({
        msg: "Todo marked as Completed"
    })
})
app.listen(port, () => {
    console.log(`The server is running at localhost :${port}`)
})