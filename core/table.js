window.onload = premier;

function premier() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var items = JSON.parse(this.responseText);
            var i;
            var output = "<tr><th>Позиция</th><th>Клуб</th><th>Сыграно</th><th>Голы</th><th>Пропущено</th><th>Разница голов</th><th>Побед</th><th>Ничья</th><th>Проиграно</th><th>Очки</th></tr>";
            for (i = 0; i < 20; i++) {
                output += "<tr><td>" + items.standing[i].position + "</td><td class=\"teamName\">" + items.standing[i].teamName + "</td><td>" + items.standing[i].playedGames + "</td><td>" + items.standing[i].goals + "</td><td>" + items.standing[i].goalsAgainst + "</td><td>" + items.standing[i].goalDifference + "</td><td>" + items.standing[i].wins + "</td><td>" + items.standing[i].draws + "</td><td>" + items.standing[i].losses + "</td><td>" + items.standing[i].points + "</td></tr>";
            }
            document.getElementById("tabledata").innerHTML = output;

        }
    };
    xmlhttp.open("GET", "http://cdn.liveziz.net/json/epl-ranking.json", true);
    xmlhttp.send();
}




function laliga() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var items = JSON.parse(this.responseText);
            var i;
            var output = "<tr><th>Позиция</th><th>Клуб</th><th>Сыграно</th><th>Голы</th><th>Пропущено</th><th>Разница голов</th><th>Побед</th><th>Ничья</th><th>Проиграно</th><th>Очки</th></tr>";
            for (i = 0; i < 20; i++) {
                output += "<tr><td>" + items.standing[i].position + "</td><td class=\"teamName\">" + items.standing[i].teamName + "</td><td>" + items.standing[i].playedGames + "</td><td>" + items.standing[i].goals + "</td><td>" + items.standing[i].goalsAgainst + "</td><td>" + items.standing[i].goalDifference + "</td><td>" + items.standing[i].wins + "</td><td>" + items.standing[i].draws + "</td><td>" + items.standing[i].losses + "</td><td>" + items.standing[i].points + "</td></tr>";
            }
            document.getElementById("tabledata").innerHTML = output;

        }
    };
    xmlhttp.open("GET", "http://cdn.liveziz.net/json/laliga-ranking.json", true);
    xmlhttp.send();
}


document.addEventListener('DOMContentLoaded', function() {

    var link = document.getElementById('premierchoice');
    link.addEventListener('click', function() {
        premier();
    });

    var link = document.getElementById('laligachoice');
    link.addEventListener('click', function() {
        laliga();
    });
});