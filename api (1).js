// fetch data from a public API
function doAPICall() {

  fetch("https://alexwohlbruck.github.io/cat-facts/?ref=apilist.fun")
   .then(response => response.json()) // body is not quite ready yet
   .then(data => doSomething(data)); // now the body is ready

}


// callback function to be used when data is fetched from API
// parameter data will be a JavaScript object
function processData(data) {

  # Get the div or other DOM element needed for the data


  # Access the necessary fields of the data


  # Update the DOM to display the data in some way

}
