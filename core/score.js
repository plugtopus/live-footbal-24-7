setTimeout(function() {
    window.location.reload(1);
}, 180000);

$(document).ready(function() {
    function getMatches() {
        $.ajax({
            type: 'POST',
            url: 'http://cdn.liveziz.net/livescore/livedata.php',
            data: {
                user_tz: $("#userTZ").val()
            }
        }).done(function(data) {
            $("#liveContent").html(data);
            console.log("Updated");
        });
    }
    getMatches();
    setInterval(function() {
        getMatches();
    }, 1000 * 30);

    $("#userTZ").change(function(e) {
        getMatches();
    })
})