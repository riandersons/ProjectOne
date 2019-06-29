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
})