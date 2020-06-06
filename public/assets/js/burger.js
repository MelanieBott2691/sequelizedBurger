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

// (function(){
//     $(window).scroll(function () {
//         var top = $(document).scrollTop();
//         $('.splash').css({
//           'background-position': '0px -'+(top/3).toFixed(2)+'px'
//         });
//         if(top > 50)
//           $('#home > .navbar').removeClass('navbar-transparent');
//         else
//           $('#home > .navbar').addClass('navbar-transparent');
//     });
  
//     $("a[href='#']").click(function(e) {
//       e.preventDefault();
//     });
  
//     var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function(){
//       var html = $(this).parent().html();
//       html = cleanSource(html);
//       $("#source-modal pre").text(html);
//       $("#source-modal").modal();
//     });
  
//     $('.bs-component [data-toggle="popover"]').popover();
//     $('.bs-component [data-toggle="tooltip"]').tooltip();
  
//     $(".bs-component").hover(function(){
//       $(this).append($button);
//       $button.show();
//     }, function(){
//       $button.hide();
//     });
  
//     function cleanSource(html) {
//       html = html.replace(/×/g, "&times;")
//                  .replace(/«/g, "&laquo;")
//                  .replace(/»/g, "&raquo;")
//                  .replace(/←/g, "&larr;")
//                  .replace(/→/g, "&rarr;");
  
//       var lines = html.split(/\n/);
  
//       lines.shift();
//       lines.splice(-1, 1);
  
//       var indentSize = lines[0].length - lines[0].trim().length,
//           re = new RegExp(" {" + indentSize + "}");
  
//       lines = lines.map(function(line){
//         if (line.match(re)) {
//           line = line.substring(indentSize);
//         }
  
//         return line;
//       });
  
//       lines = lines.join("\n");
  
//       return lines;
//     }
  
//   })();