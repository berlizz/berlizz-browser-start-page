window.onload = function() {

    document.getElementById("keyword").focus();

    document.getElementById("btn").onclick = function() {
        event.preventDefault();

        var keyword = document.getElementById("keyword").value;
        if(keyword === "") {
            return;
        }

        var pattern = new RegExp(/^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/);
        if(pattern.test(keyword)) {
            window.location = "http://" + keyword;
        } else {
            window.location = "https://google.com/search?q=" + encodeURI(keyword);
        }
    };

};