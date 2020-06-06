//  burger.js completed

$(document).ready(function(){
    var $newItemInput = $("input.new-item");
    var $burgerContainer = $(".burger-container");
    $(document).on("click", "button.delete", deleteBurger);
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".burger-item", editBurger);
    $(document).on("keyup", ".burger-item", deleteBurger);
    $(document).on("blue", ".burger-item", cancelEdit);
    $(document).on("submit", "#burger-form", insertBurger);

    var burgers = [];
    getBurgers();

    function initializeRows() {
        $burgerContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < burgers.length; i++) {
            rowsToAdd.push(createNewRow(burgers[i]));
        }
        $burgerContainer.prepend(rowsToAdd);
    }
    function getBurgers(){
        $.get("/api/brugers", function(data){
            burgers = data;
            initializeRows();
        });
    }
    function deleteBurger(event) {
        event.stopPropagation();
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/burgers/" + id
        }).then(getBurgers);
    }
    function editBurger(){
        var currentBurger = $(this).data("burgers");
        $(this).children().hide();
        $(this).children("input.edit").val(currentBurger.text);
        $(this).children("input.edit").show();
        $(this).children("input.edit").focus();
    }
    function toggleComplete(event){
        event.stopPropagation();
        var burger = $(this).parent().data("burger");
        burger.complete = !burger.complete;
        updateBurger(burgers);
    }
    function finishEdit(event) {
        var updatedBurger = $(this).data("burger");
        if (event.which === 13) {
            updatedBurger.text = $(this).children("input").val().trim();
            updateBurger(updatedBurger);
        }
    }
    function updateBurger(burger) {
        $.ajax({
            method: "PUT",
            url: "/api/burgers",
            data: burger
        }).then(getBurgers);
    }
    function cancelEdit(){
        var currentBurger = $(this).data("burger");
        if(currentBurger) {
            $(this).children().hide();
            $(this).children("input.edit").val(currentBurger.text);
            $(this).children("span").show();
            $(this).children("button").show();
        }
    }
    function createNewRow(burger) {
        var $newInputRow = $(
            [
                "<li class='list-group-item burger-item'>",
                "<span>",
                todo.text,
                "</span",
                "<input type='text' class='edit' style='display: none;'>",
                "<<button class='delete btn btn-danger'>x</button>>",
                "<button class='complete btn btn-primary'>x</button>",
                "</li>"
            ].join("")
        );
        $newInputRow.find("button.delete").data("id", burger.id);
        $newInputRow.find("input.edit").css("display", "none");
        $newInputRow.data("burger", burger);
        if (burger.complete) {
            $newInputRow.find("span").css("text-decoration", "line-through");
        }
        return $newInputRow;
    }
    function insertBurger(event) {
        event.preventDefault();
        var burger = {
            text: $newItemInput.val().trim(),
            complete: false
        };
        $.post("/api/burgers", burger, getBurgers);
        $newItemInput.val("");
    }
});