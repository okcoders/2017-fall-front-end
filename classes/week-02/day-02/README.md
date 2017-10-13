# CSS with Material Design

Intended as a unified platform for consistent and flexible UI design for both touch & mouse interfaces.

## Topics

### material

The name Material comes from the idea that your working with light fabrics.  The concepts in material match this "model."

### material properties
	* Each with an X & Y position and layered in a Z position (aka elevation).
	* All Material elements are 1 pixel "thick".
	* No 2 elements can occupy the same space or "bleed" into each other.
	* Materials can change shape, join, and split

### elevation
	* Elements cast shadows bashed on their elevation.
	* Generally elevation movement should be limited to user response/interaction
	* A child's elevation is relative to the parents.
	* All elements have a default or resting elevation.  Including things like dialog boxes and mouse pointers.  

### animation
	* Material elements can be created & destroyed at any place at any time.
	* Material elements can move any direction & even twist and turn

### style
	* [Material colors](http://materializecss.com/color.html#palette)

### layout

Uses a standard 12 column grid layout similar to things like bootstrap.  Classes are used to modify everything.

.container
	.row
		.col

#### Structure
	* Use .container as box level object to center set global width.
	* Use .row to identify something holding a grid. Otherwise it will be a centered single row/column
	* .s .m .l (small, medium, large) is used to define column with for small, medium, and large displays.
	* additional objects include
		* .intro (call to action style banner/header)
		* .footer (full length bottom footer)
		* .materialboxed (lightbox style pop-up zoom theme)

### components

### patterns

## Project Layout

MyWebsite/
  |--css/
  |  |--materialize.css
  |
  |--fonts/
  |  |--roboto/
  |
  |--js/
  |  |--materialize.js
  |
  |--index.html

## Resources

* [Material Design Manifesto](https://material.io/guidelines/material-design/introduction.html)
* [Udacity Material Course](https://www.udacity.com/course/material-design-for-android-developers--ud862)
* [Material CSS Tutorial](https://scotch.io/tutorials/make-material-design-websites-with-the-materialize-css-framework)
