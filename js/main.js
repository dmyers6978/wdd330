var list = document.getElementById("main");
const links = [
    {
      text: "Week1 notes",
      href: "week1/index.html"
    },
    {
      text: "Week2 notes",
      href: "week2/index.html"
    },
    {
      text: "Week4 search box",
      href: "week4/index.html"
    },
    {
      text: "Week4 hero form",
      href: "week4/hero.html"
    },
    {
      text: "Week5 exception handling",
      href: "week5/index.html"
    },
    {
      text: "Week7 notes",
      href: "week7/index.html"
    }
  ]

for(var i = 0; i < links.length; i++){
    var item = document.createElement("LI");
    var link = document.createElement("A");
    link.href = links[i].href;
    link.innerHTML = links[i].text;
    item.appendChild(link);
    list.appendChild(item);
}