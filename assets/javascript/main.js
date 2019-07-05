
$('document').ready(function () {

    //Click handlers
    //using the on click function event, it allows the user to hit enter on the keyboard and it registers the search 
    $("#submitOccupation").on("click", function (event) {
        //prevents page from reloading on form submit
        event.preventDefault();

        //pull information from form and build the query URL
        const OcupationInput = $('#occupation').val().trim();
        console.log('Occupation entered:  ' + OcupationInput);

        $('#city').html(city);

        const blsAPIKey = "44ac302872a44634a6809cf464899d3e"
        const queryURL = "https:api.bls.gov/publicAPI/v2/timeseries/data/search?api_key=" +
            blsAPIKey + "/seriesid=OEUN000000011100011000001&areatype_code=M&occupation_name=" + OcupationInput;

        $.ajax({
            dataType: "JSON",
            url: queryURL,
            method: "GET",

        }).then(function (response) {
            console.log(response);

            // empty variables that will have data assigned to them
            const city = "Anytown";
            const medianPay = '75,000';
            const avgPay = '65,000';
            const demand = '3,000';
            const growthProjection = '4';


            // Append data to new table row
            let newRow = $("<tr>").append(
                $("<td>").text(city),
                $("<td>").text(medianPay),
                $("<td>").text(avgPay),
                $("<td>").text(demand),
                $("<td>").text(growthProjection),
            );

            // Append the new row to the table
            $("#results-table > tbody").append(newRow);

            console.log(city);
            console.log(medianPay);
            console.log(avgPay);
            console.log(demand);
            console.log(growthProjection);

            //empties the region associated with the article 
            $("#occupation").val().clear();
        });
    });
});



