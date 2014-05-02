function showX(xPosition) {
    $("#words").text("You clicked on "+xPosition);
}

var CCT = {
    Settings: {
        container: "#cct-canvas",
        source: convertCCT,
        width: convertCCT.length*2,
        height: 40
    },
    init: function() {
        $(CCT.Settings.container).drawRect({
            layer: true,
            fillStyle: "#000000",
            x: (CCT.Settings.width / 2 +1), y: (CCT.Settings.height / 2),
            width: CCT.Settings.width,
            height: CCT.Settings.height
        });
        for(var i=0; i<200; i++) {
            var tempSource = CCT.Settings.source[i];
            var r = tempSource.r;
            var g = tempSource.g;
            var b = tempSource.b;
            var t = tempSource.t;
            var d = tempSource.d;
            (function(r, g, b, t, d) {
                $(CCT.Settings.container).drawRect({
                    layer: true,
                    fillStyle: tempSource.s,
                    x: 2*i+5, y: (CCT.Settings.height /2),
                    width: 2,
                    height: CCT.Settings.height-10,
                    click: function(layer) {
                        str = layer.eventX+", R: "+r+" G: "+g+" B: "+b+", related temperature is "+t+" K "+d+" deg.";
                        showX(str);
                    }
                });
            })(r, g, b, t, d)
        }
    }
}

$(document).ready(function() {
    CCT.init();
});
