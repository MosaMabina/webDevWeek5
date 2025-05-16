// Change the heading text
document.getElementById("changeTextBtn").addEventListener("click", function () {
  const heading = document.getElementById("main-title");
  heading.textContent = "Your Beauty, Our Passion ✨";
});

// Change background color of the description
document.getElementById("changeColorBtn").addEventListener("click", function () {
  const description = document.getElementById("description");
  description.style.backgroundColor = "#f0e6ff";
  description.style.padding = "10px";
  description.style.borderRadius = "5px";
});

// Add a new list item
document.getElementById("addServiceBtn").addEventListener("click", function () {
  const list = document.getElementById("serviceList");
  const newItem = document.createElement("li");
  newItem.textContent = "Manicure & Pedicure";
  list.appendChild(newItem);
});

// Remove the last item
document.getElementById("removeServiceBtn").addEventListener("click", function () {
  const list = document.getElementById("serviceList");
  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild);
  }
});
