const chai = require('chai');
const sinon = require('sinon')
const expect = chai.expect;
const assert = chai.assert;
const PrimeFactors = require('../app/primeFactors');

describe('prime factors Kata Test: \n', () => {
    let primeFactors = new PrimeFactors()
    it("should throw if number is invalid", function () {
        expect(function () {
            primeFactors.generate('invalid number');
        }).to.throw(Error);
    });
    it("should return empty table when input is 1", function () {
        const result = primeFactors.generate(1);
        expect(result).to.be.an('array')
        expect(result).to.be.empty;
    });
    it("should return result when input is 2", function () {
        const result = primeFactors.generate(2);
        expect(result).to.be.an('array')
        expect(result).to.have.lengthOf(1);
        expect(result[0]).to.equal(2);
    });
    it("should return result when input is 3", function () {
        const result = primeFactors.generate(3);
        expect(result).to.be.an('array')
        expect(result).to.have.lengthOf(1);
        expect(result[0]).to.equal(3);
    });
    it("should return result when input is 4", function () {
        const result = primeFactors.generate(4);
        expect(result).to.be.an('array')
        expect(result).to.have.lengthOf(2);
        expect(result[0]).to.equal(2);
        expect(result[1]).to.equal(2);
    });
    it("should return result when input is 5", function () {
        const result = primeFactors.generate(5);
        expect(result).to.be.an('array')
        expect(result).to.have.lengthOf(1);
        expect(result[0]).to.equal(5);
    });
    it("should return result when input is 6", function () {
        const result = primeFactors.generate(6);
        expect(result).to.be.an('array')
        expect(result).to.have.lengthOf(2);
        expect(result[0]).to.equal(2);
        expect(result[1]).to.equal(3);
    });
    it("should return result when input is 8", function () {
        const result = primeFactors.generate(8);
        expect(result).to.be.an('array')
        expect(result).to.have.lengthOf(3);
        expect(result[0]).to.equal(2);
        expect(result[1]).to.equal(2);
        expect(result[1]).to.equal(2);
    });
    it("should return result when input is 9", function () {
        const result = primeFactors.generate(9);
        expect(result).to.be.an('array')
        expect(result).to.have.lengthOf(2);
        expect(result[0]).to.equal(3);
        expect(result[1]).to.equal(3);
    });
    it("should return result when input is 60", function () {
        const result = primeFactors.generate(60);
        expect(primeFactors.generate(60)).to.be.an('array')
        expect(result).to.be.an('array')
        expect(result).to.have.lengthOf(4);
        expect(result[0]).to.equal(2);
        expect(result[1]).to.equal(2);
        expect(result[2]).to.equal(3);
        expect(result[3]).to.equal(5);
    });
});