var wms_layers = [];


        var lyr_Satellitare_0 = new ol.layer.Tile({
            'title': 'Satellitare',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VINCOLOIDROGEOLOGICO_2 = new ol.format.GeoJSON();
var features_VINCOLOIDROGEOLOGICO_2 = format_VINCOLOIDROGEOLOGICO_2.readFeatures(json_VINCOLOIDROGEOLOGICO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VINCOLOIDROGEOLOGICO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VINCOLOIDROGEOLOGICO_2.addFeatures(features_VINCOLOIDROGEOLOGICO_2);
var lyr_VINCOLOIDROGEOLOGICO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VINCOLOIDROGEOLOGICO_2, 
                style: style_VINCOLOIDROGEOLOGICO_2,
                interactive: true,
                title: '<img src="styles/legend/VINCOLOIDROGEOLOGICO_2.png" /> VINCOLO IDROGEOLOGICO'
            });
var format_VINCOLOPAESAGGISTICO_3 = new ol.format.GeoJSON();
var features_VINCOLOPAESAGGISTICO_3 = format_VINCOLOPAESAGGISTICO_3.readFeatures(json_VINCOLOPAESAGGISTICO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VINCOLOPAESAGGISTICO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VINCOLOPAESAGGISTICO_3.addFeatures(features_VINCOLOPAESAGGISTICO_3);
var lyr_VINCOLOPAESAGGISTICO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VINCOLOPAESAGGISTICO_3, 
                style: style_VINCOLOPAESAGGISTICO_3,
                interactive: true,
                title: '<img src="styles/legend/VINCOLOPAESAGGISTICO_3.png" /> VINCOLO PAESAGGISTICO'
            });
var format_PAI_pericolositidraulica_4 = new ol.format.GeoJSON();
var features_PAI_pericolositidraulica_4 = format_PAI_pericolositidraulica_4.readFeatures(json_PAI_pericolositidraulica_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAI_pericolositidraulica_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAI_pericolositidraulica_4.addFeatures(features_PAI_pericolositidraulica_4);
var lyr_PAI_pericolositidraulica_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAI_pericolositidraulica_4, 
                style: style_PAI_pericolositidraulica_4,
                interactive: true,
    title: 'PAI_pericolosità idraulica<br />\
    <img src="styles/legend/PAI_pericolositidraulica_4_0.png" /> AP<br />\
    <img src="styles/legend/PAI_pericolositidraulica_4_1.png" /> MP<br />\
    <img src="styles/legend/PAI_pericolositidraulica_4_2.png" /> BP<br />'
        });
var format_PAI_pericolositfrane_5 = new ol.format.GeoJSON();
var features_PAI_pericolositfrane_5 = format_PAI_pericolositfrane_5.readFeatures(json_PAI_pericolositfrane_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAI_pericolositfrane_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAI_pericolositfrane_5.addFeatures(features_PAI_pericolositfrane_5);
var lyr_PAI_pericolositfrane_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAI_pericolositfrane_5, 
                style: style_PAI_pericolositfrane_5,
                interactive: true,
    title: 'PAI_pericolosità frane<br />\
    <img src="styles/legend/PAI_pericolositfrane_5_0.png" /> PG2<br />\
    <img src="styles/legend/PAI_pericolositfrane_5_1.png" /> PG3<br />'
        });
var format_PPTR_6 = new ol.format.GeoJSON();
var features_PPTR_6 = format_PPTR_6.readFeatures(json_PPTR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPTR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPTR_6.addFeatures(features_PPTR_6);
var lyr_PPTR_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PPTR_6, 
                style: style_PPTR_6,
                interactive: true,
    title: 'PPTR<br />\
    <img src="styles/legend/PPTR_6_0.png" /> Area rispetto componenti culturali<br />\
    <img src="styles/legend/PPTR_6_1.png" /> boschi e foreste<br />\
    <img src="styles/legend/PPTR_6_2.png" /> Citta\' consolidata<br />\
    <img src="styles/legend/PPTR_6_3.png" /> GROTTE<br />\
    <img src="styles/legend/PPTR_6_4.png" /> Inghiottitoi<br />\
    <img src="styles/legend/PPTR_6_5.png" /> Lame-gravine<br />\
    <img src="styles/legend/PPTR_6_6.png" /> Paesaggi rurali<br />\
    <img src="styles/legend/PPTR_6_7.png" /> Prati e pascoli naturali<br />\
    <img src="styles/legend/PPTR_6_8.png" /> reticolo idrografico<br />\
    <img src="styles/legend/PPTR_6_9.png" /> Rispetto boschi<br />\
    <img src="styles/legend/PPTR_6_10.png" /> sorgenti<br />\
    <img src="styles/legend/PPTR_6_11.png" /> Stratificazione insediativa siti<br />\
    <img src="styles/legend/PPTR_6_12.png" /> Territoti costieri<br />\
    <img src="styles/legend/PPTR_6_13.png" /> Versanti<br />'
        });
var format_ERIR_7 = new ol.format.GeoJSON();
var features_ERIR_7 = format_ERIR_7.readFeatures(json_ERIR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERIR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERIR_7.addFeatures(features_ERIR_7);
var lyr_ERIR_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ERIR_7, 
                style: style_ERIR_7,
                interactive: true,
    title: 'E.R.I.R<br />\
    <img src="styles/legend/ERIR_7_0.png" /> EL<br />\
    <img src="styles/legend/ERIR_7_1.png" /> IL<br />\
    <img src="styles/legend/ERIR_7_2.png" /> LI<br />\
    <img src="styles/legend/ERIR_7_3.png" /> LR<br />'
        });
