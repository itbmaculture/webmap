var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMap_1 = new ol.layer.Tile({
            'title': 'Google Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_district_2 = new ol.format.GeoJSON();
var features_district_2 = format_district_2.readFeatures(json_district_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_district_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_district_2.addFeatures(features_district_2);
var lyr_district_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_district_2, 
                style: style_district_2,
                popuplayertitle: "district",
                interactive: false,
                title: '<img src="styles/legend/district_2.png" /> district'
            });
var format_DistrictZone_3 = new ol.format.GeoJSON();
var features_DistrictZone_3 = format_DistrictZone_3.readFeatures(json_DistrictZone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictZone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictZone_3.addFeatures(features_DistrictZone_3);
var lyr_DistrictZone_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictZone_3, 
                style: style_DistrictZone_3,
                popuplayertitle: "District Zone",
                interactive: false,
    title: 'District Zone<br />\
    <img src="styles/legend/DistrictZone_3_0.png" /> 1<br />\
    <img src="styles/legend/DistrictZone_3_1.png" /> 2<br />\
    <img src="styles/legend/DistrictZone_3_2.png" /> 3<br />\
    <img src="styles/legend/DistrictZone_3_3.png" /> 4<br />\
    <img src="styles/legend/DistrictZone_3_4.png" /> 5<br />\
    <img src="styles/legend/DistrictZone_3_5.png" /> 6<br />'
        });
var format_Publicspace99courtyard_4 = new ol.format.GeoJSON();
var features_Publicspace99courtyard_4 = format_Publicspace99courtyard_4.readFeatures(json_Publicspace99courtyard_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publicspace99courtyard_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publicspace99courtyard_4.addFeatures(features_Publicspace99courtyard_4);
var lyr_Publicspace99courtyard_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Publicspace99courtyard_4, 
                style: style_Publicspace99courtyard_4,
                popuplayertitle: "Public space 99 courtyard",
                interactive: true,
                title: '<img src="styles/legend/Publicspace99courtyard_4.png" /> Public space 99 courtyard'
            });
var format_School338courtyard_5 = new ol.format.GeoJSON();
var features_School338courtyard_5 = format_School338courtyard_5.readFeatures(json_School338courtyard_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School338courtyard_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School338courtyard_5.addFeatures(features_School338courtyard_5);
var lyr_School338courtyard_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School338courtyard_5, 
                style: style_School338courtyard_5,
                popuplayertitle: "School 338 courtyard",
                interactive: true,
                title: '<img src="styles/legend/School338courtyard_5.png" /> School 338 courtyard'
            });
var format_Community471courtyard_6 = new ol.format.GeoJSON();
var features_Community471courtyard_6 = format_Community471courtyard_6.readFeatures(json_Community471courtyard_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Community471courtyard_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Community471courtyard_6.addFeatures(features_Community471courtyard_6);
var lyr_Community471courtyard_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Community471courtyard_6, 
                style: style_Community471courtyard_6,
                popuplayertitle: "Community 471 courtyard",
                interactive: true,
                title: '<img src="styles/legend/Community471courtyard_6.png" /> Community 471 courtyard'
            });
var format_StandardC611courtyard_7 = new ol.format.GeoJSON();
var features_StandardC611courtyard_7 = format_StandardC611courtyard_7.readFeatures(json_StandardC611courtyard_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StandardC611courtyard_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StandardC611courtyard_7.addFeatures(features_StandardC611courtyard_7);
var lyr_StandardC611courtyard_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StandardC611courtyard_7, 
                style: style_StandardC611courtyard_7,
                popuplayertitle: "Standard C 611 courtyard",
                interactive: true,
                title: '<img src="styles/legend/StandardC611courtyard_7.png" /> Standard C 611 courtyard'
            });
var format_StandardB179courtyard_8 = new ol.format.GeoJSON();
var features_StandardB179courtyard_8 = format_StandardB179courtyard_8.readFeatures(json_StandardB179courtyard_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StandardB179courtyard_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StandardB179courtyard_8.addFeatures(features_StandardB179courtyard_8);
var lyr_StandardB179courtyard_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StandardB179courtyard_8, 
                style: style_StandardB179courtyard_8,
                popuplayertitle: "Standard B 179 courtyard",
                interactive: true,
                title: '<img src="styles/legend/StandardB179courtyard_8.png" /> Standard B 179 courtyard'
            });
var format_StandardA118courtyard_9 = new ol.format.GeoJSON();
var features_StandardA118courtyard_9 = format_StandardA118courtyard_9.readFeatures(json_StandardA118courtyard_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StandardA118courtyard_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StandardA118courtyard_9.addFeatures(features_StandardA118courtyard_9);
var lyr_StandardA118courtyard_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StandardA118courtyard_9, 
                style: style_StandardA118courtyard_9,
                popuplayertitle: "Standard A 118 courtyard",
                interactive: true,
                title: '<img src="styles/legend/StandardA118courtyard_9.png" /> Standard A 118 courtyard'
            });
