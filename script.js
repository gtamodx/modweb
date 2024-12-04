// Variables for pagination
const itemsPerPage = 12;  // Number of items per page
let currentPage = 1;  // Start from the first page

const products = document.querySelectorAll('.mod-card');  // All product cards
const totalProducts = products.length;  // Total number of products

// Function to show products for the current page
function showPage(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  
  // Hide all products initially
  products.forEach((product, index) => {
    product.style.display = 'none';  // Hide all products
  });

  // Show products for the current page
  for (let i = startIndex; i < endIndex; i++) {
    if (products[i]) {
      products[i].style.display = 'block';  // Show current product
    }
  }

  // Update page info
  document.getElementById('page-info').textContent = `Page ${currentPage}`;

  // Enable/Disable buttons based on current page
  document.getElementById('prev').disabled = currentPage === 1;
  document.getElementById('next').disabled = currentPage * itemsPerPage >= totalProducts;
}

// Event listeners for Previous and Next buttons
document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

document.getElementById('next').addEventListener('click', () => {
  if (currentPage * itemsPerPage < totalProducts) {
    currentPage++;
    showPage(currentPage);
  }
});

// Initial page load
showPage(currentPage);
function toggleMenu() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}
function toggleMenu() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}
