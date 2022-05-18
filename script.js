// Obtain the img element, and assign it to the image variable
let image = document.getElementById("pet").src = "https://placedog.net/800/640?id=15";)

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = document.getElementById("shrink-grow");
    .style.height = "5px";
}





//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height == "100px") {
    image.style.height = "25px"
  }
  else {
    image.style.height = "100px"
  }
})