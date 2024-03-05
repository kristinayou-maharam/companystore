document.addEventListener("DOMContentLoaded", function () {

  fetch("./src/stationery.json")
    .then(response => response.json())
    .then(data => {
      window.displayStationery = function (index) {
        const stationery = data.stationery[index];
        const dropdownOptions = stationery.options.map(option => `<option value="${option.value}">${option.variation}</option>`).join('');
        const slideHTML = stationery.image.map(imageUrl => `<div><img src="${imageUrl}" alt="${stationery.name}" style="width:25vw";></div>`).join('');

        const stationeryInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id ="detaildescription">
        <h2>${stationery.name}</h2>
        <p> ${stationery.description}</p>
        <p>Price: $${stationery.price.toFixed(2)}</p>
        <p>Quantity per Order: ${stationery.quantity}</p>
        <label for="variationDropdown"><p>Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Order: </p><p id="selectedValue"></p>
        <p id=note>${stationery.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <button id= "addtocart"><h5>Add to Cart</h5></button>

            </div>
        `;
        document.getElementById("product-info").innerHTML = stationeryInfoHTML;

        $('.slick-carousel').slick({
          infinite: true,
          slidesToShow: 1, // Shows a three slides at a time
          slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
          arrows: true, // Adds arrows to sides of slider
          dots: true // Adds the dots on the bottom
        });

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
              selectedValueElement.textContent = '';
            }
          } else {
            selectedValueElement.textContent = 'Please select an option';
          }
        });
        

      };
    })


    .then(() => fetch("./src/new.json"))
    .then(response => response.json())
    .then(data => {
      window.displayNew = function (index) {
        const neww = data.new[index];
        const dropdownOptions = neww.options.map(option => `<option value="${option.value}">${option.variation}</option>`).join('');
        const slideHTML = neww.image.map(imageUrl => `<div><img src="${imageUrl}" alt="${neww.name}" style="width:25vw; margin-bottom:10px";></div>`).join('');

        const newInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id ="detaildescription">
        <h2>${neww.name}</h2>
        <p> ${neww.description}</p>
        <p>Price: $${neww.price.toFixed(2)}</p>
        <p>Quantity per Order: ${neww.quantity}</p>
        <label for="variationDropdown"><p>Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Order: </p><p id="selectedValue"></p>
        <p id=note>${neww.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <button id= "addtocart"><h5>Add to Cart</h5></button>
            </div>
        `;
        document.getElementById("product-info").innerHTML = newInfoHTML;


        $('.slick-carousel').slick({
          infinite: true,
          slidesToShow: 1, // Shows a three slides at a time
          slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
          arrows: true, // Adds arrows to sides of slider
          dots: true // Adds the dots on the bottom
        });



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
              selectedValueElement.textContent = '';
            }
          } else {
            selectedValueElement.textContent = 'Please select an option';
          }
        });
        

      };
    })


    .then(() => fetch("./src/new.json"))
    .then(response => response.json())
    .then(data => {
      window.displayTest = function (index) {
        const test = data.new[index];
        const dropdownOptions = test.options.map(option => `<option value="${option.value}">${option.variation}</option>`).join('');
        const slideHTML = test.image.map(imageUrl => `<div><img src="${imageUrl}" alt="${test.name}" style="width:25vw; margin-bottom:10px";></div>`).join('');

        const testInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id ="detaildescription">
        <h2>${test.name}</h2>
        <p> ${test.description}</p>
        <p>Price: $${test.price.toFixed(2)}</p>
        <p>Quantity per Order: ${test.quantity}</p>
        <label for="variationDropdown"><p>Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Order: </p><p id="selectedValue"></p>
        <p id=note>${test.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <button id= "addtocart"><h5>Add to Cart</h5></button>

            </div>
        `;
        document.getElementById("product-info").innerHTML = testInfoHTML;


        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        variationDropdown.addEventListener('change', function () {
          const selectedOptionLabel = variationDropdown.value.trim();
        
          console.log('Selected Option Label:', selectedOptionLabel);
        
          if (selectedOptionLabel !== "SelectNone") {
            const selectedOption = test.options.find(option => option.variation.trim() === selectedOptionLabel);
        
            console.log('Selected Option:', selectedOption);
        
            if (selectedOptionLabel) {
              const correspondingValue = selectedOptionLabel.value;
              selectedValueElement.textContent = `${selectedOptionLabel}`;
            } else {
              selectedValueElement.textContent = '';
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
            <p>Order: ${books.DON_reference_number}</p>
            <p>${books.Note}</p>
            <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
            <button id= "addtocart"><h5>Add to Cart</h5></button>

            </div>
        `;
        // Display books information
        document.getElementById("product-info").innerHTML = booksInfoHTML;
      };
    })

    .then(() => fetch("./src/books.json"))
    .then(response => response.json())
    .then(data => {
      window.displayBooks = function (index) {
        const books = data.books[index];
        const dropdownOptions = books.options.map(option => `<option value="${option.value}">${option.variation}</option>`).join('');
        const slideHTML = books.image.map(imageUrl => `<div><img src="${imageUrl}" alt="${books.name}" style="width:25vw; margin-bottom:10px";></div>`).join('');

        const booksInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id ="detaildescription">
        <h2>${books.name}</h2>
        <p> ${books.description}</p>
        <p>Price: $${books.price.toFixed(2)}</p>
        <p>Quantity per Order: ${books.quantity}</p>
        <label for="variationDropdown"><p>Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Order: </p><p id="selectedValue"></p>
        <p id=note>${books.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <button id= "addtocart"><h5>Add to Cart</h5></button>

            </div>
        `;
        document.getElementById("product-info").innerHTML = booksInfoHTML;
        
        $('.slick-carousel').slick({
          infinite: true,
          slidesToShow: 1, // Shows a three slides at a time
          slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
          arrows: true, // Adds arrows to sides of slider
          dots: true // Adds the dots on the bottom
        });


        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        variationDropdown.addEventListener('change', function () {
          const selectedOptionLabel = variationDropdown.value.trim();
        
          console.log('Selected Option Label:', selectedOptionLabel);
        
          if (selectedOptionLabel !== "SelectNone") {
            const selectedOption = books.options.find(option => option.variation.trim() === selectedOptionLabel);
        
            console.log('Selected Option:', selectedOption);
        
            if (selectedOptionLabel) {
              const correspondingValue = selectedOptionLabel.value;
              selectedValueElement.textContent = `${selectedOptionLabel}`;
            } else {
              selectedValueElement.textContent = '';
            }
          } else {
            selectedValueElement.textContent = 'Please select an option';
          }
        });
        

      };
    })


    .then(() => fetch("./src/print.json"))
    .then(response => response.json())
    .then(data => {
      window.displayPrint = function (index) {
        const print = data.print[index];
        const dropdownOptions = print.options.map(option => `<option value="${option.value}">${option.variation}</option>`).join('');
        const slideHTML = print.image.map(imageUrl => `<div><img src="${imageUrl}" alt="${print.name}" style="width:25vw; margin-bottom:10px";></div>`).join('');

        const printInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id ="detaildescription">
        <h2>${print.name}</h2>
        <p> ${print.description}</p>
        <p>Price: $${print.price.toFixed(2)}</p>
        <p>Quantity per Order: ${print.quantity}</p>
        <label for="variationDropdown"><p>Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Order: </p><p id="selectedValue"></p>
        <p id=note>${print.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <button id= "addtocart"><h5>Add to Cart</h5></button>

            </div>
        `;
        document.getElementById("product-info").innerHTML = printInfoHTML;

        $('.slick-carousel').slick({
          infinite: true,
          slidesToShow: 1, // Shows a three slides at a time
          slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
          arrows: true, // Adds arrows to sides of slider
          dots: true // Adds the dots on the bottom
        });


        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        variationDropdown.addEventListener('change', function () {
          const selectedOptionLabel = variationDropdown.value.trim();
        
          console.log('Selected Option Label:', selectedOptionLabel);
        
          if (selectedOptionLabel !== "SelectNone") {
            const selectedOption = print.options.find(option => option.variation.trim() === selectedOptionLabel);
        
            console.log('Selected Option:', selectedOption);
        
            if (selectedOptionLabel) {
              const correspondingValue = selectedOptionLabel.value;
              selectedValueElement.textContent = `${selectedOptionLabel}`;
            } else {
              selectedValueElement.textContent = '';
            }
          } else {
            selectedValueElement.textContent = 'Please select an option';
          }
        });
        

      };
    })



    .then(() => fetch("./src/presentation.json"))
    .then(response => response.json())
    .then(data => {
      window.displayPresentation = function (index) {
        const presentation = data.presentation[index];
        const dropdownOptions = presentation.options.map(option => `<option value="${option.value}">${option.variation}</option>`).join('');
        const slideHTML = presentation.image.map(imageUrl => `<div><img src="${imageUrl}" alt="${presentation.name}" style="width:25vw; margin-bottom:10px";></div>`).join('');

        const presentationInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id ="detaildescription">
        <h2>${presentation.name}</h2>
        <p> ${presentation.description}</p>
        <p>Price: $${presentation.price.toFixed(2)}</p>
        <p>Quantity per Order: ${presentation.quantity}</p>
        <label for="variationDropdown"><p>Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Order: </p><p id="selectedValue"></p>
        <p id=note>${presentation.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <button id= "addtocart"><h5>Add to Cart</h5></button>

            </div>
        `;
        document.getElementById("product-info").innerHTML = presentationInfoHTML;
        
        $('.slick-carousel').slick({
          infinite: true,
          slidesToShow: 1, // Shows a three slides at a time
          slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
          arrows: true, // Adds arrows to sides of slider
          dots: true // Adds the dots on the bottom
        });


        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        variationDropdown.addEventListener('change', function () {
          const selectedOptionLabel = variationDropdown.value.trim();
        
          console.log('Selected Option Label:', selectedOptionLabel);
        
          if (selectedOptionLabel !== "SelectNone") {
            const selectedOption = presentation.options.find(option => option.variation.trim() === selectedOptionLabel);
        
            console.log('Selected Option:', selectedOption);
        
            if (selectedOptionLabel) {
              const correspondingValue = selectedOptionLabel.value;
              selectedValueElement.textContent = `${selectedOptionLabel}`;
            } else {
              selectedValueElement.textContent = '';
            }
          } else {
            selectedValueElement.textContent = 'Please select an option';
          }
        });
        

      };
    })

    
    .then(() => fetch("./src/sampling.json"))
    .then(response => response.json())
    .then(data => {
      window.displaySampling = function (index) {
        const sampling = data.sampling[index];
        const dropdownOptions = sampling.options.map(option => `<option value="${option.value}">${option.variation}</option>`).join('');
        const slideHTML = sampling.image.map(imageUrl => `<div><img src="${imageUrl}" alt="${sampling.name}" style="width:25vw; margin-bottom:10px";></div>`).join('');

        const samplingInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id ="detaildescription">
        <h2>${sampling.name}</h2>
        <p> ${sampling.description}</p>
        <p>Price: $${sampling.price.toFixed(2)}</p>
        <p>Quantity per Order: ${sampling.quantity}</p>
        <label for="variationDropdown"><p>Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Order: </p><p id="selectedValue"></p>
        <p id=note>${sampling.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <button id= "addtocart"><h5>Add to Cart</h5></button>

            </div>
        `;
        document.getElementById("product-info").innerHTML = samplingInfoHTML;
        
        $('.slick-carousel').slick({
          infinite: true,
          slidesToShow: 1, // Shows a three slides at a time
          slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
          arrows: true, // Adds arrows to sides of slider
          dots: true // Adds the dots on the bottom
        });


        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        variationDropdown.addEventListener('change', function () {
          const selectedOptionLabel = variationDropdown.value.trim();
        
          console.log('Selected Option Label:', selectedOptionLabel);
        
          if (selectedOptionLabel !== "SelectNone") {
            const selectedOption = sampling.options.find(option => option.variation.trim() === selectedOptionLabel);
        
            console.log('Selected Option:', selectedOption);
        
            if (selectedOptionLabel) {
              const correspondingValue = selectedOptionLabel.value;
              selectedValueElement.textContent = `${selectedOptionLabel}`;
            } else {
              selectedValueElement.textContent = '';
            }
          } else {
            selectedValueElement.textContent = 'Please select an option';
          }
        });
        

      };
    })



});