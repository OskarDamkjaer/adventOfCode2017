const assert = require('assert')
const solve = require('./solve')

describe('partTwo(inputString)', function () {
  it('should return a2582a3a0e66e6e86e3812dcb672a272 on empty string', function () {
    assert.equal(solve.partTwo(""), "a2582a3a0e66e6e86e3812dcb672a272")
  })

  it('should return 33efeb34ea91902bb2f59c9920caa6cd on input AoC 2017', function () {
    assert.equal(solve.partTwo("AoC 2017"), "33efeb34ea91902bb2f59c9920caa6cd")
  })

  it('should return 3efbe78a8d82f29979031a4aa0b16a9d on input 1,2,3', function () {
    assert.equal(solve.partTwo("1,2,3"), "3efbe78a8d82f29979031a4aa0b16a9d")
  })

  it('should return 63960835bcdc130f0b66d7ff4f6a5a8e on input 1,2,4', function () {
    assert.equal(solve.partTwo("1,2,4"), "63960835bcdc130f0b66d7ff4f6a5a8e")
  })
})