
// Create list of points
let points = document.getElementsByTagName("circle");

// loop through all points
for (let i = 0; i < points.length; i++) {
    
    // check each point for clicks
    let point = points[i];
    point.addEventListener("click", function(){

                  // click then add border
                  this.classList.toggle("Border");

                  //find the cx and cy
                  let cx = this.getAttribute("cx") / 50;
                  let cy = (500 - this.getAttribute("cy")) / 50;

                  // create new text
                  let text1 = "Last point clicked: "
                  let text2 = "(" + cx +"," + cy + ")"
  
                  // show the text information
                  document.getElementById("text1").innerHTML = text1;

                  document.getElementById("text2").innerHTML = text2;
}
)}

function addDot() {
    var inputX = document.getElementById('cx').value;
    var inputY = document.getElementById('cy').value;
    
};