var format_SportfieldatLocations_10 = new ol.format.GeoJSON();
var features_SportfieldatLocations_10 = format_SportfieldatLocations_10.readFeatures(json_SportfieldatLocations_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SportfieldatLocations_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SportfieldatLocations_10.addFeatures(features_SportfieldatLocations_10);
var lyr_SportfieldatLocations_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SportfieldatLocations_10, 
                style: style_SportfieldatLocations_10,
                popuplayertitle: "Sportfield at Locations",
                interactive: true,
    title: 'Sportfield at Locations<br />\
    <img src="styles/legend/SportfieldatLocations_10_0.png" /> Community 471 courtyard <br />\
    <img src="styles/legend/SportfieldatLocations_10_1.png" /> School 338 courtyard<br />\
    <img src="styles/legend/SportfieldatLocations_10_2.png" /> Public 99 courtyard<br />'
        });
var format_Sportfieldtotal908Date16012568_11 = new ol.format.GeoJSON();
var features_Sportfieldtotal908Date16012568_11 = format_Sportfieldtotal908Date16012568_11.readFeatures(json_Sportfieldtotal908Date16012568_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportfieldtotal908Date16012568_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportfieldtotal908Date16012568_11.addFeatures(features_Sportfieldtotal908Date16012568_11);
var lyr_Sportfieldtotal908Date16012568_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportfieldtotal908Date16012568_11, 
                style: style_Sportfieldtotal908Date16012568_11,
                popuplayertitle: "Sportfield total 908 Date 16.01.2568",
                interactive: true,
    title: 'Sportfield total 908 Date 16.01.2568<br />\
    <img src="styles/legend/Sportfieldtotal908Date16012568_11_0.png" /> Standard A 118 courtyard<br />\
    <img src="styles/legend/Sportfieldtotal908Date16012568_11_1.png" /> Standard B 179 courtyard<br />\
    <img src="styles/legend/Sportfieldtotal908Date16012568_11_2.png" /> Standard C 611 courtyard<br />'
        });

