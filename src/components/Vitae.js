import React from 'react/lib/React';

import Button from 'react-bootstrap/lib/Button';
import Layers from 'openlayers'

export default React.createClass({
  render() {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
    return (
        <div id="map" className="sidebar-map"></div>
    );
  },
  componentDidMount() {
    let map = new Layers.Map({
      target: 'map',
      layers: [
        new Layers.layer.Tile({
          source: new Layers.source.OSM()
        })
      ],
      view: new Layers.View({
        center: Layers.proj.transform([3.6656, 45.9192], 'EPSG:4326', 'EPSG:3857'),
        zoom: 6
      })
    });
  }
});
