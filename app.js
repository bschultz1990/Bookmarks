let list = {
	title: [],
	link: []
}

for (const index of document.querySelectorAll("a")) {
	list.title.push(index.innerText);
	list.link.push(index.href)
}

// Make a search panel that displays results when invoked.
const sPanel = document.createElement("div");
sPanel.style.display = "none"
sPanel.id = "sPanel"
document.querySelector('.box').appendChild(sPanel)

// Make a <ul> element for future search results. Hide it for now.
const sList = document.createElement("ul")
sList.id = "sList"
sPanel.appendChild(sList)

// Populate the <ul> with <li>s and links from the HTML page. Hide for now.
for (let i=0; i <= list.title.length-1; i++){
	const li = document.createElement("li");
	li.style.display = "none"
	const a = document.createElement("a");
	const aNode = document.createTextNode(list.title[i])
	// Append text node to anchor element:
	a.appendChild(aNode)
	a.title = list.title[i];
	a.href = list.link[i];
	sList.appendChild(li);
	li.appendChild(a);
}

// Dynamically show and hide each <li> based on search() results.
function search() {
	let searchbox = document.getElementById("search-item").value.toUpperCase();
	let storeitems = document.querySelector('.product-list');
	let sList = document.querySelector('#sList');

	if (searchbox == "") {
		storeitems.style.display = ""
		sPanel.style.display = "none"

	} else {
		storeitems.style.display = "none"
		sPanel.style.display = ""
	}

	// Iterate through the list.title array:
	for (let i = 0; i < list.title.length; i++) {
		let title = list.title[i].toUpperCase();
		console.log(`Title: ${title}`)
		let li = sList.children[i];

		if (title.includes(searchbox)) {
			// If a match is found, display it.
			li.style.display = ""
		} else {
			li.style.display = "none";
		}
	}
}
