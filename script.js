let gridSize = 16;
const gridContainer = document.querySelector(".grid-container");
createGrid(gridSize, gridContainer);

function createGrid(gridSize, gridContainer) {
    let gridArea = gridSize * gridSize;
    let tile;
    let containerWidth = gridContainer.clientWidth - 15;
    let widthOfTile = containerWidth / gridSize;
    let tileToContainerWidthRatio = (widthOfTile / containerWidth) * 100;

    for (let i = 0; i < gridArea; i++) {
        tile = Object.assign(document.createElement("div"), {
            className: `tile-${i + 1}`,
        });
        tile.style.backgroundColor = "white";
        tile.style.borderStyle = "none";
        tile.style.borderColor = "red";
        tile.style.flex = `1 1 ${tileToContainerWidthRatio}%`;
        gridContainer.appendChild(tile);
    }
}
