$(document).ready(function() {
    
    $.getJSON("/tikitaka", function(data) {
        console.log(data.html);
        $("#loadingIcon").css("display", "none");
        $("#column").append("<ul id='columnList'>" + data.html + "</ul>");
    });

    
});

$("#oneTwo, #oneSideCut, #buildUp6, #sports-g, #tikitaka, #footballism, #beautifulGame, #justFootball").click(function(event) {
    event.preventDefault();
    
    $("#columnList").remove();
    $("#loadingIcon").css("display", "block");

    var url = $(this).attr("id");

    $.getJSON("/" + url, function(data) {
        $("#loadingIcon").css("display", "none");
        $("#column").append("<ul id='columnList'>" + data.html + "</ul>");
        $(".active").removeClass();
        $("#" + url).parent().addClass("active");
    });
});

$(document).on("click", ".link_thumb, .link_tit", function(event) {
    event.preventDefault();

    window.location = "http://sports.media.daum.net" + $(this).attr("href");
});

$(document).on("click", ".thmb, .title", function(event) {
    event.preventDefault();

    window.location = "http://sports.news.naver.com" + $(this).attr("href");
});