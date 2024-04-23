import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const gettodo = () => {
        fetch('http://localhost:3000/todo', {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                'Content-type': "application/json"
            }
        }).then(async function ( res) {
            const json = await res.json();
            alert("Todo Added")
        })
    }
    return <div>
        <input style={{ padding: 10, margin: 10 }} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} /><br />
        <input style={{ padding: 10, margin: 10 }} type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} /><br />

        <button onClick={gettodo}>Add a todo</button>
    </div>
}