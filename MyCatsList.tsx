import { useState } from "react"
import GetCatsData from "./GetCatsData"
let dataArray = await GetCatsData()
let categories = dataArray.map(item => item) // initial state

type category = {
    id: number;
    title: string;
}

export default function MyCatsList() { 
    const[catList, setCatList] = useState(categories)

    const addCat = () => {
        let newItem = {
            id: 5,
            title: "New Category"
        }
        setCatList( [...catList, newItem] )
    }

    const delCat = (idToRemove) => {
        setCatList(catList.filter(x => x.id !== idToRemove))
    }

    return(
        <div>
            <button className="btn btn-success m-3" onClick={addCat}>Add a Category</button>
            {catList.map(cat => [
                <p>
                    <button className="btn btn-danger m-1" onClick={() => delCat(cat.id)}>X</button>
                    <button className="btn btn-secondary m-1">
                        {cat.title}
                    </button>
                    
                </p>
            ]
            )}
            
        </div>
    )
}  

{/*  
 */}