var wms_layers = [];

var format_India_State_Boundary_0 = new ol.format.GeoJSON();
var features_India_State_Boundary_0 = format_India_State_Boundary_0.readFeatures(json_India_State_Boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_State_Boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_State_Boundary_0.addFeatures(features_India_State_Boundary_0);
var lyr_India_State_Boundary_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_India_State_Boundary_0, 
                style: style_India_State_Boundary_0,
                interactive: true,
    title: 'India_State_Boundary<br />\
    <img src="styles/legend/India_State_Boundary_0_0.png" /> 43 - 168<br />\
    <img src="styles/legend/India_State_Boundary_0_1.png" /> 168 - 1249<br />\
    <img src="styles/legend/India_State_Boundary_0_2.png" /> 1249 - 4513<br />\
    <img src="styles/legend/India_State_Boundary_0_3.png" /> 4513 - 15008<br />\
    <img src="styles/legend/India_State_Boundary_0_4.png" /> 15008 - 55186<br />'
        });

lyr_India_State_Boundary_0.setVisible(true);
var layersList = [lyr_India_State_Boundary_0];
lyr_India_State_Boundary_0.set('fieldAliases', {'Name': 'Name', 'Type': 'Type', 'Total Accidents due to Weather Conditions_ID': 'Total Accidents due to Weather Conditions_ID', 'Total Accidents due to Weather Conditions_State/ UT': 'Total Accidents due to Weather Conditions_State/ UT', 'Total Accidents due to Weather Conditions_Total Accidents': 'Total Accidents due to Weather Conditions_Total Accidents', });
lyr_India_State_Boundary_0.set('fieldImages', {'Name': 'TextEdit', 'Type': 'TextEdit', 'Total Accidents due to Weather Conditions_ID': 'Range', 'Total Accidents due to Weather Conditions_State/ UT': 'TextEdit', 'Total Accidents due to Weather Conditions_Total Accidents': 'Range', });
lyr_India_State_Boundary_0.set('fieldLabels', {'Name': 'no label', 'Type': 'no label', 'Total Accidents due to Weather Conditions_ID': 'no label', 'Total Accidents due to Weather Conditions_State/ UT': 'no label', 'Total Accidents due to Weather Conditions_Total Accidents': 'no label', });
lyr_India_State_Boundary_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});