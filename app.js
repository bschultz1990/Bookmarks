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

for (let i=0; i <= array.length(list.title)-1; i++){
	const li = document.createElement("li");
	const a = document.createElement("a");
	const aNode = document.createTextNode(list.title[i])
	// Append text node to anchor element:
	a.appendChild(aNode)
	a.title = list.title[i];
	a.href = list.link[i];
	sList.appendChild(li);
	li.appendChild(a);
}

function search() {
	let searchbox = document.getElementById("search-item").value.toUpperCase();
	let storeitems = document.querySelector('.product-list');

	if (searchbox == "") {
		console.log("no stuff in box");
		storeitems.classList.remove("nodisplay");
		sPanel.classList.add("nodisplay")

	} else {
		console.log("stuff in search box");
		storeitems.classList.add("nodisplay");
		sPanel.classList.remove("nodisplay");
	}

	// for (const index of name){
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


