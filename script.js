const numbers = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

function renderTable(numbersArray) {
    const tableContainer = document.getElementById("table-container");

    tableContainer.innerHTML = "";

    const table = document.createElement("table");
    table.border = "1";

    const row = document.createElement("tr");
    numbersArray.forEach((num) => {
        const cell = document.createElement("td");
        cell.textContent = num;
        row.appendChild(cell);
    });

    table.appendChild(row);
    tableContainer.appendChild(table);
}

function addRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100);
    numbers.push(randomNumber);
    renderTable(numbers);
}

window.onload = function () {
    renderTable(numbers);

    const addButton = document.getElementById("add-button");
    addButton.addEventListener("click", addRandomNumber);
};
