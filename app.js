const loadData = async () => {
    const res = await fetch("https://www.dnd5eapi.co/api/classes/paladin");
    const data = await res.json();
    console.log(data)
}

