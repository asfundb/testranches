document.addEventListener("DOMContentLoaded", function () {
  var filterItems = document.querySelectorAll(".feature-filter-item");

  function filterProducts(brand) {
  var products = document.querySelectorAll(".filterable");
  console.log('step 1');
  products.forEach(function (product) {
    // Check if the product has a special view-all data attribute
    if (product.dataset.attribute === 'view-all') {
      product.style.display = "block"; // Always show the view-all item
    } else if (product.dataset.attribute.toUpperCase() === brand.toUpperCase() || brand == "All") {
      product.style.display = "block";
    } else {        
      product.style.display = "none";
    }
  });
  
  // Update filter buttons appearance
  filterItems.forEach(function (item) {
    if (item.dataset.brand === brand) {
      if(item?.classList) item.classList.add("feature-filter-active"); // Using optional chaining for classList
    } else {
      if(item?.classList) item.classList.remove("feature-filter-active"); // Using optional chaining for classList
    }
  });
}

  
   filterItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      var brand = this.dataset.brand;
      filterProducts(brand);
    });
  });
});
