document.getElementById("add-button").addEventListener("click", function () {
    const itemInput = document.getElementById("item-input");
    const itemText = itemInput.value;
    if (itemText === "") return;

    const li = document.createElement("li");
    li.textContent = itemText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(completeButton);
    li.appendChild(removeButton);

    document.getElementById("shopping-list").appendChild(li);
    itemInput.value = "";
});
