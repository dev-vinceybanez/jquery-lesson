/* $("#btn-1").on("click", (e) => {
    // alert("Button 1 clicked!");
    console.log(e.currentTarget.id);

    // print contents
    console.log(e.currentTarget.innerText);
    console.log(e.currentTarget.innerHTML);

    // include the tags
    console.log(e.currentTarget.outerHTML);

    console.log(e.currentTarget.classList);
    console.log(e.currentTarget.className);
}); */

/* $("#btn-1").on("click", () => {
    $(".para-1").hide();
});

$("#btn-2").on("click", () => {
    $(".para-1").show();
});

$("#btn-3").on("click", () => {
    $(".para-1").toggle();
});

$("#btn-4").on("dblclick", () => {
    $(".para-1").toggle();
}); */

/* $("#btn-4").on("mouseenter", () => {
    $(".para-1").css("border", "1px solid red");
});

$("#btn-4").on("mouseleave", () => {
    $(".para-1").css("border", "none");
}); */

/* $("#btn-4").on("mousemove", () => {
    $(".para-1").toggle();
}); */

// long press
/* $("#btn-4").on("mousedown", () => {
    $(".para-1").toggle();
}); */

// release mouse / release long press
/* $("#btn-4").on("mouseup", () => {
    $(".para-1").toggle();
}); */

/* $("#btn-4").on("mousemove", (e) => {
    console.log(`Coords: Y: ${e.clientY} X: ${e.clientX}`);
}); */

// commonly used for hiding back to top link when use is at the top of the page
/* $(document).on("mousemove", (e) => {
    console.log(`Coords: Y: ${e.clientY} X: ${e.clientX}`);
    // $("#coords").text(`<em>Coords: X: ${e.clientX} Y: ${e.clientY}</em>`);
    $("#coords").html(`<em>Coords: X: ${e.clientX} Y: ${e.clientY}</em>`);

    if (e.clientY > 100) {
        $(".para-1").hide();
    } else {
        $(".para-1").show();
    }
}); */

$("input").on("focus", function () {
    $(this).css("background", "pink");
});

$("input").on("blur", function () {
    $(this).css("background", "white");
});

// $(this) does not work with lamba expressions

/* $("input").on("keyup", function (e) {
    // console.log("keydown");
    // console.log(e.target.value);
    console.log($(this).val());
}); */

/* $("select#gender").on("change", function (e) {
    alert(`Changed! ${e.target.value}`);
}); */

$("#register-form").on("submit", function (e) {
    e.preventDefault();

    let name = $("input#name").val();
    let email = $("input#email").val();
    let gender = $("select#gender").val();

    console.log(name, email, gender);

    // make ajax request
});