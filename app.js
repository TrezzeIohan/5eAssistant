let category = document.querySelector("#category").value;
console.log(category)


const loadData = async () => {
    let category = document.querySelector("#category").value;
    const res = await fetch(`https://www.dnd5eapi.co/api/${category}/paladin`);
    const data = await res.json();
    console.log(data)
};

const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener('click', loadData)