var wms_layers = [];

var lyr_GOIB_Ortofoto_Expedita_2023_IB_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ideib.caib.es/geoserveis/services/imatges/GOIB_Ortofoto_Expedita_2023_IB/MapServer/WMSServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'GOIB_Ortofoto_Expedita_2023_IB',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GOIB_Ortofoto_Expedita_2023_IB_0, 0]);
var lyr_ELEMLINTEXTOSLIMITESEJESTXTMASAMASATXTPARCELAPARCELATXTSUBPARCESUBPARCETXTCONSTRUCONSTRUCatastro_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'ELEMLIN/TEXTOS/LIMITES/EJES/TXTMASA/MASA/TXTPARCELA/PARCELA/TXTSUBPARCE/SUBPARCE/TXTCONSTRU/CONSTRU/Catastro',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ELEMLINTEXTOSLIMITESEJESTXTMASAMASATXTPARCELAPARCELATXTSUBPARCESUBPARCETXTCONSTRUCONSTRUCatastro_1, 0]);
var format_MUPBALEARES_2 = new ol.format.GeoJSON();
var features_MUPBALEARES_2 = format_MUPBALEARES_2.readFeatures(json_MUPBALEARES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUPBALEARES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUPBALEARES_2.addFeatures(features_MUPBALEARES_2);
var lyr_MUPBALEARES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUPBALEARES_2, 
                style: style_MUPBALEARES_2,
                popuplayertitle: 'MUP BALEARES',
                interactive: false,
                title: '<img src="styles/legend/MUPBALEARES_2.png" /> MUP BALEARES'
            });
var format_Cobertes_3 = new ol.format.GeoJSON();
var features_Cobertes_3 = format_Cobertes_3.readFeatures(json_Cobertes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cobertes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cobertes_3.addFeatures(features_Cobertes_3);
var lyr_Cobertes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cobertes_3, 
                style: style_Cobertes_3,
                popuplayertitle: 'Cobertes',
                interactive: true,
    title: 'Cobertes<br />\
    <img src="styles/legend/Cobertes_3_0.png" /> Alzinar<br />\
    <img src="styles/legend/Cobertes_3_1.png" /> Bosc mixt de pi blanc i alzina<br />\
    <img src="styles/legend/Cobertes_3_2.png" /> Bosc mixt de pi blanc i ullastre<br />\
    <img src="styles/legend/Cobertes_3_3.png" /> Carritxar<br />\
    <img src="styles/legend/Cobertes_3_4.png" /> Cultiu<br />\
    <img src="styles/legend/Cobertes_3_5.png" /> Edificacions<br />\
    <img src="styles/legend/Cobertes_3_6.png" /> Matollar amb regenerat<br />\
    <img src="styles/legend/Cobertes_3_7.png" /> Pinar de pi blanc<br />\
    <img src="styles/legend/Cobertes_3_8.png" /> Roquissar<br />\
    <img src="styles/legend/Cobertes_3_9.png" /> <br />' });
var lyr_DVM_PNOA_2019_CUBER_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DVM_PNOA_2019_CUBER<br />\
    <img src="styles/legend/DVM_PNOA_2019_CUBER_4_0.png" /> 0<br />\
    <img src="styles/legend/DVM_PNOA_2019_CUBER_4_1.png" /> 2<br />\
    <img src="styles/legend/DVM_PNOA_2019_CUBER_4_2.png" /> 5<br />\
    <img src="styles/legend/DVM_PNOA_2019_CUBER_4_3.png" /> 10<br />\
    <img src="styles/legend/DVM_PNOA_2019_CUBER_4_4.png" /> 20<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DVM_PNOA_2019_CUBER_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [308895.612354, 4833206.086291, 312540.118719, 4836484.206335]
        })
    });
var lyr_DVM_PNOA_2019_GALATZO_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DVM_PNOA_2019_GALATZO<br />\
    <img src="styles/legend/DVM_PNOA_2019_GALATZO_5_0.png" /> 0<br />\
    <img src="styles/legend/DVM_PNOA_2019_GALATZO_5_1.png" /> 2<br />\
    <img src="styles/legend/DVM_PNOA_2019_GALATZO_5_2.png" /> 5<br />\
    <img src="styles/legend/DVM_PNOA_2019_GALATZO_5_3.png" /> 10<br />\
    <img src="styles/legend/DVM_PNOA_2019_GALATZO_5_4.png" /> 20<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DVM_PNOA_2019_GALATZO_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [272227.130910, 4806797.581914, 277732.024706, 4813971.552709]
        })
    });
