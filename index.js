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
const leastFavoriteCustomer = "Ashley";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "someone else";
}
