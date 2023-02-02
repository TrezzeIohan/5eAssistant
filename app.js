const dataContainer = document.querySelector('#dataContainer');

// Will load the data
const loadData = async (category, searchTerm) => {

    const res = await fetch(`https://www.dnd5eapi.co/api/${category}/${searchTerm}`);
    const data = await res.json();

    return data;
};

const loadElData = async (elUrl) => {
    const res = await fetch(`https://www.dnd5eapi.co${elUrl}`);
    const data = await res.json();

    return data;
}

// This function will display data when no search term is given
const displaAllOptions = function(data){
    console.log(data);
    // Create the data container
    const dataContainer = document.querySelector("#dataContainer");

    // Create and append the table to display the new data
    const table = document.createElement("table");
    table.setAttribute("id", "newTable");
    table.classList.add("table");
    table.classList.add("table-dark")
    table.classList.add("m-0");
    dataContainer.append(table);
  
    // Create the table head
    const tableHead = document.createElement("thead");
    //tableHead.classList.add("thead-light");
    table.appendChild(tableHead);
  
    // Create a table row for the th's
    const tableRow = document.createElement("tr");
    tableHead.appendChild(tableRow);
  
    // Create adn append the table h's
    const thIndex = document.createElement("th");
    thIndex.setAttribute("scope", "col");
    thIndex.textContent = "#";
    tableRow.appendChild(thIndex);
  
    const thName = document.createElement("th");
    thName.setAttribute("scope", "col");
    thName.textContent = "Name";
    tableRow.appendChild(thName);
  
  
  
    // Create the table body
    const tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    // Displaying every element
    (data.results).forEach((el) => {
        // Create tr
        const tRow = document.createElement("tr");
        tableBody.appendChild(tRow);

        // Create the th and append it the TRow
        const thData = document.createElement("th");
        thData.setAttribute("scope", "row");
        tRow.appendChild(thData);

        //Create the table cols and append to the TRow
        const tdName = document.createElement("td");
        const name = el.name;
        const elUrl = el.url;
        tdName.innerText = name;
        tRow.appendChild(tdName);
        tRow.style.cursor = "pointer";

        // Add a function that will display specific data when the element is clicked
        tdName.addEventListener('click', loadAndDisplayElData(elUrl))
    })  
}

