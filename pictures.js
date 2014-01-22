    $(document).ready(function(){
        $("#round2, #round3, #round4").addClass("notShown");
        $('#button1').attr('checked', true);
        var timer = setInterval(function (){everything()}, 3000);
        $('#buttons').click(getInfo);
        $('#rotating-box').hover(function () {
            clearInterval(timer);
        }, function(){
            timer = setInterval(everything, 3000);
            });
    });

    var n = 1;
    var totalStories = 4;
    var chosen = 0;

    function everything() {
        hiding();
        if (n == totalStories) {
            n = 1;
        } else {
            n++;
        }
        showing();
    }

    function hiding() {
        $('#round' + n).fadeOut('slow', function ()  {
            $('#button' +n).removeAttr('checked', false);
            $('#round' + n).removeClass("shown").addClass("notShown");
        });
    }

    function showing() {
        $("#round" + n).fadeIn('slow', function ()  {
            $('#button' +n).prop('checked', true);
            $("#round" + n).removeClass("notShown").addClass("shown");
        });
    }

    function getInfo() {
        var totalPages = document.getElementsByName('choice');
        for(var m=0; m<totalPages.length; m++) {
            if (totalPages[m].checked) {
                chosen = totalPages[m].value;
            }
        }
        hiding();
        n = chosen;
        n++;
        showing();
    }
