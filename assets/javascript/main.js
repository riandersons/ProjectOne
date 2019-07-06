
$('document').ready(function () {

    //Click handlers
    //using the on click function event, it allows the user to hit enter on the keyboard and it registers the search 
    $("#add-occupation").on("click", function (event) {
        //prevents page from reloading on form submit
        event.preventDefault();

        //pull information from form and build the query URL
        const OcupationInput = $('#occupation-input').val().trim();

        const zipCode = $("#zip-input").val().trim();
        // const email = $("#email-input").val().trim();
        console.log('Occupation entered:  ' + OcupationInput);
        console.log('Zip code entered:  ' + zipCode);
        // $('#city').html(city);

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
            // const zipCode = "85202";
            const medianPay = '75,000';
            const avgPay = '65,000';
            const demand = '3,000';
            const growthProjection = '4';

            
            // Append data to new table row
            let newRow = $("<tr>").append(
                $("<td>").text(OcupationInput),
                $("<td>").text(zipCode),
                $("<td>").text(medianPay),
                $("<td>").text(avgPay),
                $("<td>").text(demand),
                $("<td>").text(growthProjection),
                );
                
                // Append the new row to the table
                $("#results-table > tbody").append(newRow);
                
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



