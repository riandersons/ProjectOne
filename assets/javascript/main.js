$(document).ready(function () {
//pull information from form and build the query URL


//Click handlers
//using the on click function event, it allows the user to hit enter on the keyboard and it registers the search 
$("#submitOccupation").on("click", function (event) {

    // Grab value from User input field
    const OcupationInput = $('input').val();
    const blsAPIKey
    // URL for ajex query
    const queryURL = "https:api.bls.gov/publicAPI/v2/timeseries/data/?registrationkey=" +
        blsAPIKey + "&seriesid=series1";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        const results = response;
        console.log(response);
    });
    //prevents page from reloading on form submit
    event.preventDefault();
    //empties the region associated with the article 
    clear();
    //hides tittle
    $("#titlePage").hide();//I'm not entirely sure this will be enough to change the tittle page

    //This section should generate a new page result, but i need to figure out how to and where to put the results
    $( "#result" ).load( "", function() {
        alert( "Load was performed." );
      });
      //This other section should be for generating a new div that can be used to create a table 
      });
});