var lyr_DVM_PNOA_2019_SA_BASSA_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DVM_PNOA_2019_SA_BASSA<br />\
    <img src="styles/legend/DVM_PNOA_2019_SA_BASSA_6_0.png" /> 0<br />\
    <img src="styles/legend/DVM_PNOA_2019_SA_BASSA_6_1.png" /> 2<br />\
    <img src="styles/legend/DVM_PNOA_2019_SA_BASSA_6_2.png" /> 5<br />\
    <img src="styles/legend/DVM_PNOA_2019_SA_BASSA_6_3.png" /> 10<br />\
    <img src="styles/legend/DVM_PNOA_2019_SA_BASSA_6_4.png" /> 20<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DVM_PNOA_2019_SA_BASSA_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [304100.869895, 4835545.404869, 307536.003696, 4837565.520086]
        })
    });
var lyr_DVM_PNOA_2019_SANT_MARTI_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DVM_PNOA_2019_SANT_MARTI<br />\
    <img src="styles/legend/DVM_PNOA_2019_SANT_MARTI_7_0.png" /> 0<br />\
    <img src="styles/legend/DVM_PNOA_2019_SANT_MARTI_7_1.png" /> 2<br />\
    <img src="styles/legend/DVM_PNOA_2019_SANT_MARTI_7_2.png" /> 5<br />\
    <img src="styles/legend/DVM_PNOA_2019_SANT_MARTI_7_3.png" /> 10<br />\
    <img src="styles/legend/DVM_PNOA_2019_SANT_MARTI_7_4.png" /> 20<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DVM_PNOA_2019_SANT_MARTI_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [343431.285358, 4840205.346700, 345659.272211, 4843355.511704]
        })
    });
var lyr_DVM_PNOA_2019_SON_MORAGUES_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DVM_PNOA_2019_SON_MORAGUES<br />\
    <img src="styles/legend/DVM_PNOA_2019_SON_MORAGUES_8_0.png" /> 0<br />\
    <img src="styles/legend/DVM_PNOA_2019_SON_MORAGUES_8_1.png" /> 2<br />\
    <img src="styles/legend/DVM_PNOA_2019_SON_MORAGUES_8_2.png" /> 5<br />\
    <img src="styles/legend/DVM_PNOA_2019_SON_MORAGUES_8_3.png" /> 10<br />\
    <img src="styles/legend/DVM_PNOA_2019_SON_MORAGUES_8_4.png" /> 20<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DVM_PNOA_2019_SON_MORAGUES_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [292054.383481, 4824771.342542, 295895.057198, 4827812.277122]
        })
    });
var lyr_DVM_PNOA_2019_ALCUDIA_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DVM_PNOA_2019_ALCUDIA<br />\
    <img src="styles/legend/DVM_PNOA_2019_ALCUDIA_9_0.png" /> 0<br />\
    <img src="styles/legend/DVM_PNOA_2019_ALCUDIA_9_1.png" /> 2<br />\
    <img src="styles/legend/DVM_PNOA_2019_ALCUDIA_9_2.png" /> 5<br />\
    <img src="styles/legend/DVM_PNOA_2019_ALCUDIA_9_3.png" /> 10<br />\
    <img src="styles/legend/DVM_PNOA_2019_ALCUDIA_9_4.png" /> 20<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DVM_PNOA_2019_ALCUDIA_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [351115.176400, 4843771.464670, 356771.257392, 4850477.056544]
        })
    });
