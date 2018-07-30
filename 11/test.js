const assert = require('assert')
const solve = require('./solve')
const input = require('fs').readFileSync('./input.txt', 'utf-8')

describe('partOne(inputString)', function () {
  it('should return 3', function () {
    assert.equal(solve.partOne('ne,ne,ne'), 3)
  })
  it('should return 0', function () {
    assert.equal(solve.partOne('ne,ne,sw,sw'), 0)
  })
  it('should return 2', function () {
    assert.equal(solve.partOne('se,se'), 2)
  })
  it('should return 3 on s,s,sw', function () {
    assert.equal(solve.partOne('s,s,sw'), 3)
  })
  it('ne,ne,s,s should return 2', function () {
    assert.equal(solve.partOne('ne,ne,s,s'), 2)
  })
  it('se,sw,se,sw,sw should return 3', function () {
    assert.equal(solve.partOne('se,sw,se,sw,sw'), 3)
  })
  it('should return 1567 on part two with proper input', function () {
    assert.equal(solve.partTwo(input), 1567)
  }).timeout(10000)
  it('should return 810 in part one with proper input', function () {
    assert.equal(solve.partOne(input), 810)
  }).timeout(10000)
})

