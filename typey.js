var typey = (function () {
    var my = {};

    // default settings 
    var defaultSettings = {
        selector: '.randomFont',
        fonts: ['Arial, Helvetica', 'Comic Sans MS, cursive', 'Verdana, Geneva'],
        colors: ['red', 'green', 'blue'],
        sizes: ['10', '20']
    };
    
    var settings = defaultSettings;

    // settings functie 
    my.init = function(userSettings) {
        // bepalen of de userSettings zijn gedefinieerd, als een typeof niet gevonden wordt, 
        // gebruiken we de defaultSettings 
        if (typeof userSettings !== 'undefined') {
            settings = $.extend({}, defaultSettings, userSettings);
        }
        else {
            settings = defaultSettings;
        }
    };

    // Random Font generator
    my.generate = function() {

        // font 
        //genereer een willekeurig getal van 0 tot en met myArray.length
        var rand = Math.floor(Math.random() * settings.fonts.length);
        var fontOutput = settings.fonts[rand];


        //kleur
        var randColor = Math.floor(Math.random() * settings.colors.length);
        var colorOutput = settings.colors[randColor];

        //font-size
        var randFontSize = Math.floor(Math.random() * settings.sizes.length);
        var FontSizeOutput = settings.sizes[randFontSize];
        console.log(FontSizeOutput);

        // toevoegen van gekozen eigenschappen aan class, met selector
        $(settings.selector).css("font-family", fontOutput); 
        $(settings.selector).css("color", colorOutput);
        $(settings.selector).css("font-size", FontSizeOutput);

    };

    return my;
}());




