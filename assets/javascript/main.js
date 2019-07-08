// Waits for page to load
$('document').ready(function () {

    //Click handlers
    // ---------------------------------------------------
    // Drop down pre-populated occupation and city menus
    $('select').formSelect();

    // -----------------------------------------------------
    //  Submit button listener
    $("#add-occupation").on("click", function (event) {
        //prevents page from reloading on form submit
        event.preventDefault();


        //pull information from form and build the query URL
        const occupationInput = $('#occupation-input').val().trim();
        const city = $("#city-input").val().trim();
        let zipCode = 0;
        let jobCode = 0;


        // Assigning zipCode to City
        if (city === "Phoenix") {
            zipCode = 85001;
        }
        else if (city === "Los Angeles") {
            zipCode = 90001;
        }
        else if (city === "San Jose") {
            zipCode = 95123;
        }
        else if (city === "Seattle") {
            zipCode = 98115;
        }
        else if (city === "Tucson") {
            zipCode = 85710;
        }
        else if (city === "Salt Lake") {
            zipCode = 84116;
        }
        else if (city === "Denver") {
            zipCode = 80219;
        }
        else if (city === "Albuquerque") {
            zipCode = 87121;
        }
        else if (city === "Houston") {
            zipCode = 77036;
        }
        else if (city === "Dallas") {
            zipCode = 75217;
        }

        // Assigning jobCode to occupation
        if (occupationInput === 'Carpenter') {
            jobCode = '0001';
        }
        else if (occupationInput === 'Plumber') {
            jobCode = '0002';
        }
        else if (occupationInput === 'Electrician') {
            jobCode = '0002';
        }
        else if (occupationInput === 'Auto Mechanic') {
            jobCode = '0002';
        }
        else if (occupationInput === 'Web Developer/Junior') {
            jobCode = '0002';
        }
        else if (occupationInput === 'Web Developer/Senior') {
            jobCode = '0002';
        }
        else if (occupationInput === 'Welder') {
            jobCode = '0002';
        }
        else if (occupationInput === 'Option 8') {
            jobCode = '0002';
        }
        else if (occupationInput === 'Option 9') {
            jobCode = '0002';
        }
        else if (occupationInput === 'Option 10') {
            jobCode = '0002';
        }

        else formSelect();


        // --------------------------------------------------------------
        // Review this object that should have matched cities
        //  to zipcodes but returns undefined
        // --------------------------------------------------------------
        // const zip = {
        //     Phoenix : 85001,
        //     Los_Angeles : 90001
        // };
        // const zipCode = zip.city;
        // console.log(zip.city);

        // ------------------------------------------------------
        // ------------------------------------------------------


        console.log('Occupation entered:  ' + occupationInput);
        console.log('City entered:  ' + city);
        console.log('Zipcode  :' + zipCode);
        console.log('Jobcode  :' + jobCode);
        // ------------------------------------------------------


        // const blsAPIKey = "44ac302872a44634a6809cf464899d3e"
        // URL for ajex query
        // const queryURL = "https:api.bls.gov/publicAPI/v2/timeseries/data/?registrationkey=" +
        // blsAPIKey + "&seriesid=series1";

        // $.ajax({
        // url: queryURL + "&seriesid=OEUN000000056",
        // url: "https://api.bls.gov/publicAPI/v2/timeseries/data/?registrationkey=44ac302872a44634a6809cf464899d3e&catalog=true&startyear=2010&endyear=2014&calculations=true&annualaverage=true",
        // method: "POST"

        // }).then(function (response) {
        // const results = JSON.parse(response);
        // console.log(results);

        // empty variables that will have data assigned to them

        const medianPay = '75,000';
        const avgPay = '65,000';
        const demand = '3,000';
        const growthProjection = '4';


        // Append data to new table row
        let newRow = $("<tr>").append(
            $("<td>").text(occupationInput),
            $("<td>").text(city),
            $("<td>").text(medianPay),
            $("<td>").text(avgPay),
            $("<td>").text(demand),
            $("<td>").text(growthProjection),
        );

        // Prepend the new row to the table
        $("#results-table > tbody").prepend(newRow);

        console.log(city);
        console.log(zipCode);
        console.log(medianPay);
        console.log(avgPay);
        console.log(demand);
        console.log(growthProjection);

        //empties the region associated with the article 
        // clear();
    });
});
// });



