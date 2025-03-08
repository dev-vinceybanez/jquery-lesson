/* $("#result").load("users.json", function (responseText, textStatus, xhr) {
    if(textStatus == "success") {
        alert("It went fine");
    } else if(textStatus == "error") {
        alert("Error: " + xhr.statusText);
    }
}); */

/* $.get("users.json", function (data) {
    $("#result").html(JSON.stringify(data));
}); */

/* $.getJSON("users.json", function (data) {
    $.each(data, function (i, val) {
        $("#users").append(`<li>${val.name}</li>`);
    });
}); */

/* $.ajax({
    method: "GET",
    dataType: "json",
    contentType: "application/json",
    url: "https://jsonplaceholder.typicode.com/posts",
}).done(function (data) {
    $.map(data, function (val, i) {
        $("#posts").append(`
            <div class="post">
                <p><strong>${val.title}</strong></p>
                <p>
                    ${val.body}
                </p>
            </div>    
        `);
    });
}); */

$("#post-form").on("submit", function (e) {
    e.preventDefault();

    let title = $("#title").val();
    let body = $("#body").val();
    let url = $(this).attr("action");

    $.ajax({
        dataType: "json",
        contentType: "json",
        method: "POST",
        url: url,
        data: {
            title,
            body 
        }
    })
    .done(function (data) {
        console.log("Post saved");
        console.log(data);
    });
});