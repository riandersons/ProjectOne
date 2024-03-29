// Waits for page to load
$('document').ready(function () {

    //Click handlers
    // ---------------------------------------------------
    // Drop down pre-populated occupation and city menus
    $('select').formSelect();
    // -----------------------------------------------------

    // Objects to hold data retrieved from ajax query
    let occupation = {
        medianPay: '',
        avgPay: ''
    };
    let costOfLiving = {};


    //  Submit button listener
    $("#add-occupation").on("click", function (event) {
        //prevents page from reloading on form submit
        event.preventDefault();


        //pull information from form and build the query URL
        const occupationInput = $('#occupation-input').val();
        const city = $("#city-input").val().trim();
        let zipCode = 0;
        let jobCode = '';
        let cityCode = '';

        // Assigning zipCode to City
        if (city === "Phoenix") {
            zipCode = 85001;
            cityCode = '0038060'
        }
        else if (city === "Los Angeles") {
            zipCode = 90001;
            cityCode = '0031080'
        }
        else if (city === "San Jose") {
            zipCode = 95123;
            cityCode = '0041940'
        }
        else if (city === "Seattle") {
            zipCode = 98115;
            cityCode = '0042660'
        }
        else if (city === "Tucson") {
            zipCode = 85710;
            cityCode = '0046060'
        }
        else if (city === "Salt Lake") {
            zipCode = 84116;
            cityCode = '0041620'
        }
        else if (city === "Denver") {
            zipCode = 80219;
            cityCode = '0019740'
        }
        else if (city === "Albuquerque") {
            zipCode = 87121;
            cityCode = '0010740'
        }
        else if (city === "Houston") {
            zipCode = 77036;
            cityCode = '0026420'
        }
        else if (city === "Dallas") {
            zipCode = 75217;
            cityCode = '0019100'
        }
        else if (city === "Las Vegas") {
            zipCode = 75217;
            cityCode = '0029820'
        }
        else if (city === "New York") {
            zipCode = 75217;
            cityCode = '0035620'
        }
        else if (city === "Montgomery") {
            zipCode = 75217;
            cityCode = '0033860'
        }
        else if (city === "Washington DC") {
            zipCode = 75217;
            cityCode = '0047900'
        }
        else if (city === "Boston") {
            zipCode = 75217;
            cityCode = '0071650'
        }

        // Assigning jobCode to occupation
        if (occupationInput === 'Carpenter') {
            jobCode = '472031';
        }
        else if (occupationInput === 'Plumber') {
            jobCode = '472152';
        }
        else if (occupationInput === 'Electrician') {
            jobCode = '472111';
        }
        else if (occupationInput === 'Auto Mechanic') {
            jobCode = '493023';
        }
        else if (occupationInput === 'Web Developer') {
            jobCode = '151134';
        }
        else if (occupationInput === 'Database Administrator') {
            jobCode = '151141';
        }
        else if (occupationInput === 'Welder') {
            jobCode = '514121';
        }
        else if (occupationInput === 'Bartender') {
            jobCode = '353011';
        }
        else if (occupationInput === 'Waiter/Waitress') {
            jobCode = '353031';
        }
        else if (occupationInput === 'Nurse') {
            jobCode = '291141';
        }
        else if (occupationInput === 'Doctor') {
            jobCode = '291060';
        }
        else if (occupationInput === 'Accountant') {
            jobCode = '132011';
        }
        else if (occupationInput === 'Real Estate Agent') {
            jobCode = '419022';
        }
        else formSelect();

        /* ----------------------------------------------------------------------------------------------
            BLS AJAX Query SeriesID Syntax= concatenation of the following:
             Perfix=OE (ocupationEmplyment), SeasonalAjustment=U (unajusted), AreaType=M (metro)
             areaCode=cityCode, industryCode=000000 (all), ocupationCode=jobCode, dataType=blsDataType;
                For more info, see: https://www.bls.gov/help/hlpforma.htm#OE 
        ----------------------------------------------------------------------------------------------- */

        //BLS dataType Codes
        const medianAnnual = "13"
        const empPer1k = "16"
        const totalEmployed = "01"
        const locationQuotient = "17"
        const avgAnnual = "04"
        // Array of each dataType Code
        const blsDataTypes = [medianAnnual, /*empPer1k, employment, locationQuotient,*/ avgAnnual]


        // Query URL for Cost of Living Data
        const colURL = "https://notthebureauoflaborstatistics.firebaseio.com/CostOfLiving/City/" +
            city + ".json?apiKey=AIzaSyAwyehZmSt5W1AAHQwjR3xmd4k4FETcbMo";

        //Function to fetch data from ajax calls
        function getData() {
            $.ajax({
                url: colURL,
                method: "GET"
            }).then(function (data) {
                const colData = data
                costOfLiving.rent = data.MedianTwoBedR;

                // Loop through the array to run an ajax call for each dataType
                for (let i = 0; i < blsDataTypes.length; i++) {

                    //Query URL for Bureau of Labor Statistics data
                    let blsQuery = 'https://api.bls.gov/publicAPI/v2/timeseries/data/OEUM' +
                        cityCode + "000000" + jobCode + blsDataTypes[i] + "?registrationkey=44ac302872a44634a6809cf464899d3e";

                    $.ajax({
                        type: "POST",
                        url: blsQuery,
                        dataType: "JSON",
                        success: function (response) {

                            const results = response.Results.series[0].data[0].value;

                            if (blsDataTypes[i] === blsDataTypes[0]) {
                                occupation.medianPay = results;
                                $("#Median-Pay").text("$" + results)
                            }
                            /* 
                            if (blsDataTypes[i] === blsDataTypes[1]) {
                                 occupation.empPer1000 = results;
                             }
                             if (blsDataTypes[i] === blsDataTypes[2]) {
                                 occupation.numberOf = results;
                             }
                             if (blsDataTypes[i] === blsDataTypes[3]) {
                                 occupation.quotient = results
                             }   
                             */
                            if (blsDataTypes[i] === blsDataTypes[1]) {  //change index if other array indexes are uncommented
                                occupation.avgPay = results;
                                $("#Average-Pay").text("$" + results)
                            }
                        }
                    });
                }
            }).done(function () {
                // Append data to new table row
                let newRow = $("<tr>").append(
                    $("<td>").text(occupationInput),
                    $("<td>").text(city),
                    $("<td>").attr("id", "Median-Pay"),
                    $("<td>").attr("id", "Average-Pay"),
                    $("<td>").text(costOfLiving.rent),
                );
                // Prepend the new row to the table
                $("#results-table > tbody").prepend(newRow)
                $("#Median-Pay").text("Caluculating...")
                $("#Average-Pay").text("Caluculating...")
            });
        }
        // Call function to fetch data and add results to page
        getData()
    });

});