lyr_GoogleSatellite_0.setVisible(false);lyr_GoogleMap_1.setVisible(true);lyr_district_2.setVisible(true);lyr_DistrictZone_3.setVisible(true);lyr_Publicspace99courtyard_4.setVisible(false);lyr_School338courtyard_5.setVisible(false);lyr_Community471courtyard_6.setVisible(false);lyr_StandardC611courtyard_7.setVisible(false);lyr_StandardB179courtyard_8.setVisible(false);lyr_StandardA118courtyard_9.setVisible(false);lyr_SportfieldatLocations_10.setVisible(false);lyr_Sportfieldtotal908Date16012568_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMap_1,lyr_district_2,lyr_DistrictZone_3,lyr_Publicspace99courtyard_4,lyr_School338courtyard_5,lyr_Community471courtyard_6,lyr_StandardC611courtyard_7,lyr_StandardB179courtyard_8,lyr_StandardA118courtyard_9,lyr_SportfieldatLocations_10,lyr_Sportfieldtotal908Date16012568_11];
lyr_district_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'dcode': 'dcode', 'dname': 'dname', 'dname_e': 'dname_e', 'pcode': 'pcode', 'pname': 'pname', 'z_code': 'z_code', 'num_female': 'num_female', 'num_male': 'num_male', 'num_health': 'num_health', 'num_temple': 'num_temple', 'num_comm': 'num_comm', 'num_hos': 'num_hos', 'num_sch': 'num_sch', 'area_dis': 'area_dis', });
lyr_DistrictZone_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'dcode': 'dcode', 'dname': 'dname', 'dname_e': 'dname_e', 'pcode': 'pcode', 'pname': 'pname', 'z_code': 'z_code', 'num_female': 'num_female', 'num_male': 'num_male', 'num_health': 'num_health', 'num_temple': 'num_temple', 'num_comm': 'num_comm', 'num_hos': 'num_hos', 'num_sch': 'num_sch', 'area_dis': 'area_dis', });
lyr_Publicspace99courtyard_4.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_School338courtyard_5.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_Community471courtyard_6.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_StandardC611courtyard_7.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_StandardB179courtyard_8.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_StandardA118courtyard_9.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_SportfieldatLocations_10.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_Sportfieldtotal908Date16012568_11.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_district_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'dcode': 'TextEdit', 'dname': 'TextEdit', 'dname_e': 'TextEdit', 'pcode': 'TextEdit', 'pname': 'TextEdit', 'z_code': 'TextEdit', 'num_female': 'TextEdit', 'num_male': 'TextEdit', 'num_health': 'Range', 'num_temple': 'Range', 'num_comm': 'Range', 'num_hos': 'Range', 'num_sch': 'Range', 'area_dis': 'TextEdit', });
lyr_DistrictZone_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'dcode': 'TextEdit', 'dname': 'TextEdit', 'dname_e': 'TextEdit', 'pcode': 'TextEdit', 'pname': 'TextEdit', 'z_code': 'TextEdit', 'num_female': 'TextEdit', 'num_male': 'TextEdit', 'num_health': 'Range', 'num_temple': 'Range', 'num_comm': 'Range', 'num_hos': 'Range', 'num_sch': 'Range', 'area_dis': 'TextEdit', });
lyr_Publicspace99courtyard_4.set('fieldImages', {'district': '', 'name': '', 'grade': '', 'type_': '', 'ownership': '', 'volunteer': '', 'status': '', 'status_oth': '', 'activity': '', 'sport': '', 'sport_othe': '', 'public_space': '', 'area_': '', 'user_': '', 'x': '', 'y': '', });
lyr_School338courtyard_5.set('fieldImages', {'district': '', 'name': '', 'grade': '', 'type_': '', 'ownership': '', 'volunteer': '', 'status': '', 'status_oth': '', 'activity': '', 'sport': '', 'sport_othe': '', 'public_space': '', 'area_': '', 'user_': '', 'x': '', 'y': '', });
lyr_Community471courtyard_6.set('fieldImages', {'district': '', 'name': '', 'grade': '', 'type_': '', 'ownership': '', 'volunteer': '', 'status': '', 'status_oth': '', 'activity': '', 'sport': '', 'sport_othe': '', 'public_space': '', 'area_': '', 'user_': '', 'x': '', 'y': '', });
lyr_StandardC611courtyard_7.set('fieldImages', {'district': '', 'name': '', 'grade': '', 'type_': '', 'ownership': '', 'volunteer': '', 'status': '', 'status_oth': '', 'activity': '', 'sport': '', 'sport_othe': '', 'public_space': '', 'area_': '', 'user_': '', 'x': '', 'y': '', });
lyr_StandardB179courtyard_8.set('fieldImages', {'district': '', 'name': '', 'grade': '', 'type_': '', 'ownership': '', 'volunteer': '', 'status': '', 'status_oth': '', 'activity': '', 'sport': '', 'sport_othe': '', 'public_space': '', 'area_': '', 'user_': '', 'x': '', 'y': '', });
lyr_StandardA118courtyard_9.set('fieldImages', {'district': '', 'name': '', 'grade': '', 'type_': '', 'ownership': '', 'volunteer': '', 'status': '', 'status_oth': '', 'activity': '', 'sport': '', 'sport_othe': '', 'public_space': '', 'area_': '', 'user_': '', 'x': '', 'y': '', });
lyr_SportfieldatLocations_10.set('fieldImages', {'district': 'TextEdit', 'name': 'TextEdit', 'grade': 'TextEdit', 'type_': 'TextEdit', 'ownership': 'TextEdit', 'volunteer': 'TextEdit', 'status': 'TextEdit', 'status_oth': 'TextEdit', 'activity': 'TextEdit', 'sport': 'TextEdit', 'sport_othe': 'TextEdit', 'public_space': 'TextEdit', 'area_': 'TextEdit', 'user_': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Sportfieldtotal908Date16012568_11.set('fieldImages', {'district': 'TextEdit', 'name': 'TextEdit', 'grade': 'TextEdit', 'type_': 'TextEdit', 'ownership': 'TextEdit', 'volunteer': 'TextEdit', 'status': 'TextEdit', 'status_oth': 'TextEdit', 'activity': 'TextEdit', 'sport': 'TextEdit', 'sport_othe': 'TextEdit', 'public_space': 'TextEdit', 'area_': 'TextEdit', 'user_': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_district_2.set('fieldLabels', {'OBJECTID': 'no label', 'dcode': 'no label', 'dname': 'no label', 'dname_e': 'no label', 'pcode': 'no label', 'pname': 'no label', 'z_code': 'no label', 'num_female': 'no label', 'num_male': 'no label', 'num_health': 'no label', 'num_temple': 'no label', 'num_comm': 'no label', 'num_hos': 'no label', 'num_sch': 'no label', 'area_dis': 'no label', });
lyr_DistrictZone_3.set('fieldLabels', {'OBJECTID': 'no label', 'dcode': 'no label', 'dname': 'no label', 'dname_e': 'no label', 'pcode': 'no label', 'pname': 'no label', 'z_code': 'no label', 'num_female': 'no label', 'num_male': 'no label', 'num_health': 'no label', 'num_temple': 'no label', 'num_comm': 'no label', 'num_hos': 'no label', 'num_sch': 'no label', 'area_dis': 'no label', });
lyr_Publicspace99courtyard_4.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_School338courtyard_5.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_Community471courtyard_6.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_StandardC611courtyard_7.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_StandardB179courtyard_8.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_StandardA118courtyard_9.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_SportfieldatLocations_10.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_Sportfieldtotal908Date16012568_11.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_Sportfieldtotal908Date16012568_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});