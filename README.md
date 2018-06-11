# typey.js
Met deze library is het mogelijk om een willekeurig lettertype (font) te selecteren voor een element.

## Setup

### Benodigdheden
Om deze library te kunnen gebruiken heb je het volgende nodig:

 1. Een selectie fonts waar de library uit mag kiezen. Deze fonts dien je te linken in de <head> van je HTML-bestand. Voorbeeld afkomstig van [Google Fonts](http://fonts.google.com)
```html	        
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
```

Een voorbeeld van de code en de mappenstructuur die vereist is is te vinden in de map 'demo'

3. JQuery. Deze library is onder andere te laden via [Google Hosted Libraries](https://developers.google.com/speed/libraries/). Verdere instructies betreffende JQuery zijn hier ook te vinden

### Installatie

Maak een map aan in dezelfde map als waar **index.html** staat en noem deze map **JS**
In deze map dient het volgende bestand te staan: **typey.min.js**

Plaats daarna de scripts onderaan het HTML bestand, tussen de body`<body>` tags.
```html
<!-- Typey.js -->
<script  src="js/typey.min.js"></script>
```
## Gebruik


Er zijn verschillende zaken te configuren aan de library. Zo is het mogelijk om te bepalen welke lettertypen uit gekozen moet  worden (voor het installeren van lettertypen zie **Benodigdheden**), welke kleuren uit gekozen moet worden, en welke font-sizes uit gekozen kan worden.

Instellingen kunnen onderaan het **index.html** bestand worden gedaan. Dit ziet er als volgt uit:

```javascript
var  fontSettings  = { 'fonts': [ 	'Shadows Into Light, cursive',
									'Gloria Hallelujah, cursive',
									'Nanum Pen Script, cursive',
									'Permanent Marker, cursive',
									'Caveat Brush, cursive' ],
						'colors': ['black'],
						'sizes': ['24px']
};

typey.init(fontSettings);
typey.generate();
}
```
#### Een custom selector
De default selector is .randomFont, dit betekend dat het element dat deze class krijgt, dus ook de uitkomst van de random font generator. Een custom selector kan worden ingesteld door de volgende code toe te voegen aan de settings variabele:

```javascript
var fontSettings = { 'selector': '.Doggo'};
```

#### Custom lettertypen
Lettertypen kunnen worden toegevoegd door de volgende array toe te voegen aan userSettings.
```javascript
'fonts': [],
```
Een voorbeeld:
```javascript
'fonts': [ 	'Shadows Into Light, cursive',
			'Gloria Hallelujah, cursive',
			'Nanum Pen Script, cursive',
			'Permanent Marker, cursive',
			'Caveat Brush, cursive' ]
```
Ieder font kan gebruikt worden, zolang het in de HTML wordt geladen.

#### Custom kleuren
Het is ook mogelijk kleuren te laten kiezen. Dit werkt wedorm door een array toe te voegen, bijvoorbeeld:
```javascript
'colors': ['black', 'red', '#32b6b5']
```

#### Custom font-sizes
```javascript
'sizes': ['10px', '20px', '30px']
```

### Activatie

Om de library te activeren moet je een class toevoegen aan het gewenste element tekstelement (h1, h2, p) deze class moet dezelfde naam hebben als de selector:
```html
<h2  class="randomFont">Mijn vakantie op Ibiza</h2>
```
Het uitvoeren van de functie gebeurt als volgt:
```javascript
<script>
typey.init(selector);'
randomFont.generate();
</script>
```




