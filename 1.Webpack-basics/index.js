function handleGreetingChange() {
  const greetingHeading = document.querySelector("#greeting");
  greetingHeading.innerHTML = "Namastey User";
  const ulElement = document.querySelector(".shopping_bag");
  const listItems = ["apple", "orange", "banana"];
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement("li");
    tempEl.innerHTML = item;
    ulElement.appendChild(tempEl);
  });
}
