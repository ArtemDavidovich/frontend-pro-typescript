interface Airplane {
  numberOfEngines: number;
  isJet: boolean;
  maxHeight: number;
  capacity?: number;
}

const tu154: Airplane = {
  numberOfEngines: 3,
  isJet: true,
  maxHeight: 12_200,
  capacity: 180,
};

const il2: Airplane = {
  numberOfEngines: 1,
  isJet: false,
  maxHeight: 6_000,
  capacity: 2,
};

const airbusA380: Airplane = {
  numberOfEngines: 4,
  isJet: true,
  maxHeight: 13_100,
  capacity: 520
};