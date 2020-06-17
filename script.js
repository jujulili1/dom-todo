let button = document.getElementById("button");

let input = document.getElementById("input");

let list = document.getElementById("list");

button.addEventListener("click", (e) => {
    createItem(input.value);
});

function createItem(value) {
    let result = `<li><div class="value"> ${value}</div> <div><button id="edit">edit</button>   <button class="delete">delete</button><div></li>`;
    list.insertAdjacentHTML("beforeend", result);
    input.value = "";
}