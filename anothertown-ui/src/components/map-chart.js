
import Plotly from 'plotly.js';
import React from 'react';
import '../scss/map-styles.scss';

class MapChart extends React.Component{
    constructor(props){
        super(props);  
        this.state = {
            chart_title: 'Top 10 US Cities'
        }
   }  

   componentDidMount = () =>{
       this.renderMap()
   }

   renderMap2= () =>{
    Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv', function(err, rows){
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }

    var scl = [[0, 'rgb(150,0,90)'],[0.125, 'rgb(0, 0, 200)'],[0.25,'rgb(0, 25, 255)'],[0.375,'rgb(0, 152, 255)'],[0.5,'rgb(44, 255, 150)'],[0.625,'rgb(151, 255, 0)'],[0.75,'rgb(255, 234, 0)'],[0.875,'rgb(255, 111, 0)'],[1,'rgb(255, 0, 0)']];

        var data = [{
            type: 'scattermapbox',
            mode: 'markers',
            text: unpack(rows, 'Globvalue'),
            lon: unpack(rows, 'Lon'),
            lat: unpack(rows, 'Lat'),
            marker: {
            color: unpack(rows, 'Globvalue'),
            colorscale: scl,
            cmin: 0,
            cmax: 1.4,
            reversescale: true,
            opacity: 0.5,
            size: 3,
            colorbar:{
                thickness: 10,
                titleside: 'right',
                outlinecolor: 'rgba(68,68,68,0)',
                ticks: 'outside',
                ticklen: 3,
                shoticksuffix: 'last',
                ticksuffix: 'inches',
                dtick: 0.1
            }
            },
            name: 'NA Precipitation'
        }];

        var layout = {
        dragmode: 'zoom',
        mapbox: {
            center: {
            lat: 38.03697222,
            lon: -90.70916722
            },
            domain: {
            x: [0, 1],
            y: [0, 1]
            },
            style: 'light',
            zoom: 3
        },
        margin: {
            r: 0,
            t: 0,
            b: 0,
            l: 0,
            pad: 0
        },
        showlegend: false
    };

    Plotly.setPlotConfig({
        mapboxAccessToken: "your access token"
    })

        Plotly.newPlot('myDiv', data, layout);
    });
    }


    renderMap = () => {
        const {
            chart_title
        } = this.state;

        Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv', function(err, rows){
            function unpack(rows, key) {
                return rows.map(function(row) { return row[key]; });
            }
        
            var data = [{
                type: 'choropleth',
                locationmode: 'USA-states',
                locations: unpack(rows, 'code'),
                z: unpack(rows, 'total exports'),
                text: unpack(rows, 'state'),
                zmin: 0,
                zmax: 17000,
                colorscale: [
                    [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                    [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                    [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
                ],
                marker: {
                    line:{
                        color: 'rgb(255,255,255)',
                        width: 2
                    }
                }
            }];
        
        
            var layout = {
                title: chart_title,
                geo:{
                    scope: 'usa',
                    showlakes: true,
                    lakecolor: 'rgb(255,255,255)'
                },
                margin:[0,0,0,0]
            };
        
            Plotly.newPlot("myDiv", data, layout, {showLink: false});
        });
    }
    
    render = () => {
        return <div className='map-container' id='myDiv'/>
    }
    

}

export default MapChart;