// Will take the data from LoadData() and display it according to its category
const displayData = function(category, data, searchTerm){

    if (searchTerm === ""){
        displaAllOptions(data);
    }
    else if (category === "magic-items"){
        // Target the data container div
        const dataContainer = document.querySelector("#dataContainer");

        // Create and append the table to display the new data
        const table = document.createElement("table");
        table.setAttribute("id", "newTable");
        table.classList.add("table");
        table.classList.add("table-dark")
        table.classList.add("m-0");
        dataContainer.append(table);

        // Create the table head
        const tableHead = document.createElement("thead");
        //tableHead.classList.add("thead-light");
        table.appendChild(tableHead);

        // Create a table row for the th's
        const tableRow = document.createElement("tr");
        tableHead.appendChild(tableRow);

        // Create adn append the table h's
        const thIndex = document.createElement("th");
        thIndex.setAttribute("scope", "col");
        thIndex.textContent = "#";
        tableRow.appendChild(thIndex);

        const thName = document.createElement("th");
        thName.setAttribute("scope", "col");
        thName.textContent = "Name";
        tableRow.appendChild(thName);

        const thRarity = document.createElement("th");
        thRarity.setAttribute("scope", "col");
        thRarity.textContent = "Rarity";
        tableRow.appendChild(thRarity);

        const thDescription = document.createElement("th");
        thDescription.setAttribute("scope", "col");
        thDescription.textContent = "Item Description";
        tableRow.appendChild(thDescription);

        


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
        tRow.appendChild(tdName);

        const tdRarity= document.createElement("td");
        const rarity = data.desc[0];
        tdRarity.innerText = rarity;
        tRow.appendChild(tdRarity);

        const tdDesc= document.createElement("td");
        const description = data.desc[1];
        tdDesc.innerText = description;
        tRow.appendChild(tdDesc);
    }
    else if (category === "races"){
        // Target the data container div
        const dataContainer = document.querySelector("#dataContainer");

        // Create and append the table to display the new data
        const table = document.createElement("table");
        table.classList.add("table");
        table.setAttribute("id", "newTable");
        table.classList.add("table-dark");
        table.classList.add("m-0");
        dataContainer.append(table);

        // Create the table head
        const tableHead = document.createElement("thead");
        //tableHead.classList.add("thead-light");
        table.appendChild(tableHead);

        // Create a table row for the th's
        const tableRow = document.createElement("tr");
        tableHead.appendChild(tableRow);

        // Create adn append the table h's
        const thIndex = document.createElement("th");
        thIndex.setAttribute("scope", "col");
        thIndex.textContent = "#";
        tableRow.appendChild(thIndex);

        const thRace = document.createElement("th");
        thRace.setAttribute("scope", "col");
        thRace.textContent = "Race";
        tableRow.appendChild(thRace);

        const thSpeed = document.createElement("th");
        thSpeed.setAttribute("scope", "col");
        thSpeed.textContent = "Speed";
        tableRow.appendChild(thSpeed);

        const thAge = document.createElement("th");
        thAge.setAttribute("scope", "col");
        thAge.textContent = "Age";
        tableRow.appendChild(thAge);

        const thAlig = document.createElement("th");
        thAlig.setAttribute("scope", "col");
        thAlig.textContent = "Alignment";
        tableRow.appendChild(thAlig);

        


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
        tRow.appendChild(tdName);

        const tdSpeed= document.createElement("td");
        const speed = data.speed;
        tdSpeed.innerText = speed;
        tRow.appendChild(tdSpeed);

        const tdAge= document.createElement("td");
        const age = data.age;
        tdAge.innerText = age;
        tRow.appendChild(tdAge);

        const tdAlig= document.createElement("td");
        const alig = data.alignment;
        tdAlig.innerText = alig;
        tRow.appendChild(tdAlig);
    }
    else if (category === "rule-sections"){
        // Target the data container div
        const dataContainer = document.querySelector("#dataContainer");

        // Create and append the table to display the new data
        const table = document.createElement("table");
        table.classList.add("table");
        table.setAttribute("id", "newTable");
        table.classList.add("table-dark");
        table.classList.add("m-0");
        dataContainer.append(table);

        // Create the table head
        const tableHead = document.createElement("thead");
        //tableHead.classList.add("thead-light");
        table.appendChild(tableHead);

        // Create a table row for the th's
        const tableRow = document.createElement("tr");
        tableHead.appendChild(tableRow);

        // Create adn append the table h's
        const thIndex = document.createElement("th");
        thIndex.setAttribute("scope", "col");
        thIndex.textContent = "#";
        tableRow.appendChild(thIndex);

        const thRules = document.createElement("th");
        thRules.setAttribute("scope", "col");
        thRules.textContent = "Rules";
        tableRow.appendChild(thRules);

        const thDesc = document.createElement("th");
        thDesc.setAttribute("scope", "col");
        thDesc.textContent = "Description";
        tableRow.appendChild(thDesc);
        


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
        tRow.appendChild(tdName);

        const tdDesc = document.createElement("td");
        const desc = (data.desc).replaceAll('#', '');
        tdDesc.innerText = desc;
        tRow.appendChild(tdDesc);
    }

}

// Will call the loadData and the displayData when the search button is clicked
const loadAndDisplayData = function() {
    // Search term and category
    let searchTerm = ((document.querySelector("#search-term").value).toLowerCase()).replaceAll(' ', '-');
    let category = document.querySelector("#category").value;
    
    let table = document.getElementById("newTable");
    if (table !== null){
        table.remove();
    }

    //Load Data
    data = loadData(category, searchTerm);
    data.then(data =>{
        //console.log(data);
        displayData(category, data, searchTerm)
    });
    
    
}

