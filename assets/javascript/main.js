// Waits for page to load
$('document').ready(function () {

    //Click handlers
    // ---------------------------------------------------
    // Drop down pre-populated occupation and city menus
    $('select').formSelect();
    // -----------------------------------------------------

    const medianPay = '';
    const empPer1000 = '';
    const numberOf = '';
    const quotient = '';


    const avgPay = '';




    //  Submit button listener
    $("#add-occupation").on("click", function (event) {
        //prevents page from reloading on form submit
        event.preventDefault();

        //pull information from form and build the query URL
        const occupationInput = $('#occupation-input').val().trim();
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
        console.log('cityCode  :' + cityCode);
        console.log('Jobcode  :' + jobCode);

        /* ----------------------------------------------------------------------------------------------
            BLS AJAX Query SeriesID Syntax= concatenation of the following:
             Perfix=OE (ocupationEmplyment), SeasonalAjustment=U (unajusted), AreaType=M (metro)
             areaCode=cityCode, industryCode=000000 (all), ocupationCode=jobCode, dataType=blsDataType;
                see https://www.bls.gov/help/hlpforma.htm#OE 

        ----------------------------------------------------------------------------------------------- */


        //Varibles for BLS Query
        const medianAnnual = "13"
        const empPer1k = "16"
        const employment = "01"
        const locationQuotient = "17"
        const avgAnnual = "04"
        const blsDataTypes = [medianAnnual, empPer1k, employment, locationQuotient, avgAnnual]

        for (let i = 0; i < blsDataTypes.length; i++) {
            let blsQuery = 'https://api.bls.gov/publicAPI/v1/timeseries/data/OEUM' +
                cityCode + "000000" + jobCode + blsDataTypes[i];
            $.ajax({
                type: "POST",
                url: blsQuery,
                dataType: "JSON",
                // success: function (response) {
                //     console.log(blsDataTypes[i], response.status, response.message)
                //     console.log(response.Results.series)
                // }
            }).then(function (response) {
                console.log(blsQuery)
                const results = response.Results.series[0].data[0].value;
                if (blsDataTypes[i] === blsDataTypes[0]) {
                    medianPay = results;
                }
                if (blsDataTypes[i] === blsDataTypes[1]) {
                    empPer1000 = results;
                }
                if (blsDataTypes[i] === blsDataTypes[2]) {
                    numberOf = results;
                }
                if (blsDataTypes[i] === blsDataTypes[3]) {
                    quotient = results
                }
                if (blsDataTypes[i] === blsDataTypes[4]) {
                    avgPay = results;
                }


        let newRow = $("<tr>").append(
            $("<td>").text(occupationInput),
            $("<td>").text(city),
            $("<td>").text(medianPay),
            $("<td>").text(avgPay),

            $("<td>").text(''),
            $("<td>").text(''),

        );

        // Prepend the new row to the table
        $("#results-table > tbody").prepend(newRow);



    });
});

