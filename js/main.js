var list = document.getElementById("main");
var links = [];

for(var i = 0; i < links.length; i++){
    var item = document.createElement("LI");
    var link = document.createElement("A");
    link.href = links[i].href;
    link.innerHTML = links[i].text;
    item.appendChild(link);
    list.appendChild(item);
}