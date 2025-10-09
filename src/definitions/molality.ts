import { Measure, Unit } from './../index';

export type MolalitySystems = 'metric';
export type MolalityUnits = MolalityMetricUnits;
export type MolalityMetricUnits = 'mmol/kg' | 'mol/kg';

const metric: Record<MolalityMetricUnits, Unit> = {
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

const molality: Measure<MolalitySystems, MolalityUnits> = {
  systems: {
    metric,
  },
};

export default molality;
