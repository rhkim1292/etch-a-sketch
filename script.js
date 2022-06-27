const gridContainer = document.querySelector(".grid-container");
const tile = Object.assign(document.createElement("div"), {
    className: "tile-1",
    textContent: "tile 1",
});
console.log(tile);
tile.style.backgroundColor = "white";
gridContainer.appendChild(tile);