var format_PDF_8 = new ol.format.GeoJSON();
var features_PDF_8 = format_PDF_8.readFeatures(json_PDF_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDF_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDF_8.addFeatures(features_PDF_8);
var lyr_PDF_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PDF_8, 
                style: style_PDF_8,
                interactive: true,
    title: 'PDF<br />\
    <img src="styles/legend/PDF_8_0.png" /> A1<br />\
    <img src="styles/legend/PDF_8_1.png" /> A2<br />\
    <img src="styles/legend/PDF_8_2.png" /> B1<br />\
    <img src="styles/legend/PDF_8_3.png" /> B2<br />\
    <img src="styles/legend/PDF_8_4.png" /> B3<br />\
    <img src="styles/legend/PDF_8_5.png" /> C<br />\
    <img src="styles/legend/PDF_8_6.png" /> C2<br />\
    <img src="styles/legend/PDF_8_7.png" /> C3<br />\
    <img src="styles/legend/PDF_8_8.png" /> C4<br />\
    <img src="styles/legend/PDF_8_9.png" /> D<br />\
    <img src="styles/legend/PDF_8_10.png" /> D1<br />\
    <img src="styles/legend/PDF_8_11.png" /> E1<br />\
    <img src="styles/legend/PDF_8_12.png" /> E2<br />\
    <img src="styles/legend/PDF_8_13.png" /> E3<br />\
    <img src="styles/legend/PDF_8_14.png" /> FER<br />\
    <img src="styles/legend/PDF_8_15.png" /> Risp. Cimiteriale<br />\
    <img src="styles/legend/PDF_8_16.png" /> Risp.Stradale<br />'
        });
var format_CATASTO_9 = new ol.format.GeoJSON();
var features_CATASTO_9 = format_CATASTO_9.readFeatures(json_CATASTO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CATASTO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CATASTO_9.addFeatures(features_CATASTO_9);
var lyr_CATASTO_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CATASTO_9, 
                style: style_CATASTO_9,
                interactive: true,
                title: '<img src="styles/legend/CATASTO_9.png" /> CATASTO'
            });

lyr_Satellitare_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_VINCOLOIDROGEOLOGICO_2.setVisible(true);lyr_VINCOLOPAESAGGISTICO_3.setVisible(true);lyr_PAI_pericolositidraulica_4.setVisible(true);lyr_PAI_pericolositfrane_5.setVisible(true);lyr_PPTR_6.setVisible(true);lyr_ERIR_7.setVisible(true);lyr_PDF_8.setVisible(true);lyr_CATASTO_9.setVisible(true);
var layersList = [lyr_Satellitare_0,lyr_OSMStandard_1,lyr_VINCOLOIDROGEOLOGICO_2,lyr_VINCOLOPAESAGGISTICO_3,lyr_PAI_pericolositidraulica_4,lyr_PAI_pericolositfrane_5,lyr_PPTR_6,lyr_ERIR_7,lyr_PDF_8,lyr_CATASTO_9];
lyr_VINCOLOIDROGEOLOGICO_2.set('fieldAliases', {'NOME': 'NOME', });
lyr_VINCOLOPAESAGGISTICO_3.set('fieldAliases', {'NOME': 'NOME', });
lyr_PAI_pericolositidraulica_4.set('fieldAliases', {'PAI': 'PAI', });
lyr_PAI_pericolositfrane_5.set('fieldAliases', {'PAI': 'PAI', });
lyr_PPTR_6.set('fieldAliases', {'PPTR': 'PPTR', });
lyr_ERIR_7.set('fieldAliases', {'ERIR': 'ERIR', });
lyr_PDF_8.set('fieldAliases', {'ZONA': 'ZONA', 'TIPO': 'TIPO', 'NTA': 'NTA', });
lyr_CATASTO_9.set('fieldAliases', {'FOGLIO': 'FOGLIO', 'MAPPALE': 'MAPPALE', });
lyr_VINCOLOIDROGEOLOGICO_2.set('fieldImages', {'NOME': 'TextEdit', });
lyr_VINCOLOPAESAGGISTICO_3.set('fieldImages', {'NOME': 'TextEdit', });
lyr_PAI_pericolositidraulica_4.set('fieldImages', {'PAI': 'TextEdit', });
lyr_PAI_pericolositfrane_5.set('fieldImages', {'PAI': 'TextEdit', });
lyr_PPTR_6.set('fieldImages', {'PPTR': 'TextEdit', });
lyr_ERIR_7.set('fieldImages', {'ERIR': 'TextEdit', });
lyr_PDF_8.set('fieldImages', {'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'NTA': 'TextEdit', });
lyr_CATASTO_9.set('fieldImages', {'FOGLIO': '', 'MAPPALE': '', });
lyr_VINCOLOIDROGEOLOGICO_2.set('fieldLabels', {'NOME': 'no label', });
lyr_VINCOLOPAESAGGISTICO_3.set('fieldLabels', {'NOME': 'no label', });
lyr_PAI_pericolositidraulica_4.set('fieldLabels', {'PAI': 'inline label', });
lyr_PAI_pericolositfrane_5.set('fieldLabels', {'PAI': 'inline label', });
lyr_PPTR_6.set('fieldLabels', {'PPTR': 'inline label', });
lyr_ERIR_7.set('fieldLabels', {'ERIR': 'inline label', });
lyr_PDF_8.set('fieldLabels', {'ZONA': 'inline label', 'TIPO': 'no label', 'NTA': 'inline label', });
lyr_CATASTO_9.set('fieldLabels', {'FOGLIO': 'inline label', 'MAPPALE': 'inline label', });
lyr_CATASTO_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});