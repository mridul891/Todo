/*
Todo {
   title : string , 
   description : string,
   completed : booolean
}
*/

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pandeymridulwork:mridul891@cohort.vcnsyzk.mongodb.net/todos")
const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

});
const todo = mongoose.model('todos', TodoSchema);

module.exports = {
    todo
}