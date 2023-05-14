import Map from '/node_modules/ol/Map.js';
import View from '/node_modules/ol/View.js';
import TileLayer from '/node_modules/ol/layer/Tile.js';
import OSM from '/node_modules/ol/source/OSM.js';

const map = new Map({
  view: new View({
    center: [0, 0],
    zoom: 1,
  }),
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
});