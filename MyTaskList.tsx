import { useState } from "react"
import GetTaskData from "./GetTaskData"
let taskDataArray = await GetTaskData()


export default function MyTaskList (selectedCatID:number) {
    let currentCategory = selectedCatID.selectedCatID 
    console.log(currentCategory)

    const[taskList, setTaskList] = useState(taskDataArray.filter(item => item.category === currentCategory))

    const addTask = () => {
        let newItem = {
            id: 100,
            task: "New Task",
            due: "June 5",
            category: currentCategory
        }
        setTaskList( [...taskList, newItem] )
    }

    const delTask = (idToRemove:number) => {
        setTaskList(taskList.filter(x => x.id !== idToRemove))
    }

    const editTask = (idToEdit:number) => {
        let changes:string = prompt("Change your task:")
        setTaskList(taskList.map(item => item.id !== idToEdit ? item : {
            ...item, task: changes
        }))
    }

    return [
        <div>
            <button className="btn btn-success" onClick={addTask}>Add a Task</button>
            <ol>
                {taskList.map(item => <li>
                    <button className="btn btn-danger m-1" onClick={() => delTask(item.id)}>X</button>
                    <button className="btn btn-primary m-1" onClick={() => editTask(item.id)}>Edit</button>
                    {item.task}
                </li>)}
            </ol>
        </div>
    ]
}