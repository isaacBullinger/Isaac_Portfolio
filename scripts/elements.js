document.getElementById("header").innerHTML = fetch("../header.html").then(response => response.text()).then(html => document.getElementById("header").innerHTML = html);

document.getElementById("footer").innerHTML = fetch("../footer.html").then(response => response.text()).then(html => document.getElementById("footer").innerHTML = html);