var lyr_DVM_PNOA_2019_BANYALBUFAR_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DVM_PNOA_2019_BANYALBUFAR<br />\
    <img src="styles/legend/DVM_PNOA_2019_BANYALBUFAR_10_0.png" /> 0<br />\
    <img src="styles/legend/DVM_PNOA_2019_BANYALBUFAR_10_1.png" /> 2<br />\
    <img src="styles/legend/DVM_PNOA_2019_BANYALBUFAR_10_2.png" /> 5<br />\
    <img src="styles/legend/DVM_PNOA_2019_BANYALBUFAR_10_3.png" /> 10<br />\
    <img src="styles/legend/DVM_PNOA_2019_BANYALBUFAR_10_4.png" /> 20<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DVM_PNOA_2019_BANYALBUFAR_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [276929.856882, 4815885.488017, 281671.279291, 4819129.727942]
        })
    });
var lyr_DVM_PNOA_2019_BUNYOLA_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DVM_PNOA_2019_BUNYOLA<br />\
    <img src="styles/legend/DVM_PNOA_2019_BUNYOLA_11_0.png" /> 0<br />\
    <img src="styles/legend/DVM_PNOA_2019_BUNYOLA_11_1.png" /> 2<br />\
    <img src="styles/legend/DVM_PNOA_2019_BUNYOLA_11_2.png" /> 5<br />\
    <img src="styles/legend/DVM_PNOA_2019_BUNYOLA_11_3.png" /> 10<br />\
    <img src="styles/legend/DVM_PNOA_2019_BUNYOLA_11_4.png" /> 20<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DVM_PNOA_2019_BUNYOLA_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [301115.649313, 4820281.754079, 306099.543973, 4825919.154931]
        })
    });
var lyr_DVM_PNOA_2019_CAIMARI_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DVM_PNOA_2019_CAIMARI<br />\
    <img src="styles/legend/DVM_PNOA_2019_CAIMARI_12_0.png" /> 0<br />\
    <img src="styles/legend/DVM_PNOA_2019_CAIMARI_12_1.png" /> 2<br />\
    <img src="styles/legend/DVM_PNOA_2019_CAIMARI_12_2.png" /> 5<br />\
    <img src="styles/legend/DVM_PNOA_2019_CAIMARI_12_3.png" /> 10<br />\
    <img src="styles/legend/DVM_PNOA_2019_CAIMARI_12_4.png" /> 20<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DVM_PNOA_2019_CAIMARI_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [317542.970339, 4825947.949788, 319712.650652, 4828240.223391]
        })
    });

