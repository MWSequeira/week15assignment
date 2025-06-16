import { useState } from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import MyCatsList from './MyCatsList'
import MyTaskList from './MyTaskList'

export default function MyLayout() {
    
    const[selectedCatID, setSelectedCatID] = useState(0)

    console.log(selectedCatID)   

    return [
        <div className="container">
            <div className="row text-center">
                <div className="col-10">
                    <h1>My Task List</h1>
                    <p>Week 15 Assignment</p>
                </div>
            </div>
            <div className="row text-start">
                <div className="col-5">
                    
                <div style={{
                    border: "solid",
                    borderColor: "blue",
                    margin: "1rem",
                    padding: "1rem"
                    }}>
                    <h3>Categories</h3>
                    <MyCatsList selectedCatID={selectedCatID} setSelectedCatID={setSelectedCatID}/>
                </div>

                </div>
                <div className="col">

                <div style={{
                    border: "solid",
                    borderColor: "red",
                    margin: "1rem",
                    padding: "1rem"
                    }}>
                    <h2>Tasks</h2>
                    <MyTaskList selectedCatID={selectedCatID}/>
                </div>

                </div>
            </div>
        </div>
    ]
}
