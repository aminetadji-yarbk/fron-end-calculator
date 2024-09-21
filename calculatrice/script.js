function addRow() {
  const tableBody = document.querySelector('#costTable tbody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td><input type="text" class="form-control" placeholder="Enter Cost Item"></td>
    <td><input type="number" class="form-control cost-input" placeholder="Enter Price" oninput="calculateTotal()"></td>
    <td><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>
  `;

  tableBody.appendChild(newRow);
}

function removeRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
  calculateTotal();  // Recalculate total after removing a row
}

function calculateDeliveredOrderCost() {
  // Get the values from the inputs
  const confirmationRate = parseFloat(document.getElementById('confirmationRate').value) / 100 || 0; // Y: Confirmation Rate (converted from percentage)
  const deliveryRate = parseFloat(document.getElementById('deliveryRate').value) / 100 || 0; // Z: Delivery Rate (converted from percentage)
  const cost = parseFloat(document.getElementById('cost').value) || 0; // Cost

  // Calculate the delivered order cost using the formula
  let deliveredOrderCost = 0;
  if (confirmationRate > 0 && deliveryRate > 0) {
      deliveredOrderCost = cost / (confirmationRate * deliveryRate);
  }
  
  // Display the result in the corresponding input field
  document.getElementById('deliveredOrderCost').value = deliveredOrderCost.toFixed(2); // Show up to 2 decimal places
}

function calculateTotal() {
  // Calculate delivered order cost first
  calculateDeliveredOrderCost();
  
  // Get the delivered order cost
  const deliveredOrderCost = parseFloat(document.getElementById('deliveredOrderCost').value) || 0;

  // Calculate additional costs
  const costInputs = document.querySelectorAll('.cost-input');
  let additionalCosts = 0;

  costInputs.forEach(input => {
      additionalCosts += parseFloat(input.value) || 0; // Add value if it's a number, else add 0
  });

  // Calculate total cost: total cost = delivered order cost + additional costs
  const totalCost = deliveredOrderCost + additionalCosts;

  // Display the final calculated total
  document.getElementById('totalCost').value = totalCost.toFixed(2);
}
