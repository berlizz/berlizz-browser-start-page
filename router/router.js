module.exports = function(app) {

    var phantom = require("phantom");
    var phInstance = null;

    var request = require("request");
    var cheerio = require("cheerio");


    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/onetwo", function(req, res) {
        
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

    app.get("/buildUp6", function(req, res) {
        
        phantom.create()
            .then(function(instance) {
                phInstance = instance;
                return instance.createPage();
            })
            .then(function(page) {
                page.open("http://sports.media.daum.net/sports/column/columnist#mccid=276232")
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

    app.get("/sports-g", function(req, res) {
        request("http://www.sports-g.com/category/%ed%95%b4%ec%99%b8%ec%b6%95%ea%b5%ac/%ec%b9%bc%eb%9f%bc", function(error, response, body) {
            if(error) {
                console.log(error);
                res.send({"error": error});
            }

            var $ = cheerio.load(body);
            var html = $(".td-ss-main-content").html();

            res.send({"html": html});
        });
    });

    app.get("/tikitaka", function(req, res) {
        request("http://sports.news.naver.com/column/columnList.nhn?expertId=615", function(error, response, body) {
            if(error) {
                console.log(error);
                res.send({"error": error});
            }

            var $ = cheerio.load(body);
            var html = $("#news_list").html();

            res.send({"html": html});
        });
    });

    app.get("/footballism", function(req, res) {
        request("http://sports.news.naver.com/column/columnList.nhn?expertId=341", function(error, response, body) {
            if(error) {
                console.log(error);
                res.send({"error": error});
            }

            var $ = cheerio.load(body);
            var html = $("#news_list").html();

            res.send({"html": html});
        });
    });

    app.get("/beautifulGame", function(req, res) {
        request("http://sports.news.naver.com/column/columnList.nhn?expertId=437", function(error, response, body) {
            if(error) {
                console.log(error);
                res.send({"error": error});
            }

            var $ = cheerio.load(body);
            var html = $("#news_list").html();

            res.send({"html": html});
        });
    });

    app.get("/justFootball", function(req, res) {
        request("http://sports.news.naver.com/column/columnList.nhn?expertId=942", function(error, response, body) {
            if(error) {
                console.log(error);
                res.send({"error": error});
            }

            var $ = cheerio.load(body);
            var html = $("#news_list").html();

            res.send({"html": html});
        });
    });

    app.get("/zangsisi", function(req, res) {
        request("http://zangsisi.net/", function(error, response, body) {
            if(error) {
                console.log(error);
                res.send({"error": error});
            }

            var $ = cheerio.load(body);
            var html = $("#recent-manga").html();

            res.send({"html": html});
        });
    });

    // 이미지가 접근 제한 당함(핫링크)
    app.get("/zangsisiList/:url", function(req, res) {
        var url = req.params.url;

        request("http://zangsisi.net/?p=" + url, function(error, response, body) {
            if(error) {
                console.log(error);
                res.send({"error": error});
            }

            var $ = cheerio.load(body);

            var html = "";
            var imgs = $("#post img").each(function(index, item) {
                console.log(item.attribs.src);
                var img = "<img src='" + item.attribs.src + "'>";
                html += img;
            });

            res.send({"html": html});
        });
    });

};