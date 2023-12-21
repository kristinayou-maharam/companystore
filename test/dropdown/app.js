document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON file
    fetch('options.json')
      .then(response => response.json())
      .then(data => {
        // Call the function to create the form with dynamic options
        createForm(data.options);
      })
      .catch(error => console.error('Error fetching JSON:', error));
  
    // Function to create the form dynamically
    function createForm(options) {
      const form = document.createElement('form');
      const dropdownLabel = document.createElement('label');
      const dropdown = document.createElement('select');
      const selectedValueElement = document.createElement('p');
      
      // Set attributes and text content
      dropdownLabel.setAttribute('for', 'optionsDropdown');
      dropdownLabel.textContent = 'Select an option:';
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
        optionElement.value = option.label;
        optionElement.textContent = option.label;
        dropdown.appendChild(optionElement);
      });
  
      // Add event listener to the dropdown to update the displayed value
      dropdown.addEventListener('change', function () {
        const selectedOptionLabel = dropdown.value;
        const selectedOption = options.find(option => option.label === selectedOptionLabel);
  
        if (selectedOption) {
          const correspondingValue = selectedOption.value;
          selectedValueElement.textContent = `Selected value: ${correspondingValue}`;
        } else {
          selectedValueElement.textContent = 'Unknown Value';
        }
      });
    }
  });
  