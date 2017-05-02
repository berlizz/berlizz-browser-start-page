$(document).ready(function() {
    
    $.getJSON("/tikitaka", function(data) {
        $("#loadingIcon").css("display", "none");
        $("#column").append("<ul id='columnList'>" + data.html + "</ul>");

        naverImageLazyLoad();
    });

    
});

$("#oneTwo, #oneSideCut, #buildUp6, #sports-g, #tikitaka, #footballism, #beautifulGame, #justFootball, #zangsisi").click(function(event) {
    event.preventDefault();
    
    $("#columnList").remove();
    $("#loadingIcon").css("display", "block");

    var url = $(this).attr("id");

    $.getJSON("/" + url, function(data) {
        $("#loadingIcon").css("display", "none");
        $("#column").append("<ul id='columnList'>" + data.html + "</ul>");
        $(".active").removeClass();
        $("#" + url).parent().addClass("active");

        naverImageLazyLoad();
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

function naverImageLazyLoad() {
    var that = $(".imageLazyLoad");
    if(that.length !== 0) {
        that.each(function(index, element) {
            $(element).attr("src", $(element).attr("lazy-src"));
        });
    }
}