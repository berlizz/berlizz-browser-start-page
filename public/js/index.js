window.onload = function() {

    document.getElementById("keyword").focus();

    document.getElementById("btn").onclick = function() {
        event.preventDefault();

        var keyword = document.getElementById("keyword").value;
        if(keyword.equal("")) {
            return;
        }

        window.location = "https://google.com/search?q=" + encodeURI(keyword);
    };

};