function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show1");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}

window.onclick = function(e) {
  // Close the first dropdown
  var myDropdown = document.getElementById("myDropdown");
  if (!e.target.matches('.dropbtn') && myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
  }

  // Close the second dropdown
  var myDropdown1 = document.getElementById("myDropdown1");
  if (!e.target.matches('.dropbtn1') && myDropdown1.classList.contains('show1')) {
      myDropdown1.classList.remove('show1');
  }

  // Close the third dropdown
  var myDropdown2 = document.getElementById("myDropdown2");
  if (!e.target.matches('.dropbtn2') && myDropdown2.classList.contains('show2')) {
      myDropdown2.classList.remove('show2');
  }
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

document.getElementById('add-inputs-button').addEventListener('click', function() {
  const inputContainer = document.getElementById('input-container');
  const currentInputs = inputContainer.getElementsByTagName('input').length;
  
  for (let i = 1; i <= 3; i++) {
      const newInput = document.createElement('input');
      newInput.type = 'text';
      newInput.placeholder = `Input ${currentInputs + i}`;
      inputContainer.appendChild(newInput);
  }
});

document.getElementById('remove-inputs-button').addEventListener('click', function() {
  const inputContainer = document.getElementById('input-container');
  const currentInputs = inputContainer.getElementsByTagName('input');
  
  if (currentInputs.length > 3) {
      for (let i = 0; i < 3; i++) {
          inputContainer.removeChild(currentInputs[currentInputs.length - 1]);
      }
  }
});
function validateSearch() {
  // Get the search input value
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  
  // Define a list of acceptable keywords for "Agreed"
  const validKeywords = ['function1', 'function2', 'function3']; // Replace with your own criteria
  
  // Define a list of acceptable keywords for "Wait"
  const waitKeywords = ['wait1', 'wait2', 'wait3']; // Replace with your own criteria
  
  // Initialize the result message and class
  let resultMessage = "";
  let resultClass = "";
  
  // Check if the input matches any of the valid "Agreed" keywords
  if (validKeywords.includes(query)) {
      resultMessage = `"${query}" is Agreed.`;
      resultClass = "agreed";
  } 
  // Check if the input matches any of the "Wait" keywords
  else if (waitKeywords.includes(query)) {
      resultMessage = `"${query}" is Wait.`;
      resultClass = "wait";
  } 
  // If input does not match any valid keywords
  else {
      resultMessage = `"${query}" is disagreed.`;
      resultClass = "not-found";
  }
  
  // Display the result
  displayResult(resultMessage, resultClass);
  
  // Prevent the form from submitting
  return false;
}

function displayResult(message, resultClass) {
  // Get the result div
  const resultDiv = document.getElementById('result');
  
  // Display the result message
  resultDiv.innerText = message;
  
  // Remove any previous classes from the result div
  resultDiv.classList.remove("agreed", "wait", "not-found");
  
  // Add the new class to the result div for background color change
  resultDiv.classList.add(resultClass);
}
function showSelection() {
  var selectElement = document.getElementById('category');
  var selectedValue = selectElement.value;
  var resultDiv = document.getElementById('result');

  var content = '';

  switch (selectedValue) {
      case 'karthik':
          content = `
              <h2 class="section-title">Mobile</h2>
              <p class="description">Check out our top laptop picks with these resources:</p>
              <a class="pdf-link" href="https://example.com/laptop-guide.pdf" target="_blank">Laptop Buying Guide</a>
              <a class="pdf-link" href="https://example.com/laptop-specs.pdf" target="_blank">Laptop Specifications</a>
              <img class="image" src="https://example.com/laptop-image.jpg" alt="Laptops">
          
          `;
          break;
      case 'laptop':
          content = `
              <h2 class="section-title">Laptops</h2>
              <p class="description">Check out our top laptop picks with these resources:</p>
              <a class="pdf-link" href="https://example.com/laptop-guide.pdf" target="_blank">Laptop Buying Guide</a>
              <a class="pdf-link" href="https://example.com/laptop-specs.pdf" target="_blank">Laptop Specifications</a>
              <img class="image" src="https://example.com/laptop-image.jpg" alt="Laptops">
          `;
          break;
   
      default:
          content = '<p>Please select a category.</p>';
          break;
  }

  resultDiv.innerHTML = content;
}