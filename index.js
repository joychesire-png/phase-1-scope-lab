var customerName = "bob";

function upperCaseCustomerName() {
  window.customerName = "BOB";
}

function setBestCustomer() {
  window.bestCustomer = "not bob";
}
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}
function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "Assignment to constant variable";
}
