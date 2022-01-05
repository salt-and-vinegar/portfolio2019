$(function () {

    var liW = $(".hisItem").width();

    $("#hisRight").click(function () {

        $(".container").animate({
            "marginLeft": -liW
        }, 1000)

    });
    $("#hisLeft").click(function () {
        $(".container").animate({
            "marginLeft": 0
        }, 1000)
    });

    $(window).resize(function () {
        liW = $(".hisItem").width();

        $("#hisRight").click(function () {

            $(".container").animate({
                "marginLeft": -liW
            }, 1000)

        });
        $("#hisLeft").click(function () {
            $(".container").animate({
                "marginLeft": 0
            }, 1000)
        });


    })




})
