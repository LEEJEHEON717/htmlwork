let li = document.createElement("li");
let a = document.createElement("a");
li.appendChild(a);
let href = document.createAttribute("href");
let ul = document.getElementById("ul");
ul.appendChild(li);

function test(){
    href.value = "#";
    a.setAttributeNode(href);
}

test();