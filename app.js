const dataContainer = document.querySelector('#dataContainer');

// Will load the data
const loadData = async () => {

    let searchTerm = ((document.querySelector("#search-term").value).toLowerCase()).replaceAll(' ', '-');
    let category = document.querySelector("#category").value;
    const res = await fetch(`https://www.dnd5eapi.co/api/${category}/${searchTerm}`);
    const data = await res.json();
    console.log(data);

    return data;
};

// Will take the data from LoadData() and display it according to its category
const displayData = function(category){

    for(let item in data){
        const h1 = document.createElement('h1');
        h1.innerHTML = data[item];
        dataContainer.append(h1);

        console.log(item);
        console.log(data[item]);
    }
}

// Will call the loadData and the displayData when the search button is clicked
const loadAndDisplayData = function() {
}

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener('click', loadData);