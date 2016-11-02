$(document).ready(function() {

    // Converts strings into integers
    var count = parseInt($("#num").html());
    var breakTime = parseInt($("#breakNum").html());
    //console.log(count);

    $("#reset").hide();

    $("#start").click(function() {
        var counter = setInterval(timer, 1000);
        count *= 60;

        function timer() {

            // Hides variables when countdown starts
            $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide();

            $("#timeType").html("Session Time");
            //count *= 60;
            count -= 1;
            if (count === 0) {
                clearInterval(counter);
                var startBreak = setInterval(breakTimer, 1000);
            }

            if (count % 60 >= 10) {
                $("#num").html(Math.floor(count / 60) + ":" + count % 60);
            } else {
                $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60);
            }

            function breakTimer() {
                $("#timeType").html("Break Time ");
                $("#breakNum").show();
                breakNum *= 60;
                breakTime -= 1;
                if (breakTime === 0) {
                    clearInterval(startBreak);
                    $("#reset").show();
                }

                // Converts time
                if (breakTime % 60 >= 10) {
                    $("breakNum").html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
                } else {
                    $("breakNum").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
                }
            }
        }

    });

    $("#reset").click(function() {
        count = 25;
        breakTime = 25
        $("#num").html(count);
        $("#breakNum").html(count);
        $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show();
        $("#reset, #timeType").hide();
    });

    $("#minus5Clock").click(function() {
        if (count >= 5) {
            count -= 5;
            $("#num").html(count);
        }

    });

    $("#add5Clock").click(function() {
        count += 5;
        $("#num").html(count);
    });
    console.log(count);

    $("#minus5Break").click(function() {
        if (breakTime >= 5) {
            breakTime -= 5;
            $("#breakNum").html(breakTime);
        }
    });

    $("#add5Break").click(function() {
        breakTime += 5;
        $("#breakNum").html(breakTime);
    });

});
