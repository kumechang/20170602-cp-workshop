var sisokuEnzan = {
  A: 0,
  B: 0,
  wa: function() {
    return sisokuEnzan.A + sisokuEnzan.B;
  },
  sa: function() {
    return sisokuEnzan.A - sisokuEnzan.B;
  },
  seki: function() {
    return sisokuEnzan.A * sisokuEnzan.B;
  },
  sho: function() {
    return sisokuEnzan.A / sisokuEnzan.B;
  },
  amari: function() {
    return sisokuEnzan.A % sisokuEnzan.B;
  }
}
