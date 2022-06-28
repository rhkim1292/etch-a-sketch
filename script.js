const DEFAULT_GRID_SIZE = 16
let gridSize = DEFAULT_GRID_SIZE;

const gridContainer = document.querySelector(".grid-container");
const resolutionBtn = document.getElementById("resolutionBtn");

resolutionBtn.addEventListener("click", (e) => {
    gridSize = prompt("Choose a grid size from 1 to 100");
    gridSize = parseInt(gridSize);
    console.log(gridSize);
    if (!gridSize || gridSize > 100 || gridSize < 1) {
        alert("Are you kidding?! That's not a valid input!");
        gridSize = DEFAULT_GRID_SIZE;
        return;
    }

    gridContainer.replaceChildren(); // Removes all children of grid container
    createGrid(gridSize, gridContainer);
});

createGrid(gridSize, gridContainer);

function createGrid(gridSize, gridContainer) {
    let gridArea = gridSize * gridSize;
    let tile;
    let containerWidth = gridContainer.clientWidth - 15;
    let widthOfTile = containerWidth / gridSize;
    let tileToContainerWidthRatio = (widthOfTile / containerWidth) * 100;

    for (let i = 0; i < gridArea; i++) {
        tile = Object.assign(document.createElement("div"), {
            id: `tile-${i + 1}`,
            className: "tile",
        });
        tile.style.backgroundColor = "white";
        tile.style.flex = `1 1 ${tileToContainerWidthRatio}%`;
        gridContainer.appendChild(tile);
    }
}

gridContainer.addEventListener("mouseover", (e) => {
    let isTile = e.target.className === "tile";

    if (!isTile) {
        return;
    }

    e.target.style.backgroundColor = "black";
});
