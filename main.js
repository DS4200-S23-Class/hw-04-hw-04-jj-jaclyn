// Add border function

// console.log('HI')
// function pointClicked(circle) {
//   // change class if clicked based on event listener
//   point.classList.toggle("clicked"); 

//   // get x and y coordinates
//   let circle = document.getElementById('circle')
//   let x_var = circle.cx / 50;
//   let y_var = (500 - circle.cx ) / 50;

//   console.log(y_var);

//   // create new text
//   let text1 = "Last point clicked: "
//   let text2 = "(" + x_var +"," + y_var + ")"

//   console.log("(" + x_var +"," + y_var + ")");
  
//   // replace text
//   document.getElementById("last_point1").innerHTML = text1;
//   document.getElementById("last_point2").innerHTML = text2;
// }


// Add border function
// function pointClicked() {
//   // change class if clicked based on event listener
//   this.classList.toggle("addBorder");

//   // // get x and y coordinates
//   let x_var = this.getAttribute("cx") / 50;
//   let y_var = (500 - this.getAttribute("cy")) / 50;

//   // create new text
//   let text1 = "Last point clicked: "
//   let text2 = "(" + x_var +"," + y_var + ")"
  
//   // replace text
//   document.getElementById("last_point1").innerHTML = text1;
//   document.getElementById("last_point2").innerHTML = text2;
// }


// // listen for a click
// // Create list of points
// let points = document.getElementsByTagName("circle");

// // loop through all points
// for (let i = 0; i < points.length; i++) {
    
//     // check each point for clicks
//     let point = points[i];
//     point.addEventListener("click", pointClicked);


points = document.getElementsByTagName("circle");

point.addEventListener('click', function(event) {
  if (point.getAttribute('cx') && point.getAttribute('cy')) {
    point.removeAttribute('cx');
    point.removeAttribute('cy');
  } else {
    point.setAttribute('cx', event.offsetX);
    point.setAttribute('cy', event.offsetY);
  }
});

