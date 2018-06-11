$( document ).ready(function() {


    var fontSettings = { 'fonts': [ 'Shadows Into Light, cursive',
                                    'Gloria Hallelujah, cursive',
                                    'Nanum Pen Script, cursive',
                                    'Permanent Marker, cursive',
                                    'Caveat Brush, cursive' ],
                        'colors': ['black'],
                        'sizes': ['24px']
                        };

    typey.init(fontSettings);
    typey.generate();
    currentURL();

//Inladen van de Facebook JavaScript SDK
//Gebruikt voor de Share Button
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.async=true;
    js.src = 'https://connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v3.0';
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});


//Kijken op welke URL we momenteel zitten, en deze doorgeven aan de share button 
function currentURL() {
    var url = window.location.href;
    $('.fb-share-button').attr('data-href', url);

    // is nu console.log, maar je kunt met die url natuurlijk meer. 
    // console.log(url);

}