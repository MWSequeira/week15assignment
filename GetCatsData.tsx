export default async function GetCatsData() {
    // Data location -- dB from where to fetch the data 
    const dataURL = "http://localhost:3000/categoryList" 
    
    // Get the data. Wait for it; don't do anything until we have it.
    let response = await fetch(dataURL) // wait for the json data
    let data = response.json() // create a JS object from the json data
    
    // let data = practiceData;

    return data
}

// Note to Me:
// consider using <> to return data
