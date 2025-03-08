// $("p.para-1").css("color", "red");
$("p.para-1").css({
    color: "red",
    background: "#ccc"
});

$("p.para-2").addClass("my-class");
$("p.para-2").removeClass("my-class");

$("#btn-1").on("click", function () {
    $("p.para-2").toggleClass("my-class");
});

// $("#my-div").text("Hello World!");
// $("#my-div").html("<h1>Hello World!</h1>");

// alert($("#my-div").text());
// $("ul").append("<li>Append List Item</li>");
// $("ul").prepend("<li>Prepend List Item</li>");

// This will put/append paragraph 1 inside paragraph 2
// $(".para-1").appendTo(".para-2"); // end
// $(".para-1").prependTo(".para-2"); // beginning

// Append element before the element (not inside)
// $("ul").before("<h4>Hello</h4>");
// $("ul").after("<h4>World</h4>");

// Remove all child elements
// $("ul").empty();

// Removes the element (ul) from the DOM
// $("ul").detach(); 

// Add/Set attribute
$("a").attr("target", "_blank");

// Get Attribute
// alert($("a").attr("href"));

// Remove attribute
$("a").removeAttr("target");

// $("p").wrap("<h1>"); // wrap each element (p) with an element
// $("p").wrapAll("<h1>"); // wrap all elements in a single element

$("#new-item").on("keyup", function (e) {
    const code = e.which;

    if (code == 13) {
        e.preventDefault();

        $("ul").append(`<li>${e.target.value}</li>`)
    }
});

const myArr = ["Brad", "Kelly", "Nate", "Jose"];
$.each(myArr, function (i, val) {
    console.log(val);
});

$.each(myArr, function (i, val) {
    $("#users").append(`<li>${++i}: ${val}</li>`);
});

const users = $("#users li").toArray();
console.log(users);
$.each(users, function (i, val) {
    console.log(val.innerHTML);
});
