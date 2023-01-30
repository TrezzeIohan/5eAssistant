const dataContainer = document.querySelector('#dataContainer');

// Will load the data
const loadData = async () => {

    let searchTerm = ((document.querySelector("#search-term").value).toLowerCase()).replaceAll(' ', '-');
    let category = document.querySelector("#category").value;
    const res = await fetch(`https://www.dnd5eapi.co/api/${category}/${searchTerm}`);
    const data = await res.json();
    console.log(data.desc[1]);

    return data;
};

// Will take the data from LoadData() and display it according to its category
const displayData = function(category, data){

    if (category === "magic-items"){
        // Target the data container div
        const dataContainer = document.querySelector("#dataContainer");

        // Create and append the table to display the new data
        const table = document.createElement("table");
        table.classlist.add("table");
        dataContainer.append(table);

        // Create the table head
        const tableHead = document.createElement("thead");
        table.appendChild(tableHead);

        // Create a table row for the th's
        const tableRow = document.createElement("tr");
        tableHead.appendChild(tableRow);

        // Create the table h's
        const thIndex = document.createElement("th");
        thIndex.setAttribute("scope", "col");
        thIndex.innerText("#")

        const thName = document.createElement("th");
        thName.setAttribute("scope", "col");
        thName.innerText("Name");

        const thRarity = document.createElement("th");
        thRarity.setAttribute("scope", "col");
        thRarity.innerText("Rarity");

        const thDescription = document.createElement("th");
        thDescription.setAttribute("scope", "col");
        thDescription.innerText("Item Description");

        


        // Create the table body
        const tableBody = document.createElement("tbody");
        table.appendChild(tableBody);

        // Create tr
        const tRow = document.createElement("tr");
        tableBody.appendChild(tRow);

        // Create the th and append it the TRow
        const thData = document.createElement("th");
        thData.setAttribute("scope", "row");
        tRow.appendChild(thData);

        //Create the table cols and append to the TRow
        const tdName = document.createElement("td");
        const name = data.name;
        tdName.innerText = name;
        tRow.appendChild = tdName;

        const tdRarity= document.createElement("td");
        const rarity = data.desc[0];
        tdRarity.innerText = rarity;
        tRow.appendChild = tdRarity;

        const tdDesc= document.createElement("td");
        const description = data.desc[0];
        tdDesc.innerText = description;
        tRow.appendChild = tdDesc;
    }


}

// Will call the loadData and the displayData when the search button is clicked
const loadAndDisplayData = function() {
}

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener('click', loadData);