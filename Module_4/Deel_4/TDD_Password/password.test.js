//functies verifier
const isNotBlank = require("./password.js"); 
const isLessThan9Chars = require("./password.js"); 
const hasUppercase = require("./password.js"); 
const hasDigit = require("./password.js"); 
const hasLowercase = require("./password.js"); 

test("should not be null", () => {
    expect(isNotBlank("kk1")).toBe(true);
})

test("should have less than 9 characters", () => {
    expect(isLessThan9Chars("kk1")).toBe(true);
})

test("should has at least one uppercase character", () => {
    expect(hasUppercase("Kk1")).toBe(true);
})

test("should has at least one uppercase character", () => {
    expect(hasLowercase("Kk1")).toBe(true);
})

test("should have less than 9 characters", () => {
    expect(hasDigit("kk1")).toBe(true);
})

//passwordcounter
const passwordVerifier = require("./password.js"); 

// test("should have score 4 and be valid", () => {
//     expect(passwordVerifier("henkie1")).toEqual({"score": 4, "valid": true})
// }) 

// test("should have score 4 and be valid", () => {
//     expect(passwordVerifier("1234a")).toEqual({"score": 4, "valid": true})
// }) 

// test("should have score 3 and be valid", () => {
//     expect(passwordVerifier("z")).toEqual({"score": 3, "valid": true})
// }) 

// test("should have score 3 and be valid", () => {
//     expect(passwordVerifier("henkie1234")).toEqual({"score": 3, "valid": true})
// }) 

// test("should have score 0 and be false", () => {
//     expect(passwordVerifier("HENK33$")).toEqual({"score": 0, "valid": false})
// }) 

// test("should have score 0 and be false", () => {
//     expect(passwordVerifier("1234")).toEqual({"score": 0, "valid": false})
// }) 

// test("should have score 0 and be false", () => {
//     expect(passwordVerifier("")).toEqual({"score": 0, "valid": false})
// }) 
