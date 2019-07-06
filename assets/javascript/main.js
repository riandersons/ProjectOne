
$('document').ready(function () {

    //Click handlers
    //using the on click function event, it allows the user to hit enter on the keyboard and it registers the search 
    $("#submitOccupation").on("click", function (event) {
        //prevents page from reloading on form submit
        event.preventDefault();

        //pull information from form and build the query URL
        const ocupationInput = $('#occupation').val().trim();
        console.log('Occupation entered:  ' + ocupationInput);

        // $('#city').html(city);

        const blsAPIKey = "registrationkey=44ac302872a44634a6809cf464899d3e"
        const queryURL = "https://api.bls.gov/publicAPI/v2/timeseries/data/OEUN000000011100011000001";

        //  seriesid=OEUN000000011100011000001--1234567890123456789012345    areatype_code=M     &occupation_name=" + ocupationInput
        $.ajax({
            dataType: "JSON",
            url: queryURL,
            method: "POST",
            header: "Content-Type=application/x-www-form-urlencoded",

        }).then(function (response) {
            if (response.status === "REQUEST_SUCCEEDED") {
                console.log(response.status);
                const results = response.Results.series;
                console.log(results);
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
            }
            else { console.log(response); }

            //empties the region associated with the article 
            // $("#occupation").clear();
        });
    });
});



