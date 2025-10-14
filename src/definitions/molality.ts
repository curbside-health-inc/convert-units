import { Measure, Unit } from './../index';

export type MolalitySystems = 'molar' | 'osmolar';
export type MolalityUnits = MolalityMolarUnits | MolalityOsmolarUnits;
export type MolalityMolarUnits = 'mmol/kg' | 'mol/kg';
export type MolalityOsmolarUnits = 'mOsm/kg' | 'Osm/kg';

const molar: Record<MolalityMolarUnits, Unit> = {
  'mmol/kg': {
    name: {
      singular: 'Millimole per kilogram',
      plural: 'Millimoles per kilogram',
    },
    to_anchor: 1 / 1000,
    with_mole: true,
  },
  'mol/kg': {
    name: {
      singular: 'Mole per kilogram',
      plural: 'Moles per kilogram',
    },
    to_anchor: 1,
    with_mole: true,
  },
};

const osmolar: Record<MolalityOsmolarUnits, Unit> = {
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

// By default assume ideal non-dissociating solutes (van 't Hoff factor i = 1)
// so molality and osmolality are numerically equal.
const molality: Measure<MolalitySystems, MolalityUnits> = {
  systems: {
    molar,
    osmolar,
  },
  anchors: {
    molar: {
      osmolar: {
        ratio: 1,
      },
    },
    osmolar: {
      molar: {
        ratio: 1,
      },
    },
  },
};

export default molality;
