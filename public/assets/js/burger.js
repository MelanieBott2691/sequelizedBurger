// different js file within the assets directory all within the public that contains the ajax that calls onclick and submit events triggered to run the actions

// function to make sure everything loads first
$(function() {

$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#newburger").val().trim(),
        devoured: 0
    };
    // console.log(newBurger)
    
    $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("Added new burger");
        location.reload();
    });
    });

    $(".eatburger").on("click", function(event) {
        event.preventDefault();
console.log("eat-burger")    

    var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

           // put request 
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState 
    }).then(function() {
        console.log("Burger devoured");
        location.reload();
    });
});

    // send the POST request
    
// trash burger onclick even by creating a delete action
$(".trashburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");

    // send the delete request
    $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
    }).then(location.reload());
    
});
});
// user input add new burger ======================
// $(function() {

//     $(".eatNewBurger").on("submit", function(event) {
//         event.preventDefault();
    
//         var newBurger = {
//             burger_name: $("#newburger").val().trim(),
//             devoured: 0
//         };
//         // console.log(newBurger)
        
//         $.ajax("/api/burgers/", {
//             type: "POST",
//             data: newBurger
//         }).then(function() {
//             console.log("Added new burger");
//             location.reload();
//         });
//         });

// // trash new user burger onclick even by creating a delete action
// $(".btnCreate").on("click", function(event) {
//     event.preventDefault();

//     var id = $(this).data("id");

//     // send the delete request
//     $.ajax({
//         type: "DELETE",
//         url: "/api/burgers/" + id
//     }).then(location.reload());
// });
// });
