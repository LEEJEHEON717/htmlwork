let list = document.getElementById("list");

for(let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    let img = document.createElement("img");
    li.appendChild(img);
    list.appendChild(li);
}