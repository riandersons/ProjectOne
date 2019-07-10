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
        console.log("button works");


        //pull information from form and build the query URL
        const ocupationInput = $('#occupation').val().trim();
        console.log('Occupation entered:  ' + ocupationInput);

        //This is the api and api key that can be used to obtain rental information for a specific zip code
        //Z -> refers to the usage of zipcodes, we can also use S for state, CO for county C for city (The actual city, county and state codes can be found on this page "https://blog.quandl.com/api-for-housing-data")
        // (under_score)MLPAH specifies what we are looking for. In this case MLPAH is for median Listing Price - All Homes, I have a list of other codes that we could use
        const quandlApiKey = "eE11HXyWn4Ge7s5cAy5u"
        const queryURL = "https://www.quandl.com/api/v3/datasets/ZILLOW/Z85226_MLPAH.json"
           

        // $('#city').html(city);

        // const blsAPIKey = "registrationkey=44ac302872a44634a6809cf464899d3e"
        // const queryURL = "https://api.bls.gov/publicAPI/v2/timeseries/data/OEUN000000011100011000001";

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
})































// // Waits for page to load
// $('document').ready(function () {

//     //Click handlers
//     // ---------------------------------------------------
//     // Drop down pre-populated occupation and city menus
//     $('select').formSelect();

//     // -----------------------------------------------------
//     //  Submit button listener
//     $("#add-occupation").on("click", function (event) {
//         //prevents page from reloading on form submit
//         event.preventDefault();
//         console.log("button works");


//         //pull information from form and build the query URL
//         const ocupationInput = $('#occupation').val().trim();
//         console.log('Occupation entered:  ' + ocupationInput);

//         // //This is the api and api key that can be used to obtain rental information for a specific zip code
//         // //Z -> refers to the usage of zipcodes, we can also use S for state, CO for county C for city (The actual city, county and state codes can be found on this page "https://blog.quandl.com/api-for-housing-data")
//         // // (under_score)MLPAH specifies what we are looking for. In this case MLPAH is for median Listing Price - All Homes, I have a list of other codes that we could use
//         // const quandlApiKey = "eE11HXyWn4Ge7s5cAy5u"
//         // const queryURL = "https://www.quandl.com/api/v3/datasets/ZILLOW/Z85226_MLPAH.json"


//         // // $('#city').html(city);

//         // // const blsAPIKey = "registrationkey=44ac302872a44634a6809cf464899d3e"
//         // // const queryURL = "https://api.bls.gov/publicAPI/v2/timeseries/data/OEUN000000011100011000001";

//         // //  seriesid=OEUN000000011100011000001--1234567890123456789012345    areatype_code=M     &occupation_name=" + ocupationInput

//         const queryURL = "https://notthebureauoflaborstatistics.firebaseio.com/CostOfLiving/City.json?apiKey=AIzaSyAwyehZmSt5W1AAHQwjR3xmd4k4FETcbMo"
//         $.ajax({
//             url: queryUTL,
//             method: "GET"
//         }).then(function (stuff) {
//             do (stuff);

//         }).then(function (response) {
//             if (response.status === "REQUEST_SUCCEEDED") {
//                 console.log(response.status);
//                 const results = response.Results.series;
//                 console.log(results);
//                 // empty variables that will have data assigned to them
//                 const city = "Anytown";
//                 const medianPay = '75,000';
//                 const avgPay = '65,000';
//                 const demand = '3,000';
//                 const growthProjection = '4';


//                 // Append data to new table row
//                 let newRow = $("<tr>").append(
//                     $("<td>").text(city),
//                     $("<td>").text(medianPay),
//                     $("<td>").text(avgPay),
//                     $("<td>").text(demand),
//                     $("<td>").text(growthProjection),
//                 );

//                 // Append the new row to the table
//                 $("#results-table > tbody").append(newRow);

//                 console.log(city);
//                 console.log(medianPay);
//                 console.log(avgPay);
//                 console.log(demand);
//                 console.log(growthProjection);
//             }
//             else { console.log(response); }
//             const occupationInput = $('#occupation-input').val().trim();
//             const city = $("#city-input").val().trim();
//             let zipCode = 0;
//             let jobCode = 0;