const displayElData = function(category, data){

    if (category === "magic-items"){
        // Target the data container div
        const dataContainer = document.querySelector("#dataContainer");

        // Create and append the table to display the new data
        const table = document.createElement("table");
        table.setAttribute("id", "newTable");
        table.classList.add("table");
        table.classList.add("table-dark")
        table.classList.add("m-0");
        dataContainer.append(table);

        // Create the table head
        const tableHead = document.createElement("thead");
        //tableHead.classList.add("thead-light");
        table.appendChild(tableHead);

        // Create a table row for the th's
        const tableRow = document.createElement("tr");
        tableHead.appendChild(tableRow);

        // Create adn append the table h's
        const thIndex = document.createElement("th");
        thIndex.setAttribute("scope", "col");
        thIndex.textContent = "#";
        tableRow.appendChild(thIndex);

        const thName = document.createElement("th");
        thName.setAttribute("scope", "col");
        thName.textContent = "Name";
        tableRow.appendChild(thName);

        const thRarity = document.createElement("th");
        thRarity.setAttribute("scope", "col");
        thRarity.textContent = "Rarity";
        tableRow.appendChild(thRarity);

        const thDescription = document.createElement("th");
        thDescription.setAttribute("scope", "col");
        thDescription.textContent = "Item Description";
        tableRow.appendChild(thDescription);

        


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
        tRow.appendChild(tdName);

        const tdRarity= document.createElement("td");
        const rarity = data.desc[0];
        tdRarity.innerText = rarity;
        tRow.appendChild(tdRarity);

        const tdDesc= document.createElement("td");
        const description = data.desc[1];
        tdDesc.innerText = description;
        tRow.appendChild(tdDesc);
    }
    else if (category === "races"){
        // Target the data container div
        const dataContainer = document.querySelector("#dataContainer");

        // Create and append the table to display the new data
        const table = document.createElement("table");
        table.classList.add("table");
        table.setAttribute("id", "newTable");
        table.classList.add("table-dark");
        table.classList.add("m-0");
        dataContainer.append(table);

        // Create the table head
        const tableHead = document.createElement("thead");
        //tableHead.classList.add("thead-light");
        table.appendChild(tableHead);

        // Create a table row for the th's
        const tableRow = document.createElement("tr");
        tableHead.appendChild(tableRow);

        // Create adn append the table h's
        const thIndex = document.createElement("th");
        thIndex.setAttribute("scope", "col");
        thIndex.textContent = "#";
        tableRow.appendChild(thIndex);

        const thRace = document.createElement("th");
        thRace.setAttribute("scope", "col");
        thRace.textContent = "Race";
        tableRow.appendChild(thRace);

        const thSpeed = document.createElement("th");
        thSpeed.setAttribute("scope", "col");
        thSpeed.textContent = "Speed";
        tableRow.appendChild(thSpeed);

        const thAge = document.createElement("th");
        thAge.setAttribute("scope", "col");
        thAge.textContent = "Age";
        tableRow.appendChild(thAge);

        const thAlig = document.createElement("th");
        thAlig.setAttribute("scope", "col");
        thAlig.textContent = "Alignment";
        tableRow.appendChild(thAlig);

        


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
        tRow.appendChild(tdName);

        const tdSpeed= document.createElement("td");
        const speed = data.speed;
        tdSpeed.innerText = speed;
        tRow.appendChild(tdSpeed);

        const tdAge= document.createElement("td");
        const age = data.age;
        tdAge.innerText = age;
        tRow.appendChild(tdAge);

        const tdAlig= document.createElement("td");
        const alig = data.alignment;
        tdAlig.innerText = alig;
        tRow.appendChild(tdAlig);
    }
    else if (category === "rule-sections"){
        // Target the data container div
        const dataContainer = document.querySelector("#dataContainer");

        // Create and append the table to display the new data
        const table = document.createElement("table");
        table.classList.add("table");
        table.setAttribute("id", "newTable");
        table.classList.add("table-dark");
        table.classList.add("m-0");
        dataContainer.append(table);

        // Create the table head
        const tableHead = document.createElement("thead");
        //tableHead.classList.add("thead-light");
        table.appendChild(tableHead);

        // Create a table row for the th's
        const tableRow = document.createElement("tr");
        tableHead.appendChild(tableRow);

        // Create adn append the table h's
        const thIndex = document.createElement("th");
        thIndex.setAttribute("scope", "col");
        thIndex.textContent = "#";
        tableRow.appendChild(thIndex);

        const thRules = document.createElement("th");
        thRules.setAttribute("scope", "col");
        thRules.textContent = "Rules";
        tableRow.appendChild(thRules);

        const thDesc = document.createElement("th");
        thDesc.setAttribute("scope", "col");
        thDesc.textContent = "Description";
        tableRow.appendChild(thDesc);
        


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
        tRow.appendChild(tdName);

        const tdDesc = document.createElement("td");
        const desc = (data.desc).replaceAll('#', '');
        tdDesc.innerText = desc;
        tRow.appendChild(tdDesc);
    }

}

const loadAndDisplayElData = function(elUrl) {
    // Search term and category
    let category = document.querySelector("#category").value;
    
    let table = document.getElementById("newTable");
    if (table !== null){
        table.remove();
    }

    //Load Data
    data = loadElData(elUrl);
    data.then(data =>{
        //console.log(data);
        displayElData(category, data)
    });
    
    
}

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener('click', loadAndDisplayData);