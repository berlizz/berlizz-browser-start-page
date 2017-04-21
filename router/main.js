module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/onetwo", function(req, res) {
        var phantom = require("phantom");
        var phInstance = null;
        
        phantom.create()
            .then(function(instance) {
                phInstance = instance;
                return instance.createPage();
            })
            .then(function(page) {
                page.open("http://sports.media.daum.net/sports/column/columnist#mccid=346")
                    .then(function() {
                        page.evaluate(function() {
                            return document.getElementsByClassName("list_column2")[0].innerHTML;
                        }).then(function(html) {
                            res.send({html : html});

                            phInstance.exit();
                        });
                    });
            })
            .catch(function(error) {
                console.log(error);
                phInstance.exit();
            });
    });

    app.get("/oneSideCut", function(req, res) {
        var phantom = require("phantom");
        var phInstance = null;
        
        phantom.create()
            .then(function(instance) {
                phInstance = instance;
                return instance.createPage();
            })
            .then(function(page) {
                page.open("http://sports.media.daum.net/sports/column/columnist#mccid=47869")
                    .then(function() {
                        page.evaluate(function() {
                            return document.getElementsByClassName("list_column2")[0].innerHTML;
                        }).then(function(html) {
                            res.send({html : html});

                            phInstance.exit();
                        });
                    });
            })
            .catch(function(error) {
                console.log(error);
                phInstance.exit();
            });
    });
    
};