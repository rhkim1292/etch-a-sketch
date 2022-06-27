let gridSize = 16;
const gridContainer = document.querySelector(".grid-container");
createGrid(gridSize, gridContainer);

function createGrid(gridSize, gridContainer) {
    let gridArea = gridSize * gridSize;
    let tile;

    for (let i = 0; i < gridArea; i++) {
        tile = Object.assign(document.createElement("div"), {
            className: `tile-${i + 1}`,
            textContent: `tile ${i + 1}`,
        });
        tile.style.backgroundColor = "white";
        tile.style.borderStyle = "solid";
        tile.style.borderColor = "red";
        gridContainer.appendChild(tile);
    }
}