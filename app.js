let linkList = document.querySelectorAll("a");
let linkTitles = [];
for (const index of linkList) {
	linkTitles.push(index.innerText);
}
// console.dir(linkTitles);

// let hrefs = 

const search = function search() {
	let searchbox = document.getElementById("search-item").value.toUpperCase();
	let storeitems = document.querySelector('.product-list');
	let product = document.querySelectorAll('a');
	let name = document.querySelectorAll('a');
	// let searchresults = 

	if (searchbox == ""){
		console.log("no stuff in box")
		storeitems.classList.remove("nodisplay")
	} else {
		console.log("stuff in search box")
		storeitems.classList.add("nodisplay")

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


