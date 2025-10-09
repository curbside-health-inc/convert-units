import { Measure, Unit } from './../index';

export type OsmolalitySystems = 'metric';
export type OsmolalityUnits = OsmolalityMetricUnits;
export type OsmolalityMetricUnits = 'mOsm/kg' | 'Osm/kg';

const metric: Record<OsmolalityMetricUnits, Unit> = {
  'mOsm/kg': {
    name: {
      singular: 'Milliosmole per kilogram',
      plural: 'Milliosmoles per kilogram',
    },
    to_anchor: 1 / 1000,
  },
  'Osm/kg': {
    name: {
      singular: 'Osmole per kilogram',
      plural: 'Osmoles per kilogram',
    },
    to_anchor: 1,
  },
};

const osmolality: Measure<OsmolalitySystems, OsmolalityUnits> = {
  systems: {
    metric,
  },
};

export default osmolality;
