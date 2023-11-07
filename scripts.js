function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll("input[name=grocery-item]:checked");
  const userSelectionsArray = Array.from(userSelections);

  const resultsHeading = document.createElement("h2");
  resultsHeading.append("You need these items from the grocery store:");
  document.body.append(resultsHeading);

  userSelectionsArray.forEach(function (element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    document.body.append(paragraph);
  });
}

window.addEventListener("load", function () {
  document.querySelector("form#grocery-list").addEventListener("submit", handleForm);
});