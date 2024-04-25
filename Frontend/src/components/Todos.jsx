
/* 
    todos = [
        {
            title : " go to the gym" ,
            description :" get fit"
        }
    ]
*/
export function Todos({ todos }) {
    return <div>
        {todos.map(function (todo, index) {
            return <div key={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.descriptioon}</h2>
                <button >{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}