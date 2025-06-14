export default async function GetTaskData() {
    // Data location -- dB from where to fetch the data 
    const dataURL = "http://localhost:3000/tasksList" 
    
    // Get the data. Wait for it; don't do anything until we have it.
    let response = await fetch(dataURL) // wait for the json data
    let data = response.json() // create a JS object from the json data
    
    // let data = practiceData;

    return data
}