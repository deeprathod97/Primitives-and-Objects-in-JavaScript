// Primitives and Objects in javaScript

// nn bb ss u
let a = null;
let b = 345;
let c = true; // cab=n also be false 
let d = BigInt("560") + BigInt("3") + BigInt("35")
let e = "Deep"
let f = Symbol("I am a nice symbol")
let g = undefined

console.log(a, b, c, d, e, f, g)
console.log(typeof d)
console.log(typeof c)


//Non primitive data Type - Objects in Js

const item = {
    "Deep": true,
    "Kunal": false,
    "Dhruv": 25,
    "Jaypal": undefined
}
console.log(item["Deep"])
console.log(item["Kunal"])
console.log(item["Dhruv"])
console.log(item["Jaypal"])
