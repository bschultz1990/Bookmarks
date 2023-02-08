let sku = document.querySelectorAll(".sku");

sku.forEach(function (item) {
  item.onclick = function () {
    // Copy text
    navigator.clipboard.writeText(item.placeholder);

    // Display an alert
    console.log(`${item.placeholder} copied.`);
  };
});
