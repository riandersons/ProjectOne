$('document').ready(function () {

    //Click handlers
    //using the on click function event, it allows the user to hit enter on the keyboard and it registers the search 
    $("#submitOccupation").on("click", function (event) {
        //prevents page from reloading on form submit
        event.preventDefault();

        //pull information from form and build the query URL
        const OcupationInput = $('input').val();
        const blsAPIKey = "44ac302872a44634a6809cf464899d3e"
        // URL for ajex query
        const queryURL = "https:api.bls.gov/publicAPI/v2/timeseries/data/?registrationkey=" +
            blsAPIKey + "&seriesid=series1";

        $.ajax({
            // url: queryURL + "&seriesid=OEUN000000056",
            url: "https://api.bls.gov/publicAPI/v2/timeseries/data/?registrationkey=44ac302872a44634a6809cf464899d3e&catalog=true&startyear=2010&endyear=2014&calculations=true&annualaverage=true",
            method: "POST"
        }).then(function (response) {
            const results = JSON.parse(response);
            console.log(results);



            // empty variables that will have data assigned to them
            
            //Array of objects to retrieve from api
            const searchArray = ['city', 'medianPay', 'avgPay', 'demand', 'growthProjection', 'education'];
            // const city = "";
            // const medianPay;
            // const avgPay;
            // const demand;
            // const growthProjection;


            //function to populate table - Feel free to update it as it seems fit
            function populateTable (searchArray, areaToAddTo){
                $(areaToAddTo).empty();
                for (let i=0; i<searchArray.length; i++){
                    const a = $('<table>');
                    a.text(searchArray[i]);  
                }
            }

            // Append data to HTML
                $('#searches').append();
        });

        //empties the region associated with the article 
       

    });


})