//             // Assigning zipCode to City
//             if (city === "Phoenix") {
//                 zipCode = 85001;
//             }
//             else if (city === "Los Angeles") {
//                 zipCode = 90001;
//             }
//             else if (city === "San Jose") {
//                 zipCode = 95123;
//             }
//             else if (city === "Seattle") {
//                 zipCode = 98115;
//             }
//             else if (city === "Tucson") {
//                 zipCode = 85710;
//             }
//             else if (city === "Salt Lake") {
//                 zipCode = 84116;
//             }
//             else if (city === "Denver") {
//                 zipCode = 80219;
//             }
//             else if (city === "Albuquerque") {
//                 zipCode = 87121;
//             }
//             else if (city === "Houston") {
//                 zipCode = 77036;
//             }
//             else if (city === "Dallas") {
//                 zipCode = 75217;
//             }

//             // Assigning jobCode to occupation
//             if (occupationInput === 'Carpenter') {
//                 jobCode = '0001';
//             }
//             else if (occupationInput === 'Plumber') {
//                 jobCode = '0002';
//             }
//             else if (occupationInput === 'Electrician') {
//                 jobCode = '0002';
//             }
//             else if (occupationInput === 'Auto Mechanic') {
//                 jobCode = '0002';
//             }
//             else if (occupationInput === 'Web Developer/Junior') {
//                 jobCode = '0002';
//             }
//             else if (occupationInput === 'Web Developer/Senior') {
//                 jobCode = '0002';
//             }
//             else if (occupationInput === 'Welder') {
//                 jobCode = '0002';
//             }
//             else if (occupationInput === 'Option 8') {
//                 jobCode = '0002';
//             }
//             else if (occupationInput === 'Option 9') {
//                 jobCode = '0002';
//             }
//             else if (occupationInput === 'Option 10') {
//                 jobCode = '0002';
//             }

//             else formSelect();


//             // --------------------------------------------------------------
//             // Review this object that should have matched cities
//             //  to zipcodes but returns undefined
//             // --------------------------------------------------------------
//             // const zip = {
//             //     Phoenix : 85001,
//             //     Los_Angeles : 90001
//             // };
//             // const zipCode = zip.city;
//             // console.log(zip.city);

//             // ------------------------------------------------------
//             // ------------------------------------------------------


//             console.log('Occupation entered:  ' + occupationInput);
//             console.log('City entered:  ' + city);
//             console.log('Zipcode  :' + zipCode);
//             console.log('Jobcode  :' + jobCode);
//             // ------------------------------------------------------


//             // const blsAPIKey = "44ac302872a44634a6809cf464899d3e"
//             // URL for ajex query
//             // const queryURL = "https:api.bls.gov/publicAPI/v2/timeseries/data/?registrationkey=" +
//             // blsAPIKey + "&seriesid=series1";

//             // $.ajax({
//             // url: queryURL + "&seriesid=OEUN000000056",
//             // url: "https://api.bls.gov/publicAPI/v2/timeseries/data/?registrationkey=44ac302872a44634a6809cf464899d3e&catalog=true&startyear=2010&endyear=2014&calculations=true&annualaverage=true",
//             // method: "POST"

//             // }).then(function (response) {
//             // const results = JSON.parse(response);
//             // console.log(results);

//             // empty variables that will have data assigned to them

//             const medianPay = '75,000';
//             const avgPay = '65,000';
//             const demand = '3,000';
//             const growthProjection = '4';


//             // Append data to new table row
//             let newRow = $("<tr>").append(
//                 $("<td>").text(occupationInput),
//                 $("<td>").text(city),
//                 $("<td>").text(medianPay),
//                 $("<td>").text(avgPay),
//                 $("<td>").text(demand),
//                 $("<td>").text(growthProjection),
//             );

//             // Prepend the new row to the table
//             $("#results-table > tbody").prepend(newRow);

//             console.log(city);
//             console.log(zipCode);
//             console.log(medianPay);
//             console.log(avgPay);
//             console.log(demand);
//             console.log(growthProjection);

//             //empties the region associated with the article 
//             // clear();
//         });
//     });
// })