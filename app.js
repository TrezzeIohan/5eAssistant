



const loadData = async () => {

    let searchTerm = ((document.querySelector("#search-term").value).toLowerCase()).replaceAll(' ', '-');
    let category = document.querySelector("#category").value;
    const res = await fetch(`https://www.dnd5eapi.co/api/${category}/${searchTerm}`);
    const data = await res.json();
    console.log(data);
    return data;
};

const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener('click', loadData)