let list = {
	title: [],
	link: []
}

for (const index of document.querySelectorAll("a")) {
	list.title.push(index.innerText);
	list.link.push(index.href)
}

const sPanel = document.createElement("div");
sPanel.classList.add("nodisplay")
sPanel.id = "sPanel"
document.querySelector('.box').appendChild(sPanel)

const sList = document.createElement("ul")
sList.id = "sList"
sPanel.appendChild(sList)

for (let i=0; i <= list.title.length-1; i++){
	const li = document.createElement("li");
	li.classList.add("nodisplay")
	const a = document.createElement("a");
	const aNode = document.createTextNode(list.title[i])
	// Append text node to anchor element:
	a.appendChild(aNode)
	a.title = list.title[i];
	a.href = list.link[i];
	sList.appendChild(li);
	li.appendChild(a);
}

// function search() {
// Get the search query and convert it to uppercase:
// let searchbox = document.getElementById("search-item").value.toUpperCase();

// Get the <ul> element that contains the search results:
// let sList = document.querySelector('#sList');

// Iterate through the list.title array:
// for (let i = 0; i < list.title.length; i++) {
// Get the current title and convert it to uppercase:
// let title = list.title[i].toUpperCase();

// Check if the title matches the search query:
// if (title.includes(searchbox)) {
// If a match is found, remove the "nodisplay" class from the corresponding <li> element:
// let li = sList.children[i];
// li.classList.remove("nodisplay");
// }
// }
// }
function search() {
	let searchbox = document.getElementById("search-item").value.toUpperCase();
	let storeitems = document.querySelector('.product-list');
	let sList = document.querySelector('#sList');

	if (searchbox == "") {
		storeitems.classList.remove("nodisplay");
		sPanel.classList.add("nodisplay")

	} else {
		storeitems.classList.add("nodisplay");
		sPanel.classList.remove("nodisplay");
	}

	// Iterate through the list.title array:
	for (let i = 0; i < list.title.length; i++) {
		// Get the current title and convert it to uppercase:
		let title = list.title[i].toUpperCase();

		
		if (title.includes(searchbox)) {
			// If a match is found, remove the "nodisplay" class from the corresponding <li> element:
			let li = sList.children[i];
			li.classList.toggle("nodisplay");
		}
	}
}
// TODO: Make an accordionated list of all bookmarks.
// Add a key press event listener to the document /
// When that fires, pull down a custom serach box and dim the rest of the screen.
// Utilize something like the below to pull up custom results from your search.

// const search = function search() {
//     const searchbox = document.getElementById("search-item").value.toUpperCase();
//     const storeitems = document.getElementById("product-list");
//     const product = document.querySelectorAll(".product");
//     const name = document.getElementsByTagName("h2");

//     for (const index of name) {
//         let match = product[index].getElementsByTagName('h2')[0]

//         if (match) {
//             let textvalue = match.textContent || match.innerHTML

//             if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
//                 product[i].style.display = ""
//             else {
//             product[i].style.display = "none"
//             }
//         }
//         }
//     }
// }
// https://www.youtube.com/watch?v=ZFUOC-y4i0s


