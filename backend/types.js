const zod = require('zod');
/* 
    to add todo  to user  
    {
        title : string, 
        description : string
    }

    to get all the todos we does not require any validation 

    to mark as completed  
    {
        id : string
    }
*/

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}