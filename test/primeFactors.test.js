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
    it("should return empty table when input is 2", function () {
        expect(primeFactors.generate(2)).to.be.an('array')
        expect(primeFactors.generate(2)).to.have.lengthOf(1);
        expect(primeFactors.generate(2)[0]).to.equal(2);
    });
    it("should return empty table when input is 3", function () {
        expect(primeFactors.generate(3)).to.be.an('array')
        expect(primeFactors.generate(3)).to.have.lengthOf(1);
        expect(primeFactors.generate(3)[0]).to.equal(3);
    });
    it("should return empty table when input is 4", function () {
        expect(primeFactors.generate(4)).to.be.an('array')
        expect(primeFactors.generate(4)).to.have.lengthOf(2);
        expect(primeFactors.generate(4)[0]).to.equal(2);
        expect(primeFactors.generate(4)[1]).to.equal(2);
    });
    it("should return empty table when input is 5", function () {
        expect(primeFactors.generate(5)).to.be.an('array')
        expect(primeFactors.generate(5)).to.have.lengthOf(1);
        expect(primeFactors.generate(5)[0]).to.equal(5);
    });
    it("should return empty table when input is 6", function () {
        expect(primeFactors.generate(6)).to.be.an('array')
        expect(primeFactors.generate(6)).to.have.lengthOf(2);
        expect(primeFactors.generate(6)[0]).to.equal(2);
        expect(primeFactors.generate(6)[1]).to.equal(3);
    });
    it("should return empty table when input is 8", function () {
        expect(primeFactors.generate(8)).to.be.an('array')
        expect(primeFactors.generate(8)).to.have.lengthOf(3);
        expect(primeFactors.generate(8)[0]).to.equal(2);
        expect(primeFactors.generate(8)[1]).to.equal(2);
        expect(primeFactors.generate(8)[1]).to.equal(2);
    });
});