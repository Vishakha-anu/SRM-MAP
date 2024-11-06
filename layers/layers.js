var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SRM_AP_map_1 = new ol.format.GeoJSON();
var features_SRM_AP_map_1 = format_SRM_AP_map_1.readFeatures(json_SRM_AP_map_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRM_AP_map_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRM_AP_map_1.addFeatures(features_SRM_AP_map_1);
var lyr_SRM_AP_map_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SRM_AP_map_1, 
                style: style_SRM_AP_map_1,
                popuplayertitle: "SRM_AP_map",
                interactive: true,
                title: 'SRM_AP_map'
            });
var format_SRM_AP_map_2 = new ol.format.GeoJSON();
var features_SRM_AP_map_2 = format_SRM_AP_map_2.readFeatures(json_SRM_AP_map_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRM_AP_map_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRM_AP_map_2.addFeatures(features_SRM_AP_map_2);
var lyr_SRM_AP_map_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SRM_AP_map_2, 
                style: style_SRM_AP_map_2,
                popuplayertitle: "SRM_AP_map",
                interactive: true,
                title: 'SRM_AP_map'
            });
var format_SRM_AP_map_3 = new ol.format.GeoJSON();
var features_SRM_AP_map_3 = format_SRM_AP_map_3.readFeatures(json_SRM_AP_map_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRM_AP_map_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRM_AP_map_3.addFeatures(features_SRM_AP_map_3);
var lyr_SRM_AP_map_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SRM_AP_map_3, 
                style: style_SRM_AP_map_3,
                popuplayertitle: "SRM_AP_map",
                interactive: true,
                title: 'SRM_AP_map'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SRM_AP_map_1.setVisible(true);lyr_SRM_AP_map_2.setVisible(true);lyr_SRM_AP_map_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SRM_AP_map_1,lyr_SRM_AP_map_2,lyr_SRM_AP_map_3];
lyr_SRM_AP_map_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SRM_AP_map_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'type': 'type', 'population': 'population', });
lyr_SRM_AP_map_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SRM_AP_map_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_SRM_AP_map_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'type': '', 'population': '', });
lyr_SRM_AP_map_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_SRM_AP_map_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SRM_AP_map_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'type': 'no label', 'population': 'no label', });
lyr_SRM_AP_map_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SRM_AP_map_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});