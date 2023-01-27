const loadData = async () => {

    let searchTerm = ((document.querySelector("#search-term").value).toLowerCase()).replaceAll(' ', '-');
    let category = document.querySelector("#category").value;
    const res = await fetch(`https://www.dnd5eapi.co/api/${category}/${searchTerm}`);
    const data = await res.json();
    console.log(data);


    for(let item in data){
        const h1 = document.createElement('h1');
        h1.innerHTML = item.name;

        console.log(item);
        console.log(data[item]);
    }
    
};


const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener('click', loadData)