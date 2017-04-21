$(document).ready(function() {
    
    $.getJSON("/onetwo", function(data) {
        console.log(data.html);

        $("#column").html("<ul id='columnList'>" + data.html + "</ul>");
    });

    
});

$("#oneTwo, #oneSideCut").click(function(event) {
    event.preventDefault();
    
    var url = $(this).attr("id");

    $.getJSON("/" + url, function(data) {
        $("#columnList").remove();
        $("#column").html("<ul id='columnList'>" + data.html + "</ul>");
        $(".active").removeClass();
        $("#" + url).parent().addClass("active");
    });
});

$(document).on("click", ".link_thumb, .link_tit", function(event) {
    event.preventDefault();

    window.location = "http://sports.media.daum.net" + $(this).attr("href");
});