import GetTaskData from "./GetTaskData"
let dataArray = await GetTaskData()
let tasks = dataArray.map(item => [item.category, " - ", item.task, "  "])

export default function MyTaskList () {
    return [
        <div>
            <button className="btn btn-success">Add a Task</button>
            <ol>
                {tasks.map(task => <li>
                    {task}
                    <button className="btn btn-secondary">Select</button>
                </li>)}
            </ol>
        </div>
    ]
}