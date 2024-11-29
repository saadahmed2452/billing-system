const button = document.getElementById("addProductBtn");
const tableData = document.getElementById("productTable");
const total = document.getElementById("totalAmount");
const finalSumAll = document.getElementById("totalWithGST");
let totalAmount = 0;

button.addEventListener("click", () => {
  const productName = document.getElementById("productName").value;
  const productPrice = parseFloat(
    document.getElementById("productPrice").value
  );

  // Validate input
  if (!productName || isNaN(productPrice) || productPrice <= 0) {
    alert("Enter valid details");
    return;
  }
  
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";

  // Update total amount and GST
  // totalAmount += productPrice;
  // const withGst = productPrice * 0.18;
  totalAmount += productPrice;
  const withGst = totalAmount * 0.18;
  
  const g = withGst + totalAmount;
  // grandTotal.textContent = g;

  console.log("grand", g);

  total.textContent = totalAmount.toFixed(2);
  finalSumAll.textContent = withGst.toFixed(2);
  grandTotal.textContent = g.toFixed(2);

  // Create new table row
  const row = document.createElement("tr");
  row.innerHTML = `<td class="border border-gray-300 px-4 py-2">${productName}</td> 
                   <td class="border border-gray-300 px-4 py-2">${productPrice.toFixed(
                     2
                   )}</td>`;

  productTable.appendChild(row);

  // Clear input fields
});

// const productTable = document.getElementById("productTable");
// const totalAmountEl = document.getElementById("totalAmount");
// const totalWithGSTEl = document.getElementById("totalWithGST");
// const addProductBtn = document.getElementById("addProductBtn");
// let totalAmount = 0;

// // Add product event listener
// addProductBtn.addEventListener("click", () => {
//   const productName = document.getElementById("productName").value;
//   const productPrice = parseFloat(
//     document.getElementById("productPrice").value
//   );

//   if (!productName || isNaN(productPrice) || productPrice <= 0) {
//     alert("Please enter valid product details.");
//     return;
//   }

//   // Add product to the table
//   const row = document.createElement("tr");
//   row.innerHTML = `
//         <td class="border border-gray-300 px-4 py-2">${productName}</td>
//         <td class="border border-gray-300 px-4 py-2 text-right">₹ ${productPrice.toFixed(
//           2
//         )}</td>
//       `;
//   productTable.appendChild(row);

//   // Update totals
//   totalAmount += productPrice;
//   const totalWithGST = totalAmount * 1.18;

//   totalAmountEl.textContent = totalAmount.toFixed(2);
//   totalWithGSTEl.textContent = totalWithGST.toFixed(2);

//   // Clear inputs
//   document.getElementById("productName").value = "";
//   document.getElementById("productPrice").value = "";
// });
