var sisokuEnzan = {
  A: 0,
  B: 0,
  wa: () => {
    return sisokuEnzan.A + sisokuEnzan.B;
  },
  sa: () => {
    return sisokuEnzan.A - sisokuEnzan.B;
  },
  seki: () => {
    return sisokuEnzan.A * sisokuEnzan.B;
  },
  sho: () => {
    return sisokuEnzan.A / sisokuEnzan.B;
  },
  amari: () => {
    return sisokuEnzan.A % sisokuEnzan.B;
  }
}
