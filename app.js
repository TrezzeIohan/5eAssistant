fetch("https://www.dnd5eapi.co/api/spells")
.then(res => {
    console.log("All right!", res)
    res.json().then(data => console.log("JSON DONE", data));
})
.catch(e => {
    console.log("Error!", e)
})