let temp0 = document.querySelectorAll("a")
let linkTitles=[]
for (const index of temp0) {
    linkTitles.push(index.innerText)
}
console.dir(linkTitles);

const search = function search() {
    const searchTerm = document.getElementById("#search-item").value.toUpperCase();

}

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
