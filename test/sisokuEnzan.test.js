describe('関数のテスト', function() {
  // 成功するテスト
  it('1 + 2 = 3である', function(){
    sisokuEnzan.A = 1;
    sisokuEnzan.B = 2;
    expect( sisokuEnzan.wa() ).toBe(3);
  });

  // 失敗するテスト
  it('1 * 2 = 3である', function(){
    sisokuEnzan.A = 1;
    sisokuEnzan.B = 2;
    expect( sisokuEnzan.seki() ).toBe(3);
  });
});
