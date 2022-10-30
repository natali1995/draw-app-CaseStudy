function LineToTool(){
	// set an icon and name for the object
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	// variables to start drawing line

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){
		// condition, if the mouse was pressed
		if(mouseIsPressed){
			// condition, if the coordinate of startMouseX correspond -1
			// set startMouseX and startMouseY to the current mouseX and mouseY and start drawing

			if(startMouseX === -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				// drawing = true need to begin new line, not to redrawing previous
				drawing = true;
				// loadPixels save the previous line and opportunity to draw new one
				loadPixels();
			}

			else{
				// display the last saved state in line
				updatePixels();
				// draw line
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		// condition, if drawing has already started, stop the drawing line and start new one
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
}
