const assert = require('assert')
const solve = require('./solve')

describe('partTwo(inputString)', function () {
  it('should return 3', function () {
    assert.equal(solve.partTwo("ne,ne,ne"), 3)
  })
  it('should return 0', function () {
    assert.equal(solve.partOne("ne,ne,sw,sw"), 0)
  })
  it('should return 2', function () {
    assert.equal(solve.partOne("se,se"), 2)
  })
  it('should return 3 on s,s,sw', function () {
    assert.equal(solve.partOne("s,s,sw"), 3)
  })
})