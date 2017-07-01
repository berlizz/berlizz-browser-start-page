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

// 다음 기사 클릭
$(document).on("click", ".link_thumb, .link_tit", function(event) {
    event.preventDefault();

    window.open("http://sports.media.daum.net" + $(this).attr("href"), "_blank");
});

// 네이버 기사 클릭
$(document).on("click", ".thmb, .title", function(event) {
    event.preventDefault();

    window.open("http://sports.news.naver.com" + $(this).attr("href"), "_blank");
});

// 스포츠니어스 기사 클릭
$(document).on("click", ".entry-title", function(event) {
    event.preventDefault();

    window.open($(this).children().attr("href"), "_blank");
});

// 장시시 리스트 클릭
$(document).on("click", ".list", function(event) {
    event.preventDefault();

    var url = $(this).attr("href");
    if(url !== undefined) {
        window.open(url, "_blank");

        /*url = url.substring(23);
        
        $("#columnList").remove();
        $("#loadingIcon").css("display", "block");

        $.getJSON("/zangsisiList/" + url, function(data) {
            $("#loadingIcon").css("display", "none");
            $("#column").append("<ul id='columnList'>" + data.html + "</ul>");
            $(".active").removeClass();
            $("#" + url).parent().addClass("active");
        });*/
    }
   
});

function naverImageLazyLoad() {
    var that = $(".imageLazyLoad");
    if(that.length !== 0) {
        that.each(function(index, element) {
            $(element).attr("src", $(element).attr("lazy-src"));
        });
    }
}