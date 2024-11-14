const summary_items = document.querySelector(".summary-items");

async function getData() {
  // Fetch data asynchronously from JSON File
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
}

// Use fetched data after it's available
getData().then(data => {
  data.forEach(ele => {
    // Create a new div element for the item
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item", ele.category.toLowerCase()); // Add 'item' and category class

    // Set the inner HTML of the item
    itemDiv.innerHTML = `
          <div class="item-left">
            <img src="${ele.icon}" alt="icon-${ele.category}">
            <span class="item-left-text">${ele.category}</span>
          </div>
          <div class="item-right">
            <span class="item-right-VarNum">${ele.score}</span>
            <span class="item-right-Var100"> / 100</span>
          </div>
        `;

    // Append the item to the summary items container
    summary_items.appendChild(itemDiv);
  });
}).catch(error => console.error('Error fetching data:', error));