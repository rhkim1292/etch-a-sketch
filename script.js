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
