document.getElementById("filterForm")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        const currentForm = event.target;
        const formData = new FormData(currentForm);
        const query = formData.get("query");

        fetch("https://cat-fact.herokuapp.com/facts")
            .then(data => data.json())
            .then(data => {
                console.log(data);

                // Поиск контейнера в DOM-дереве.
                const root = document.getElementById("root");
                root.innerHTML = '';

                const factsTable = document.createElement("table");
                const headerRow = document.createElement("tr");
                const createdAtHeader = document.createElement("th");
                const factHeader = document.createElement("th");
                createdAtHeader.textContent = "CreatedAt";
                factHeader.textContent = "Fact";
                headerRow.appendChild(createdAtHeader);
                headerRow.appendChild(factHeader);

                factsTable.appendChild(headerRow);

                for (let index = 0; index < data.length; index++) {
                    const tr = document.createElement("tr");
                    const dateCell = document.createElement("th");
                    const factCell = document.createElement("th");

                    dateCell.textContent = data[index].createdAt;
                    factCell.textContent = data[index].text;
    
                    if (data[index].text.includes(query)) {
                        factCell.classList.add("highlight");
                        console.log(factCell.classList);
                    }

                    tr.appendChild(dateCell);
                    tr.appendChild(factCell);

                    factsTable.appendChild(tr);
                }
                root.appendChild(factsTable);
            });
    });

document.getElementById("clearBtn")
    .addEventListener("click", () => {
        const root = document.getElementById("root");
        root.innerHTML = '';
    });
