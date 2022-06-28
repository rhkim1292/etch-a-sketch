// ---------------------
// GLOBAL VARIABLES
// ---------------------
const DEFAULT_GRID_SIZE = 16;
const TILE_BG_COLOR = "black";
const TILE_BG_COLOR_HOVER = "white";
let gridSize = DEFAULT_GRID_SIZE;
const gridContainer = document.querySelector(".grid-container");
const resolutionBtn = document.getElementById("resolutionBtn");

// --------------------
// EVENT LISTENERS
// --------------------
resolutionBtn.addEventListener("click", (e) => {
    gridSize = prompt("Choose a grid size from 1 to 100");
    gridSize = parseInt(gridSize);

    if (!gridSize || gridSize > 100 || gridSize < 1) {
        alert("Are you kidding?! That's not a valid input!");
        gridSize = DEFAULT_GRID_SIZE;
        return;
    }

    gridContainer.replaceChildren(); // Removes all children of grid container
    createGrid(gridSize, gridContainer);
});

gridContainer.addEventListener("mouseover", (e) => {
    let isTile = e.target.className === "tile";

    if (!isTile) {
        return;
    }

    colorTileRandomly(e);
});

// -----------------------------
// FUNCTION DECLARATIONS
// -----------------------------
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
        tile.setAttribute("data-lightness", "45");
        tile.setAttribute("data-lightness-increment", "-5");
        tile.style.backgroundColor = TILE_BG_COLOR;
        tile.style.flex = `1 1 ${tileToContainerWidthRatio}%`;
        gridContainer.appendChild(tile);
    }
}

function colorTileRandomly(e) {
    let randomHue = Math.floor(Math.random() * 360);
    let randomSaturation = Math.floor(Math.random() * 100);
    let currLightness = parseInt(e.target.getAttribute("data-lightness"));
    let lightnessIncrement = parseInt(e.target.getAttribute("data-lightness-increment"));
    
    if (currLightness <= 0 || currLightness > 50) lightnessIncrement = -lightnessIncrement;

    currLightness += lightnessIncrement;

    e.target.setAttribute("data-lightness", `${currLightness}`);
    e.target.setAttribute("data-lightness-increment", `${lightnessIncrement}`);
    e.target.style.backgroundColor = `hsl(${randomHue}, ${randomSaturation}%, ${currLightness}%)`
}

createGrid(gridSize, gridContainer);