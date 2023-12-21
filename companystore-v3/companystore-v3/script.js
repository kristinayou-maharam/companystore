document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data for stationery
  fetch("./src/stationery.json")
    .then(response => response.json())
    .then(data => {
      // Function to display stationery information
      window.displayProduct = function (index) {
        const stationery = data.stationery[index];
        const stationeryInfoHTML = `
            <img src="${stationery.image}" alt="${stationery.name}" 
            id="detailproductimg">
            <div id ="detaildescription">
            <h2>${stationery.name}</h2>
            <p><strong>Description:</strong> ${stationery.description} <br>${stationery.assrtdcolors}</p>
            <p><strong>Price:</strong> $${stationery.price.toFixed(2)}</p>
            <p><strong>Quantity per Order:</strong> ${stationery.quantity}</p>
            <p><strong>DON:</strong> ${stationery.DON_reference_number}</p>
            <p>${stationery.Note}</p>
            </div>
        `;
        // Display stationery information
        document.getElementById("product-info").innerHTML = stationeryInfoHTML;
      };
    })
    // Fetch JSON data for books
    .then(() => fetch("./src/books.json"))
    .then(response => response.json())
    .then(data => {
      // Function to display books information
      window.displayBooks = function (index) {
        const books = data.books[index];
        const booksInfoHTML = `
            <img src="${books.image}" alt="${books.name}" 
            id="detailproductimg">
            <div id ="detaildescription">
            <h2>${books.name}</h2>
            <p><strong>Description:</strong> ${books.description}</p>
            <p><strong>Price:</strong> $${books.price.toFixed(2)}</p>
            <p><strong>Variations:</strong> ${books.assrtdcolors}</p>
            <p><strong>Quantity per Order:</strong> ${books.quantity}</p>
            <p><strong>DON:</strong> ${books.DON_reference_number}</p>
            <p>${books.Note}</p>
            </div>
        `;
        // Display books information
        document.getElementById("product-info").innerHTML = booksInfoHTML;
      };
    })
    // Fetch JSON data for print
    .then(() => fetch("./src/print.json"))
    .then(response => response.json())
    .then(data => {
      // Function to display print information
      window.displayPrint = function (index) {
        const print = data.print[index];
        const printInfoHTML = `
            <img src="${print.image}" alt="${print.name}" 
            id="detailproductimg">
            <div id ="detaildescription">
            <h2>${print.name}</h2>
            <p><strong>Description:</strong> ${print.description}</p>
            <p><strong>Price:</strong> $${print.price.toFixed(2)}</p>
            <p><strong>Variations:</strong> ${print.assrtdcolors}</p>
            <p><strong>Quantity per Order:</strong> ${print.quantity}</p>
            <p><strong>DON:</strong> ${print.DON_reference_number}</p>
            <p>${print.Note}</p>
            </div>
        `;
        // Display print information
        document.getElementById("product-info").innerHTML = printInfoHTML;
      };
    })
    // Fetch JSON data for presentation
    .then(() => fetch("./src/presentation.json"))
    .then(response => response.json())
    .then(data => {
      // Function to display presentation information
      window.displayPresentation = function (index) {
        const presentation = data.presentation[index];
        const presentationInfoHTML = `
            <img src="${presentation.image}" alt="${presentation.name}" 
            id="detailproductimg">
            <div id ="detaildescription">
            <h2>${presentation.name}</h2>
            <p><strong>Description:</strong> ${presentation.description}</p>
            <p><strong>Price:</strong> $${presentation.price.toFixed(2)}</p>
            <p><strong>Variations:</strong> ${presentation.assrtdcolors}</p>
            <p><strong>Quantity per Order:</strong> ${presentation.quantity}</p>
            <p><strong>DON:</strong> ${presentation.DON_reference_number}</p>
            <p>${presentation.Note}</p>
            </div>
        `;
        // Display presentation information
        document.getElementById("product-info").innerHTML = presentationInfoHTML;
      };
    })
    // Fetch JSON data for sampling
    .then(() => fetch("./src/sampling.json"))
    .then(response => response.json())
    .then(data => {
      // Function to create form and display sampling information
      window.displaySampling = function (index) {
        const sampling = data.sampling[index];
        const samplingInfoHTML = `
            <img src="${sampling.image}" alt="${sampling.name}" 
            id="detailproductimg">
            <div id ="detaildescription">
            <h2>${sampling.name}</h2>
            <p><strong>Description:</strong> ${sampling.description}</p>
            <p><strong>Price:</strong> $${sampling.price.toFixed(2)}</p>
            <p><strong>Variations:</strong> ${sampling.assrtdcolors}</p>
            <p><strong>Quantity per Order:</strong> ${sampling.quantity}</p>
            <p><strong>DON:</strong> ${sampling.DON_reference_number}</p>
            <p>${sampling.Note}</p>
            </div>
        `;
        // Display sampling information
        document.getElementById("product-info").innerHTML = samplingInfoHTML;
      };

      // Call the function to create the form with dynamic options
      createForm(data.options);
    })
    .catch(error => console.error("Error fetching data:", error));

  // Function to create the form dynamically
  function createForm(options) {
    const form = document.createElement('form');
    const dropdownLabel = document.createElement('label');
    const dropdown = document.createElement('select');
    const selectedValueElement = document.createElement('p');

    // Set attributes and text content
    dropdownLabel.setAttribute('for', 'optionsDropdown');
    dropdownLabel.textContent = 'Select a variation:';
    dropdown.setAttribute('id', 'optionsDropdown');
    dropdown.setAttribute('name', 'options');
    selectedValueElement.setAttribute('id', 'selectedValue');
    selectedValueElement.textContent = 'Selected value will be displayed here';

    // Append form elements
    form.appendChild(dropdownLabel);
    form.appendChild(dropdown);
    form.appendChild(selectedValueElement);
    document.body.appendChild(form);

    // Populate the dropdown with options from the JSON file
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.variation;
      optionElement.textContent = option.variation;
      dropdown.appendChild(optionElement);
    });

    // Add event listener to the dropdown to update the displayed value
    dropdown.addEventListener('change', function () {
      const selectedOptionLabel = dropdown.value;
      const selectedOption = options.find(option => option.variation === selectedOptionLabel);

      if (selectedOption) {
        const correspondingValue = selectedOption.value;
        selectedValueElement.textContent = `Selected value: ${correspondingValue}`;
      } else {
        selectedValueElement.textContent = 'Unknown Value';
      }
    });
  }
});
