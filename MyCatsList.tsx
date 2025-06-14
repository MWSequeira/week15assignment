import GetCatsData from "./GetCatsData"
let dataArray = await GetCatsData()
let categories = dataArray.map(item => item.title)

export default function MyCatsList() { 
    return(
        <div>
            <button className="btn btn-success">Add a Category</button>
            {categories.map(category => <p>
                {category}
                <button className="btn btn-secondary">Select</button>
            </p>)}
        </div>
    )
    //return categories // returns a string array of the categories
}


    