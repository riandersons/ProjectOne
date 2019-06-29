//pull information from form and build the query URL


//Click handlers
//using the on click function event, it allows the user to hit enter on the keyboard and it registers the search 
$("#occupation").on("click", function (event){

// Grab value from User input field
const OcupationInput = $('input').val();
const blsAPIKey = "44ac302872a44634a6809cf464899d3e"
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


    //Building the query URL for the ajax request to the bls API
    
        //const queryURL = buildQueryURL();

    //Makes Ajax request to the API 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(updatePage);
});
