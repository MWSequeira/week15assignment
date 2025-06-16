import { useState } from "react"
import GetCatsData from "./GetCatsData"
let catsDataArray =  await GetCatsData()

export default function MyCatsList({ setSelectedCatID }: { setSelectedCatID: (newValue: number) => void } ) { 
    
    const[catList, setCatList] = useState(catsDataArray)
  
    const addCat = () => {
        let newItem = {
            id: 5,
            title: "New Category"
        }
        setCatList( [...catList, newItem] )
    }

    const delCat = (idToRemove:number) => {
        setCatList(catList.filter(x => x.id !== idToRemove))
    }

    const editCat = (idToEdit:number) => {
        let changes:string = prompt("Change your category:")
        setCatList(catList.map(item => item.id !== idToEdit ? item : {
            ...item, title: changes
        }))
    }

    const selectCat = (newId:number) => {
        setSelectedCatID(newId) 
    }

    return(
        <div>
            <button className="btn btn-success m-3" onClick={addCat}>Add a Category</button>
            {catList.map(cat => [
                <p>
                    <button className="btn btn-danger m-1" onClick={() => delCat(cat.id)}>X</button>
                    <button className="btn btn-primary m-1" onClick={() => editCat(cat.id)}>E</button>
                    <button className="btn btn-secondary m-1" onClick={() => selectCat(cat.id)}>
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