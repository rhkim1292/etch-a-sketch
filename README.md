# etch-a-sketch
Etch-a-Sketch Web Page project

## Plan
- Does my program have a user interface? What will it look like? What functionality will the interface have?

  - This program will be using divs in an html document created by javascript code to create tiles that will change colors when the user hovers their mouse over a tile. The user will also be able to choose how many tiles they want on their interface.

- What inputs will my program have? Will the user enter data or will I get input from somewhere else?

  - Mouse hover will be retrieved from the javascript mouseevent interface.
  - Mouse clicks will be retrieved from the javascript mouseevent interface as well.
  - Text data will be retrieved from user inputted data via a prompt.

- What's the desired output?

  - The desired output is a grid of div tiles that change colors on mouseover and a button that, when clicked, allows the user to specify how big they want their grid to be.

- Given my inputs, what are the steps necessary to return the desired output?
  1. Have my javascript file add a 16x16 grid of div tiles to begin with.
  2. Add event listeners to the divs to listen for mouse over events.
  3. Change the color of the divs when the mouse over events fire.
  4. Add a button at the top of the page that, when clicked, opens up a prompt to allow the user to specify the size of their grid.
