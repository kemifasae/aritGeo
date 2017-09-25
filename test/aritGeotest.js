
let myapp=require('../aritGeo.js');
//const should = require('chai').should;
//let assert = require('chai').assert;
const expect = require('chai').expect; 

describe("Progression Check", function(){
    it("should return an error if input is not an array", function(){
        expect(myapp.aritGeo(2,3,4)).to.equal("Not an Array");
    });

    it("should give an error if array doesn't contain only numbers", function(){
        expect (myapp.aritGeo(["free",0,2,4])).to.equal("Please array should contain numbers");
    });

    it("should return 0 if array is empty", function(){
        expect (myapp.aritGeo([])).to.equal(0);
    });

    it("should return arithmetic if true", function(){
        expect (myapp.aritGeo([2,4,6,8,10])).to.equal("Arithmetic");
    });

    it("should return geometric if true", function(){
        expect (myapp.aritGeo([2,4,8,16,32,64])).to.equal("Geometric");
    });

    it("should return -1 if it's neither arithmetic or geometric", function(){
        expect (myapp.aritGeo([2,4,5,6,8,7,15])).to.equal(-1);
    });

    it("should give say if not arithmetic or geometric", function(){
        expect (myapp.aritGeo([2,4,0,8,16])).to.equal("Geometric");
    });

    it("should tell if it's not an array", function(){
        expect (myapp.aritGeo('andela')).to.equal("Not an Array");
    });
   
    it("should tell if it's not an array", function(){
        expect (myapp.aritGeo([0,2,4,8,16])).to.equal(-1);
    });


});