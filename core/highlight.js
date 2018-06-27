var req = new XMLHttpRequest();
req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var items = JSON.parse(this.responseText);
        var i;
        var output = "";
        for (i = 0; i < Object.keys(items).length; i++) {
            output += items[i].video;
        }

        var outputtranslated = output.replace(/Nga/gm, 'Russia').replace(/\u1EA2 R\u1EADp X\u00EA \u00DAt/gm, 'Saudi Arabia').replace(/Ai C\u1EADp/gm, 'Egypt').replace(/Maroc/gm, 'Morocco').replace(/B\u1ED3 \u0110\u00E0o Nha/gm, 'Portugal').replace(/T\u00E2y Ban Nha/gm, 'Spain').replace(/Ph\u00E1p/gm, 'France').replace(/\u00DAc/gm, 'Australia').replace(/\u0110an M\u1EA1ch/gm, 'Denmark').replace(/\u0110\u1EE9c/gm, 'Germany').replace(/Th\u1EE5y S\u0129/gm, 'Switzerland').replace(/Th\u1EE5y \u0110i\u1EC3n/gm, 'Sweden').replace(/H\u00E0n Qu\u1ED1c/gm, 'South Korea').replace(/B\u1EC9/gm, 'Belgium').replace(/Anh/gm, 'England').replace(/Ba Lan/gm, 'Poland').replace(/Nh\u1EADt B\u1EA3n/gm, 'Japan');

        document.getElementById("highlight").innerHTML = outputtranslated;

    }
};
req.open("GET", "http://bongdatv.net/extension/last_20_video?_format=json", true);
req.send();