let temp0 = document.querySelectorAll("a")
let linkTitles=[]
for (const index of temp0) {
    linkTitles.push(index.innerText)
}
console.dir(linkTitles);

const search = function search() {
    const searchBox = document.getElementById("#search-item").value.toUpperCase();
}
