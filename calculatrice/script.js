function calculateTotal() {
    const productCost = parseFloat(document.getElementById('productCost').value) || 0;
    const shippingCost = parseFloat(document.getElementById('shippingCost').value) || 0;
    const marketingCost = parseFloat(document.getElementById('marketingCost').value) || 0;
    const otherCost = parseFloat(document.getElementById('otherCost').value) || 0;
  
    const totalCost = productCost + shippingCost + marketingCost + otherCost;
  
    document.getElementById('totalCost').value = totalCost.toFixed(2);
  }
  