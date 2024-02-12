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
            <p> ${stationery.description} <br>${stationery.assrtdcolors}</p>
            <p>Price: $${stationery.price.toFixed(2)}</p>
            <p>Quantity per Order: ${stationery.quantity}</p>
            <p>DON: ${stationery.DON_reference_number}</p>
            <p>${stationery.Note}</p>
            </div>
        `;
        // Display stationery information
        document.getElementById("product-info").innerHTML = stationeryInfoHTML;
      };
    })



    .then(() => fetch("./src/new.json"))
    .then(response => response.json())
    .then(data => {
      window.displayNew = function (index) {
        const neww = data.new[index];
        const dropdownOptions = neww.options.map(option => `<option value="${option.value}">${option.variation}</option>`).join('');
        const newInfoHTML = `
            <img src="${neww.image}" alt="${neww.name}" id="detailproductimg">
            <div id ="detaildescription">
            <h2>${neww.name}</h2>
        <p> ${neww.description}</p>
        <p>Price: $${neww.price.toFixed(2)}</p>
        <p>Quantity per Order: ${neww.quantity}</p>
        <label for="variationDropdown"><p>Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">DON: </p><p id="selectedValue">Selected Value</p>
        <p id=note>${neww.Note}</p>
            </div>
        `;
        document.getElementById("product-info").innerHTML = newInfoHTML;

        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        variationDropdown.addEventListener('change', function () {
          const selectedOptionLabel = variationDropdown.value.trim();
        
          console.log('Selected Option Label:', selectedOptionLabel);
        
          if (selectedOptionLabel !== "SelectNone") {
            const selectedOption = neww.options.find(option => option.variation.trim() === selectedOptionLabel);
        
            console.log('Selected Option:', selectedOption);
        
            if (selectedOptionLabel) {
              const correspondingValue = selectedOptionLabel.value;
              selectedValueElement.textContent = `${selectedOptionLabel}`;
            } else {
              selectedValueElement.textContent = 'Unknown Value';
            }
          } else {
            selectedValueElement.textContent = 'Please select an option';
          }
        });
        

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
            <p> ${books.description}</p>
            <p>Price: $${books.price.toFixed(2)}</p>
            <p>Variations: ${books.assrtdcolors}</p>
            <p>Quantity per Order: ${books.quantity}</p>
            <p>DON: ${books.DON_reference_number}</p>
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
            <p>${print.description}</p>
            <p>Price: $${print.price.toFixed(2)}</p>
            <p>Variations: ${print.assrtdcolors}</p>
            <p>Quantity per Order: ${print.quantity}</p>
            <p>DON: ${print.DON_reference_number}</p>
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
            <p> ${presentation.description}</p>
            <p>Price: $${presentation.price.toFixed(2)}</p>
            <p>Variations: ${presentation.assrtdcolors}</p>
            <p>Quantity per Order: ${presentation.quantity}</p>
            <p>DON: ${presentation.DON_reference_number}</p>
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
            <p> ${sampling.description}</p>
            <p>Price: $${sampling.price.toFixed(2)}</p>
            <p>Variations: ${sampling.assrtdcolors}</p>
            <p>Quantity per Order: ${sampling.quantity}</p>
            <p>DON: ${sampling.DON_reference_number}</p>
            <p>${sampling.Note}</p>
            </div>
        `;
        // Display sampling information
        document.getElementById("product-info").innerHTML = samplingInfoHTML;
      };

    })
    .catch(error => console.error("Error fetching data:", error));


});
