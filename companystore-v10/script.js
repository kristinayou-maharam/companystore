document.addEventListener("DOMContentLoaded", function () {

  fetch("./src/stationery.json")
    .then(response => response.json())
    .then(data => {
      window.displayStationery = function (index) {
        const stationery = data.stationery[index];
        const dropdownOptions = stationery.options.map(option => `<option value="${option.value}">${option.variation}</option>`).join('');
        const slideHTML = stationery.image.map(imageUrl => `<div><img src="${imageUrl}" alt="${stationery.name}" style="width:25vw; margin-bottom:10px";></div>`).join('');

        const stationeryInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id ="detaildescription">
        <h2>${stationery.name}</h2>
        <p> ${stationery.description}</p>
        <form class="add" method="post" action="javascript:void(0);">
        <p>Price: $${stationery.price.toFixed(2)}</p>
        <p>Quantity per Order: ${stationery.quantity}</p>
        <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Item Code: </p><p id="selectedValue"></p>
        <p id=note>Note: ${stationery.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <h5><input type="submit" id= "addtocart" value="Add to Wishlist"></h5>
        </form>
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
        <form class="add" method="post" action="javascript:void(0);">
        <p>Price: $${neww.price.toFixed(2)}</p>
        <p>Quantity per Order: ${neww.quantity}</p>
        <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Item Code: </p><p id="selectedValue"></p>
        <p id=note>Note: ${neww.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <h5><input type="submit" id= "addtocart" value="Add to Wishlist"></h5>
        </form>
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
        <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Item Code: </p><p id="selectedValue"></p>
        <p id=note>Note: ${books.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <h5><input type="submit" id= "addtocart" value="Add to Wishlist"></h5>

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
        <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Item Code: </p><p id="selectedValue"></p>
        <p id=note>Note: ${print.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <h5><input type="submit" id= "addtocart" value="Add to Wishlist"></h5>

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
        <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Item Code: </p><p id="selectedValue"></p>
        <p id=note>Note: ${presentation.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <h5><input type="submit" id= "addtocart" value="Add to Wishlist"></h5>

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
        <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Item Code: </p><p id="selectedValue"></p>
        <p id=note>Note: ${sampling.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <h5><input type="submit" id= "addtocart" value="Add to Wishlist"></h5>

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


    .then(() => fetch("./src/more.json"))
    .then(response => response.json())
    .then(data => {
      window.displayMore= function (index) {
        const more = data.more[index];
        const dropdownOptions = more.options.map(option => `<option value="${option.value}">${option.variation}</option>`).join('');
        const slideHTML = more.image.map(imageUrl => `<div><img src="${imageUrl}" alt="${more.name}" style="width:25vw; margin-bottom:10px";></div>`).join('');

        const moreInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id ="detaildescription">
        <h2>${more.name}</h2>
        <p> ${more.description}</p>
        <p>Price: $${more.price.toFixed(2)}</p>
        <p>Quantity per Order: ${more.quantity}</p>
        <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Item Code: </p><p id="selectedValue"></p>
        <p id=note>Note: ${more.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <h5><input type="submit" id= "addtocart" value="Add to Wishlist"></h5>

            </div>
        `;
        document.getElementById("product-info").innerHTML = moreInfoHTML;
        
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
            const selectedOption = more.options.find(option => option.variation.trim() === selectedOptionLabel);
        
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

 

    .then(() => fetch("./src/all.json"))
    .then(response => response.json())
    .then(data => {
      window.displayAll = function (index) {
        const all = data.all[index];
        const dropdownOptions = all.options.map(option => `<option value="${option.value}">${option.variation}</option>`).join('');
        const slideHTML = all.image.map(imageUrl => `<div><img src="${imageUrl}" alt="${all.name}" style="width:25vw; margin-bottom:10px";></div>`).join('');

        const allInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id ="detaildescription">
        <h2>${all.name}</h2>
        <p> ${all.description}</p>
        <p>Price: $${all.price.toFixed(2)}</p>
        <p>Quantity per Order: ${all.quantity}</p>
        <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
        <select id="variationDropdown">${dropdownOptions}</select><br><br>
        <p id="don">Item Code: </p><p id="selectedValue"></p>
        <p id=note>Note: ${all.Note}</p>
        <p style="display: inline-block">Quantity:</p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <h5><input type="submit" id= "addtocart" value="Add to Wishlist"></h5>

            </div>
        `;
        document.getElementById("product-info").innerHTML = allInfoHTML;
        
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
            const selectedOption = all.options.find(option => option.variation.trim() === selectedOptionLabel);
        
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

