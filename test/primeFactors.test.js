const chai = require('chai');
const sinon = require('sinon')
const expect = chai.expect;
const assert = chai.assert;
const PrimeFactors = require('../app/primeFactors');

describe('prime factors Kata Test: \n', () => {
    let primeFactors = new PrimeFactors()
    it("should return empty table when input is 1", function () {
        expect(primeFactors.generate(1)).to.be.an('array')
        expect(primeFactors.generate(1)).to.be.empty;
    });
});