lyr_GOIB_Ortofoto_Expedita_2023_IB_0.setVisible(true);lyr_ELEMLINTEXTOSLIMITESEJESTXTMASAMASATXTPARCELAPARCELATXTSUBPARCESUBPARCETXTCONSTRUCONSTRUCatastro_1.setVisible(true);lyr_MUPBALEARES_2.setVisible(true);lyr_Cobertes_3.setVisible(true);lyr_DVM_PNOA_2019_CUBER_4.setVisible(true);lyr_DVM_PNOA_2019_GALATZO_5.setVisible(true);lyr_DVM_PNOA_2019_SA_BASSA_6.setVisible(true);lyr_DVM_PNOA_2019_SANT_MARTI_7.setVisible(true);lyr_DVM_PNOA_2019_SON_MORAGUES_8.setVisible(true);lyr_DVM_PNOA_2019_ALCUDIA_9.setVisible(true);lyr_DVM_PNOA_2019_BANYALBUFAR_10.setVisible(true);lyr_DVM_PNOA_2019_BUNYOLA_11.setVisible(true);lyr_DVM_PNOA_2019_CAIMARI_12.setVisible(true);
var layersList = [lyr_GOIB_Ortofoto_Expedita_2023_IB_0,lyr_ELEMLINTEXTOSLIMITESEJESTXTMASAMASATXTPARCELAPARCELATXTSUBPARCESUBPARCETXTCONSTRUCONSTRUCatastro_1,lyr_MUPBALEARES_2,lyr_Cobertes_3,lyr_DVM_PNOA_2019_CUBER_4,lyr_DVM_PNOA_2019_GALATZO_5,lyr_DVM_PNOA_2019_SA_BASSA_6,lyr_DVM_PNOA_2019_SANT_MARTI_7,lyr_DVM_PNOA_2019_SON_MORAGUES_8,lyr_DVM_PNOA_2019_ALCUDIA_9,lyr_DVM_PNOA_2019_BANYALBUFAR_10,lyr_DVM_PNOA_2019_BUNYOLA_11,lyr_DVM_PNOA_2019_CAIMARI_12];
lyr_MUPBALEARES_2.set('fieldAliases', {'Nom_finca': 'Nom_finca', 'Min_Illa': 'Min_Illa', 'Min_Munici': 'Min_Munici', 'Min_Titula': 'Min_Titula', 'Util_pub': 'Util_pub', 'Cod_publ': 'Cod_publ', 'Sup_ha': 'Sup_ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'Superficie': 'Superficie', });
lyr_Cobertes_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'POLIGON_1': 'POLIGON_1', 'TIPESTR': 'TIPESTR', 'FCCARB': 'FCCARB', 'FORARB': 'FORARB', 'DISTRIB': 'DISTRIB', 'SP1': 'SP1', 'O1': 'O1', 'E1': 'E1', 'SP2': 'SP2', 'O2': 'O2', 'E2': 'E2', 'SP3': 'SP3', 'O3': 'O3', 'E3': 'E3', 'FCCMAT': 'FCCMAT', 'FORMAT': 'FORMAT', 'FORMAT2': 'FORMAT2', 'HMMAT': 'HMMAT', 'FCCHER': 'FCCHER', 'FORHER': 'FORHER', 'ATRIBUTO': 'ATRIBUTO', 'FCCTOT': 'FCCTOT', 'SUMAOTRUSO': 'SUMAOTRUSO', 'MODCOMB': 'MODCOMB', 'SHAPE_AREA': 'SHAPE_AREA', 'Coberta': 'Coberta', });
lyr_MUPBALEARES_2.set('fieldImages', {'Nom_finca': 'TextEdit', 'Min_Illa': 'TextEdit', 'Min_Munici': 'TextEdit', 'Min_Titula': 'TextEdit', 'Util_pub': 'TextEdit', 'Cod_publ': 'Range', 'Sup_ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'id': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_Cobertes_3.set('fieldImages', {'OBJECTID': 'Range', 'POLIGON_1': 'TextEdit', 'TIPESTR': 'TextEdit', 'FCCARB': 'TextEdit', 'FORARB': 'TextEdit', 'DISTRIB': 'TextEdit', 'SP1': 'TextEdit', 'O1': 'TextEdit', 'E1': 'TextEdit', 'SP2': 'TextEdit', 'O2': 'TextEdit', 'E2': 'TextEdit', 'SP3': 'TextEdit', 'O3': 'TextEdit', 'E3': 'TextEdit', 'FCCMAT': 'TextEdit', 'FORMAT': 'TextEdit', 'FORMAT2': 'TextEdit', 'HMMAT': 'TextEdit', 'FCCHER': 'TextEdit', 'FORHER': 'TextEdit', 'ATRIBUTO': 'TextEdit', 'FCCTOT': 'TextEdit', 'SUMAOTRUSO': 'TextEdit', 'MODCOMB': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'Coberta': 'TextEdit', });
lyr_MUPBALEARES_2.set('fieldLabels', {'Nom_finca': 'no label', 'Min_Illa': 'no label', 'Min_Munici': 'no label', 'Min_Titula': 'no label', 'Util_pub': 'no label', 'Cod_publ': 'no label', 'Sup_ha': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', 'Superficie': 'no label', });
lyr_Cobertes_3.set('fieldLabels', {'OBJECTID': 'no label', 'POLIGON_1': 'no label', 'TIPESTR': 'no label', 'FCCARB': 'no label', 'FORARB': 'no label', 'DISTRIB': 'no label', 'SP1': 'no label', 'O1': 'no label', 'E1': 'no label', 'SP2': 'no label', 'O2': 'no label', 'E2': 'no label', 'SP3': 'no label', 'O3': 'no label', 'E3': 'no label', 'FCCMAT': 'no label', 'FORMAT': 'no label', 'FORMAT2': 'no label', 'HMMAT': 'no label', 'FCCHER': 'no label', 'FORHER': 'no label', 'ATRIBUTO': 'no label', 'FCCTOT': 'no label', 'SUMAOTRUSO': 'no label', 'MODCOMB': 'no label', 'SHAPE_AREA': 'no label', 'Coberta': 'no label', });
lyr_Cobertes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});