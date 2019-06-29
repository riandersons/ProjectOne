//pull information from form and build the query URL


//Click handlers
//using the on click function event, it allows the user to hit enter on the keyboard and it registers the search 
$("#runSearch-we-need-to-define-this-id-first").on("click", function (event){
//#runSearch is a potential id name 
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